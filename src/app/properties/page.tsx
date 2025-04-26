"use client";

import { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PropertyCard from "../../components/properties/PropertyCard";
import PropertyListItem from "../../components/properties/PropertyListItem";
import FilterPanel from "../../components/properties/FilterPanel";
import SortPanel from "../../components/properties/SortPanel";
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

  // Sort and view states
  const [sortOption, setSortOption] = useState<string>("price-desc");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Filtered properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Handle URL parameters for filters
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

    // Set filters from URL params if they exist
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

    // Apply filters
    applyFilters();
  }, [applyFilters]);

  // Apply filters function
  const applyFilters = () => {
    // First filter the properties
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

    // Then sort the filtered properties
    filtered = sortProperties(filtered, sortOption);

    // Update state
    setFilteredProperties(filtered);
  };

  // Reset all filters
  const resetFilters = () => {
    setLocationFilter("All Locations");
    setTypeFilter("All Types");
    setMinBedroomsFilter(null);
    setPriceRange([null, null]);
    setAreaRange([null, null]);

    // Apply the reset filters
    setTimeout(applyFilters, 0);
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">
              Our Properties
            </h1>
            <p className="text-muted max-w-3xl mx-auto">
              Explore our exclusive collection of luxury properties available
              for sale and rent in the most prestigious locations.
            </p>
          </div>

          {/* Filter Panel */}
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
            applyFilters={applyFilters}
            resetFilters={resetFilters}
          />

          {/* Sort Panel */}
          <SortPanel
            sortOption={sortOption}
            setSortOption={setSortOption}
            totalProperties={filteredProperties.length}
            view={view}
            setView={setView}
          />

          {/* Properties Grid/List View */}
          {filteredProperties.length > 0 ? (
            <>
              {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {filteredProperties.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProperties.map((property, index) => (
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
                No properties match your current filter criteria. Try adjusting
                your filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
