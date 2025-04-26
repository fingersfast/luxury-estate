"use client";

interface SortPanelProps {
  sortOption: string;
  setSortOption: (option: string) => void;
  totalProperties: number;
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

export default function SortPanel({
  sortOption,
  setSortOption,
  totalProperties,
  view,
  setView,
}: SortPanelProps) {
  const sortOptions = [
    { value: "price-desc", label: "Price (High to Low)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "size-desc", label: "Size (Large to Small)" },
    { value: "size-asc", label: "Size (Small to Large)" },
    { value: "beds-desc", label: "Bedrooms (Most to Least)" },
    { value: "beds-asc", label: "Bedrooms (Least to Most)" },
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <div className="text-sm text-muted">
        Showing <span className="font-medium">{totalProperties}</span>{" "}
        properties
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm mr-2 whitespace-nowrap">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-sm px-3 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-md"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={`p-2 text-sm ${
              view === "grid"
                ? "bg-primary text-white"
                : "bg-background text-muted hover:bg-accent/50"
            }`}
            aria-label="Grid View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 text-sm ${
              view === "list"
                ? "bg-primary text-white"
                : "bg-background text-muted hover:bg-accent/50"
            }`}
            aria-label="List View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
