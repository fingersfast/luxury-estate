"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { locations, propertyTypes } from "../../data/properties";

interface FilterPanelProps {
  location: string;
  setLocation: (location: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
  minBedrooms: number | null;
  setMinBedrooms: (beds: number | null) => void;
  priceRange: [number | null, number | null];
  setPriceRange: (range: [number | null, number | null]) => void;
  areaRange: [number | null, number | null];
  setAreaRange: (range: [number | null, number | null]) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

export default function FilterPanel({
  location,
  setLocation,
  propertyType,
  setPropertyType,
  minBedrooms,
  setMinBedrooms,
  priceRange,
  setPriceRange,
  areaRange,
  setAreaRange,
  applyFilters,
  resetFilters,
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localPriceRange, setLocalPriceRange] =
    useState<[number | null, number | null]>(priceRange);
  const [localAreaRange, setLocalAreaRange] =
    useState<[number | null, number | null]>(areaRange);

  const handlePriceChange = (index: 0 | 1, value: string) => {
    const newValue = value === "" ? null : Number(value);
    const newRange: [number | null, number | null] = [...localPriceRange];
    newRange[index] = newValue;
    setLocalPriceRange(newRange as [number | null, number | null]);
  };

  const handleAreaChange = (index: 0 | 1, value: string) => {
    const newValue = value === "" ? null : Number(value);
    const newRange: [number | null, number | null] = [...localAreaRange];
    newRange[index] = newValue;
    setLocalAreaRange(newRange as [number | null, number | null]);
  };

  const handleApplyFilters = () => {
    setPriceRange(localPriceRange);
    setAreaRange(localAreaRange);
    applyFilters();
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  };

  const bedroomOptions = [
    { value: null, label: "Any" },
    { value: 1, label: "1+" },
    { value: 2, label: "2+" },
    { value: 3, label: "3+" },
    { value: 4, label: "4+" },
    { value: 5, label: "5+" },
    { value: 6, label: "6+" },
  ];

  return (
    <div className="bg-background border border-border rounded-lg shadow-sm mb-8">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-medium font-heading">Filter Properties</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden flex items-center gap-1 text-sm"
        >
          {isExpanded ? "Hide Filters" : "Show Filters"}
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
            className={`transform ${isExpanded ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <motion.div
        className={`overflow-hidden ${
          isExpanded ? "block" : "hidden md:block"
        }`}
        initial={{ height: "auto" }}
        animate={{ height: "auto" }}
      >
        <div className="p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location Filter */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-2"
              >
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium mb-2"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label
                htmlFor="minBedrooms"
                className="block text-sm font-medium mb-2"
              >
                Bedrooms
              </label>
              <select
                id="minBedrooms"
                value={minBedrooms === null ? "" : minBedrooms.toString()}
                onChange={(e) =>
                  setMinBedrooms(
                    e.target.value === "" ? null : Number(e.target.value)
                  )
                }
                className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {bedroomOptions.map((option) => (
                  <option
                    key={option.label}
                    value={option.value === null ? "" : option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={localPriceRange[0] === null ? "" : localPriceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                  className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  min="0"
                />
                <span className="text-muted">to</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={localPriceRange[1] === null ? "" : localPriceRange[1]}
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                  className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  min="0"
                />
              </div>
            </div>

            {/* Area Range */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Area (sq ft)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min Area"
                  value={localAreaRange[0] === null ? "" : localAreaRange[0]}
                  onChange={(e) => handleAreaChange(0, e.target.value)}
                  className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  min="0"
                />
                <span className="text-muted">to</span>
                <input
                  type="number"
                  placeholder="Max Area"
                  value={localAreaRange[1] === null ? "" : localAreaRange[1]}
                  onChange={(e) => handleAreaChange(1, e.target.value)}
                  className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3">
            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-border text-muted hover:bg-accent transition-colors text-sm"
            >
              Reset Filters
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-6 py-2 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
