"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Property } from "../../data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              scale: isHovered ? 1.08 : 1,
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
            <div className="absolute top-4 left-4 bg-primary text-white text-xs uppercase tracking-wider py-1 px-3">
              {property.status}
            </div>
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              <span className="group-hover:text-primary transition-colors">
                {property.area}
              </span>
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex flex-wrap gap-1">
              {property.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-accent text-muted px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="text-xs bg-accent text-muted px-2 py-1 rounded">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
