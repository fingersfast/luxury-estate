// app/properties/components/PropertiesClientContent.tsx
"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "../../../components/properties/PropertyCard";
import PropertyListItem from "../../../components/properties/PropertyListItem"; // Adjust path if needed
import FilterPanel from "../../../components/properties/FilterPanel"; // Adjust path if needed
import SortPanel from "../../../components/properties/SortPanel"; // Adjust path if needed
import {
  properties as allPropertiesData, // Rename to avoid conflict if needed
  filterProperties,
  sortProperties,
  propertyTypes,
  locations,
} from "../../../data/properties"; // Adjust path if needed

// --- 1. Define the Property type/interface ---
// (Adjust this based on your actual property data structure)
interface Property {
  id: string | number;
  // Remove 'name' and 'imageUrl' if they don't exist in your actual data objects
  // Or modify other properties to match what you actually have
  location: string;
  type: string;
  bedrooms: number;
  price: number;
  area: number;
  // Add any other properties that exist in your actual data
}
// --- Component Logic ---
function PropertiesLogic(): React.ReactElement {
  // Changed return type from JSX.Element to React.ReactElement
  const searchParams = useSearchParams();

  // Base properties typed
  const allProperties: Property[] = allPropertiesData as unknown as Property[];

  // --- Typed State Hooks ---
  const [locationFilter, setLocationFilter] = useState<string>("All Locations");
  const [typeFilter, setTypeFilter] = useState<string>("All Types");
  const [minBedroomsFilter, setMinBedroomsFilter] = useState<number | null>(
    null
  );
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [areaRange, setAreaRange] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [sortOption, setSortOption] = useState<string>("price-desc");
  const [view, setView] = useState<"grid" | "list">("grid");
  // Use the Property type for the filtered properties state
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(allProperties);

  // --- useCallback for applyFilters ---
  const applyFilters = useCallback(() => {
    // Assuming filterProperties and sortProperties handle the Property type
    let filtered: Property[] = filterProperties(
      allProperties,
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
    allProperties,
    locationFilter,
    typeFilter,
    minBedroomsFilter,
    priceRange,
    areaRange,
    sortOption,
  ]); // Added allProperties dependency

  // --- useEffect for searchParams ---
  useEffect(() => {
    // Params reading logic remains the same
    const locationParam = searchParams.get("location");
    const typeParam = searchParams.get("type");
    const bedsParam = searchParams.get("beds");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const minAreaParam = searchParams.get("minArea");
    const maxAreaParam = searchParams.get("maxArea");
    const sortParam = searchParams.get("sort");
    const viewParam = searchParams.get("view"); // Keep as string | null initially

    // Update state based on params (only if different from initial/current state)
    if (
      locationParam &&
      locations.includes(locationParam) &&
      locationParam !== locationFilter
    ) {
      setLocationFilter(locationParam);
    }
    if (
      typeParam &&
      propertyTypes.includes(typeParam) &&
      typeParam !== typeFilter
    ) {
      setTypeFilter(typeParam);
    }
    // Use parseInt for safer number conversion, check for NaN
    const bedsNum = bedsParam ? parseInt(bedsParam, 10) : null;
    if (bedsNum !== null && !isNaN(bedsNum) && bedsNum !== minBedroomsFilter) {
      setMinBedroomsFilter(bedsNum);
    }

    const minPriceNum = minPriceParam ? parseInt(minPriceParam, 10) : null;
    const maxPriceNum = maxPriceParam ? parseInt(maxPriceParam, 10) : null;
    if (
      (minPriceNum !== null && !isNaN(minPriceNum)) ||
      (maxPriceNum !== null && !isNaN(maxPriceNum))
    ) {
      if (
        (minPriceNum ?? null) !== priceRange[0] ||
        (maxPriceNum ?? null) !== priceRange[1]
      ) {
        setPriceRange([minPriceNum ?? null, maxPriceNum ?? null]);
      }
    }

    const minAreaNum = minAreaParam ? parseInt(minAreaParam, 10) : null;
    const maxAreaNum = maxAreaParam ? parseInt(maxAreaParam, 10) : null;
    if (
      (minAreaNum !== null && !isNaN(minAreaNum)) ||
      (maxAreaNum !== null && !isNaN(maxAreaNum))
    ) {
      if (
        (minAreaNum ?? null) !== areaRange[0] ||
        (maxAreaNum ?? null) !== areaRange[1]
      ) {
        setAreaRange([minAreaNum ?? null, maxAreaNum ?? null]);
      }
    }

    if (sortParam && sortParam !== sortOption) {
      setSortOption(sortParam);
    }
    // Type assertion after checking the value
    if (
      viewParam &&
      (viewParam === "grid" || viewParam === "list") &&
      viewParam !== view
    ) {
      setView(viewParam as "grid" | "list");
    }
  }, [searchParams]); // Initial read based on searchParams

  // --- useEffect to apply filters when dependencies change ---
  useEffect(() => {
    applyFilters();
  }, [applyFilters]); // Runs when filter/sort states change

  // --- resetFilters function ---
  const resetFilters = () => {
    setLocationFilter("All Locations");
    setTypeFilter("All Types");
    setMinBedroomsFilter(null);
    setPriceRange([null, null]);
    setAreaRange([null, null]);
    // applyFilters will be called by the useEffect above
  };

  // --- Return the JSX ---
  return (
    <>
      {/* Assume FilterPanel/SortPanel props are correctly typed internally */}
      <FilterPanel
        location={locationFilter}
        setLocation={setLocationFilter}
        propertyType={typeFilter}
        setPropertyType={setTypeFilter}
        minBedrooms={minBedroomsFilter}
        setMinBedrooms={setMinBedroomsFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        areaRange={areaRange}
        setAreaRange={setAreaRange}
        resetFilters={resetFilters}
      />
      <SortPanel
        sortOption={sortOption}
        setSortOption={setSortOption}
        totalProperties={filteredProperties.length}
        view={view}
        setView={setView}
      />
      {filteredProperties.length > 0 ? (
        <>
          {view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {/* Explicitly type 'property' and 'index' in map */}
              {filteredProperties.map((property: Property, index: number) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Explicitly type 'property' and 'index' in map */}
              {filteredProperties.map((property: Property, index: number) => (
                <PropertyListItem
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No properties found</h3>
          <p className="text-muted mb-6">
            No properties match your current filter criteria. Try adjusting your
            filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
}

// Exported component providing the Suspense boundary
export default function PropertiesClientContent(): React.ReactElement {
  // Changed return type from JSX.Element to React.ReactElement
  return (
    <Suspense
      fallback={<div className="text-center py-16">Loading properties...</div>}
    >
      <PropertiesLogic />
    </Suspense>
  );
}
