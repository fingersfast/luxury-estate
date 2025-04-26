"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Property } from "../../data/properties";

interface PropertyListItemProps {
  property: Property;
  index: number;
}

export default function PropertyListItem({
  property,
  index,
}: PropertyListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border bg-background rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/properties/${property.id}`}
        className="flex flex-col md:flex-row"
      >
        <div className="relative w-full md:w-80 h-60">
          <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 border border-primary text-white bg-primary/70 backdrop-blur-sm uppercase text-xs tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details
            </span>
          </div>
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
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

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:mb-2">
              <h3 className="text-xl font-heading font-medium">
                {property.title}
              </h3>
              <p className="text-primary text-lg font-medium">
                {property.price}
              </p>
            </div>

            <p className="text-muted text-sm mb-3">{property.location}</p>

            <p className="text-sm text-muted mb-4 line-clamp-2">
              {property.description}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="flex items-center gap-1">
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
              </div>
              <div className="flex items-center gap-1">
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
              </div>
              <div className="flex items-center gap-1">
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
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {property.features.slice(0, 5).map((feature, i) => (
              <span
                key={i}
                className="text-xs bg-accent text-muted px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 5 && (
              <span className="text-xs bg-accent text-muted px-2 py-1 rounded">
                +{property.features.length - 5} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
