"use client";

import { useState, useEffect, useCallback } from "react"; // 🛑 Notice: added useCallback
import MainLayout from "../../components/layout/MainLayout";

import {
  properties,
  filterProperties,
  sortProperties,
  propertyTypes,
  locations,
} from "../../data/properties";
import { useSearchParams } from "next/navigation";

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  // Filter states
  const [locationFilter, setLocationFilter] = useState<string>("All Locations");
  const [typeFilter, setTypeFilter] = useState<string>("All Types");
  const [minBedroomsFilter, setMinBedroomsFilter] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null]);
  const [areaRange, setAreaRange] = useState<[number | null, number | null]>([null, null]);

  // Sort and view states
  const [sortOption, setSortOption] = useState<string>("price-desc");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Filtered properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // ✅ FIRST: declare applyFilters using useCallback (important for useEffect dependency)
  const applyFilters = useCallback(() => {
    let filtered = filterProperties(
      properties,
      locationFilter,
      typeFilter,
      minBedroomsFilter,
      priceRange[0],
      priceRange[1],
      areaRange[0],
      areaRange[1]
    );

    filtered = sortProperties(filtered, sortOption);

    setFilteredProperties(filtered);
  }, [
    locationFilter,
    typeFilter,
    minBedroomsFilter,
    priceRange,
    areaRange,
    sortOption
  ]);

  // 🛠 THEN use applyFilters inside useEffect
  useEffect(() => {
    const locationParam = searchParams.get("location");
    const typeParam = searchParams.get("type");
    const bedsParam = searchParams.get("beds");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const minAreaParam = searchParams.get("minArea");
    const maxAreaParam = searchParams.get("maxArea");
    const sortParam = searchParams.get("sort");
    const viewParam = searchParams.get("view") as "grid" | "list" | null;

    if (locationParam && locations.includes(locationParam)) {
      setLocationFilter(locationParam);
    }

    if (typeParam && propertyTypes.includes(typeParam)) {
      setTypeFilter(typeParam);
    }

    if (bedsParam) {
      setMinBedroomsFilter(Number(bedsParam));
    }

    if (minPriceParam || maxPriceParam) {
      setPriceRange([
        minPriceParam ? Number(minPriceParam) : null,
        maxPriceParam ? Number(maxPriceParam) : null,
      ]);
    }

    if (minAreaParam || maxAreaParam) {
      setAreaRange([
        minAreaParam ? Number(minAreaParam) : null,
        maxAreaParam ? Number(maxAreaParam) : null,
      ]);
    }

    if (sortParam) {
      setSortOption(sortParam);
    }

    if (viewParam && (viewParam === "grid" || viewParam === "list")) {
      setView(viewParam);
    }

    // ✅ Now applyFilters is defined already
    applyFilters();
  }, [searchParams, applyFilters]);

  // Reset all filters
  const resetFilters = () => {
    setLocationFilter("All Locations");
    setTypeFilter("All Types");
    setMinBedroomsFilter(null);
    setPriceRange([null, null]);
    setAreaRange([null, null]);

    setTimeout(applyFilters, 0);
  };

  // UI Code same as before
  return (
    <MainLayout>
      {/* Your page JSX as it was */}
    </MainLayout>
  );
}
