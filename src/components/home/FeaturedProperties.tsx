"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample properties data (in a real app, this would come from an API/database)
const properties = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "7,500",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
  {
    id: 2,
    title: "Penthouse with City Views",
    location: "Manhattan, New York",
    price: "$8,900,000",
    bedrooms: 4,
    bathrooms: 4.5,
    area: "4,200",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    title: "Tuscan-Style Estate",
    location: "Beverly Hills, California",
    price: "$19,750,000",
    bedrooms: 7,
    bathrooms: 9,
    area: "12,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  },
  {
    id: 4,
    title: "Waterfront Modern Mansion",
    location: "Miami Beach, Florida",
    price: "$15,900,000",
    bedrooms: 6,
    bathrooms: 8,
    area: "10,800",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
];

export default function FeaturedProperties() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium mb-2 inline-block">
            Exclusive Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4 tracking-tight">
            Featured Properties
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary properties in the
            most sought-after locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                href={`/properties/${property.id}`}
                className="block overflow-hidden"
              >
                <div className="relative overflow-hidden h-64 md:h-72 w-full">
                  <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-primary text-white bg-primary/70 backdrop-blur-sm uppercase text-xs tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      scale: hoveredId === property.id ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-4 bg-background transition-all duration-300 group-hover:shadow-md">
                  <h3 className="text-xl font-heading font-medium mb-1">
                    {property.title}
                  </h3>
                  <p className="text-muted text-sm mb-3">{property.location}</p>
                  <p className="text-primary text-lg font-medium mb-3">
                    {property.price}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
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
                      >
                        <path d="M3 22v-8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8"></path>
                        <path d="M2 8h20"></path>
                        <path d="M7 8v0a5 5 0 0 1 5-5 5 5 0 0 1 5 5v0"></path>
                      </svg>
                      <span className="group-hover:text-primary transition-colors">
                        {property.bedrooms} Beds
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
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
                      >
                        <path d="M6 20h12"></path>
                        <path d="M6 14h12"></path>
                        <path d="M9 4h6v6h4l-7 7-7-7h4V4z"></path>
                      </svg>
                      <span className="group-hover:text-primary transition-colors">
                        {property.bathrooms} Baths
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
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
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                      <span className="group-hover:text-primary transition-colors">
                        {property.area} sq ft
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/properties"
            className="relative px-8 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider inline-block group overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative flex items-center justify-center gap-2">
              View All Properties
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
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
