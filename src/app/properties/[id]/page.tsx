"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "../../../components/layout/MainLayout";
import { properties, Property } from "../../../data/properties";
import Link from "next/link";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [property, setProperty] = useState<Property | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedProperties, setRelatedProperties] = useState<Property[]>([]);

  useEffect(() => {
    const propertyId = Number(params.id);
    const foundProperty = properties.find((p) => p.id === propertyId);

    if (foundProperty) {
      setProperty(foundProperty);
      setSelectedImage(foundProperty.images[0]);

      // Get related properties (same location or type)
      const related = properties
        .filter(
          (p) =>
            p.id !== propertyId &&
            (p.location === foundProperty.location ||
              p.type === foundProperty.type)
        )
        .slice(0, 3);

      setRelatedProperties(related);
    } else {
      // Property not found, redirect to properties page
      router.push("/properties");
    }

    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <MainLayout>
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!property) {
    return (
      <MainLayout>
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center py-16">
              <h1 className="text-3xl font-heading font-medium mb-4">
                Property Not Found
              </h1>
              <p className="text-muted mb-8">
                The property you are looking for does not exist or has been
                removed.
              </p>
              <Link
                href="/properties"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <Link
                href="/properties"
                className="hover:text-primary transition-colors"
              >
                Properties
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span className="truncate max-w-xs">{property.title}</span>
            </div>
          </div>

          {/* Property Title Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-medium mb-2">
                {property.title}
              </h1>
              <p className="text-muted mb-2">{property.location}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-2xl text-primary font-medium">
                {property.price}
              </span>
              <span className="px-3 py-1 bg-primary text-white text-sm uppercase tracking-wider">
                {property.status}
              </span>
            </div>
          </div>

          {/* Property Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
            <div className="lg:col-span-8">
              <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-40 rounded-lg overflow-hidden cursor-pointer transition-opacity ${
                    selectedImage === image
                      ? "ring-2 ring-primary"
                      : "hover:opacity-90"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${property.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
            <div className="md:col-span-5">
              <div className="bg-background border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-heading font-medium mb-4">
                  Property Details
                </h2>
                <p className="text-muted mb-6">{property.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
                  <div>
                    <h3 className="text-sm text-muted mb-1">Property Type</h3>
                    <p className="font-medium">{property.type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted mb-1">Bedrooms</h3>
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted mb-1">Bathrooms</h3>
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted mb-1">Area</h3>
                    <p className="font-medium">{property.area}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted mb-1">Year Built</h3>
                    <p className="font-medium">{property.yearBuilt}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted mb-1">Parking</h3>
                    <p className="font-medium">{property.parking} Spaces</p>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="text-xl font-heading font-medium mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-background border border-border rounded-lg p-6 mb-6">
                <h2 className="text-xl font-heading font-medium mb-4">
                  Schedule a Viewing
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
                  >
                    Schedule Viewing
                  </button>
                </form>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="text-xl font-heading font-medium mb-4">
                  Contact Agent
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                      alt="Agent"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Reynolds</h3>
                    <p className="text-sm text-muted">
                      Luxury Property Specialist
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>michael@luxuryestate.com</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div>
              <h2 className="text-2xl font-heading font-medium mb-6">
                Related Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProperty, index) => (
                  <motion.div
                    key={relatedProperty.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      href={`/properties/${relatedProperty.id}`}
                      className="block overflow-hidden"
                    >
                      <div className="relative overflow-hidden h-64 w-full">
                        <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-4 py-2 border border-primary text-white bg-primary/70 backdrop-blur-sm uppercase text-xs tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                          </span>
                        </div>
                        <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700">
                          <Image
                            src={relatedProperty.image}
                            alt={relatedProperty.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-white text-xs uppercase tracking-wider py-1 px-3">
                            {relatedProperty.status}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-background transition-all duration-300 group-hover:shadow-md">
                        <h3 className="text-xl font-heading font-medium mb-1">
                          {relatedProperty.title}
                        </h3>
                        <p className="text-muted text-sm mb-3">
                          {relatedProperty.location}
                        </p>
                        <p className="text-primary text-lg font-medium">
                          {relatedProperty.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
