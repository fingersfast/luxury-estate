"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample property locations (would come from API in a real app)
const locations = [
  {
    id: 1,
    name: "Beverly Hills Mansion",
    lat: 34.0736,
    lng: -118.4004,
    price: "$19.5M",
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    id: 2,
    name: "Malibu Beach House",
    lat: 34.0259,
    lng: -118.7798,
    price: "$12.8M",
    type: "Beach House",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897",
  },
  {
    id: 3,
    name: "Manhattan Penthouse",
    lat: 40.7831,
    lng: -73.9712,
    price: "$8.9M",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 4,
    name: "Miami Waterfront Villa",
    lat: 25.7617,
    lng: -80.1918,
    price: "$15.2M",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
  {
    id: 5,
    name: "Aspen Mountain Retreat",
    lat: 39.1911,
    lng: -106.8175,
    price: "$11.7M",
    type: "Mountain Retreat",
    image: "https://images.unsplash.com/photo-1486162928267-e6274cb3106f",
  },
];

export default function PropertyMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium mb-2 inline-block">
            Worldwide Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4 tracking-tight">
            Our Global Presence
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explore our exclusive listings in the most prestigious locations
            around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative bg-accent/10 p-4 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center group">
            <Image
              src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99"
              alt="World Map"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-secondary/50 z-10"></div>

            {/* World map dots */}
            {locations.map((location) => (
              <motion.div
                key={location.id}
                className={`absolute w-4 h-4 rounded-full bg-primary z-20 cursor-pointer 
                  ${
                    activeLocation === location.id
                      ? "scale-150 ring-4 ring-primary/30"
                      : "scale-100"
                  }`}
                style={{
                  // Map lat/lng to position on the map container
                  // These are approximate positions for visual purposes
                  left: `${((location.lng + 180) / 360) * 100}%`,
                  top: `${((90 - location.lat) / 180) * 100}%`,
                }}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {activeLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-secondary px-3 py-2 rounded shadow-lg whitespace-nowrap z-30"
                  >
                    <div className="font-medium text-xs">{location.name}</div>
                    <div className="text-primary text-xs font-bold">
                      {location.price}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-heading mb-6 border-b border-accent/20 pb-3">
              Featured Locations
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <Link
                    href={`/properties?location=${encodeURIComponent(
                      location.name
                    )}`}
                    className={`block p-4 border-l-2 transition-all duration-300 rounded-r-lg ${
                      activeLocation === location.id
                        ? "border-primary bg-accent/20"
                        : "border-accent/30 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 rounded-md overflow-hidden relative flex-shrink-0">
                          <Image
                            src={location.image}
                            alt={location.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{location.name}</h4>
                          <p className="text-muted text-sm">{location.type}</p>
                        </div>
                      </div>
                      <p className="text-primary font-medium">
                        {location.price}+
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/properties"
                className="inline-flex items-center text-primary hover:text-primary-dark group"
              >
                <span className="border-b border-transparent group-hover:border-primary transition-all duration-300">
                  View all locations
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
