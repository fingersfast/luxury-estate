// Property types
export const propertyTypes = [
  "All Types",
  "Villa",
  "Mansion",
  "Penthouse",
  "Estate",
  "Chateau",
  "Beach House",
  "Mountain Retreat",
  "City Apartment",
  "Historic Property",
];

// Locations
export const locations = [
  "All Locations",
  "Beverly Hills, California",
  "Malibu, California",
  "Aspen, Colorado",
  "Miami Beach, Florida",
  "Manhattan, New York",
  "The Hamptons, New York",
  "Lake Como, Italy",
  "St. Tropez, France",
  "London, UK",
  "Monaco",
];

// Property data with expanded information
export type Property = {
  id: number;
  title: string;
  description: string;
  location: string;
  price: string;
  priceNumeric: number; // For sorting
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  areaNumeric: number; // For sorting
  features: string[];
  image: string;
  images: string[]; // Additional images for gallery
  yearBuilt: number;
  parking: number;
  status: "For Sale" | "For Rent" | "Sold";
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    description:
      "This exceptional beachfront villa offers uninterrupted ocean views and direct beach access. The modern design seamlessly blends indoor and outdoor living with floor-to-ceiling windows, multiple terraces, and an infinity pool overlooking the Pacific. Featuring state-of-the-art smart home technology, a private cinema, wine cellar, and spa facilities.",
    location: "Malibu, California",
    price: "$12,500,000",
    priceNumeric: 12500000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: "7,500 sq ft",
    areaNumeric: 7500,
    features: [
      "Beachfront",
      "Infinity Pool",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "Private Spa",
      "Chef's Kitchen",
      "Elevator",
    ],
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
      "https://images.unsplash.com/photo-1613575831538-699f3e7c24d0",
      "https://images.unsplash.com/photo-1613575831539-28bbd72d6ea7",
    ],
    yearBuilt: 2020,
    parking: 4,
    status: "For Sale",
  },
  {
    id: 2,
    title: "Penthouse with City Views",
    description:
      "Perched atop one of Manhattan's most prestigious buildings, this spectacular penthouse offers breathtaking 360-degree views of the city skyline and Central Park. With soaring ceilings, a grand living area, and designer finishes throughout, this residence represents the pinnacle of urban luxury. Private elevator access, a rooftop terrace, and concierge services complete this extraordinary offering.",
    location: "Manhattan, New York",
    price: "$8,900,000",
    priceNumeric: 8900000,
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4.5,
    area: "4,200 sq ft",
    areaNumeric: 4200,
    features: [
      "360° Views",
      "Private Elevator",
      "Rooftop Terrace",
      "Concierge",
      "Marble Bathrooms",
      "Wine Storage",
      "Designer Kitchen",
      "Smart Home System",
    ],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1560448075-4c85df72dc96",
      "https://images.unsplash.com/photo-1560448249-e31a2f0b7ca9",
      "https://images.unsplash.com/photo-1560448204-61dc8275fbf3",
    ],
    yearBuilt: 2018,
    parking: 2,
    status: "For Sale",
  },
  {
    id: 3,
    title: "Tuscan-Style Estate",
    description:
      "This magnificent Tuscan-style estate sits on 3.5 acres of manicured grounds with panoramic views of the surrounding hills. The property features a main residence with authentic architectural details, a guest house, and a separate staff quarters. Amenities include a professional-grade kitchen, wine cellar, home theater, and an expansive outdoor entertaining area with a pool, spa, and outdoor kitchen.",
    location: "Beverly Hills, California",
    price: "$19,750,000",
    priceNumeric: 19750000,
    type: "Estate",
    bedrooms: 7,
    bathrooms: 9,
    area: "12,500 sq ft",
    areaNumeric: 12500,
    features: [
      "Wine Cellar",
      "Movie Theater",
      "Guest House",
      "Staff Quarters",
      "Pool & Spa",
      "Outdoor Kitchen",
      "Tennis Court",
      "Security System",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    ],
    yearBuilt: 2005,
    parking: 6,
    status: "For Sale",
  },
  {
    id: 4,
    title: "Waterfront Modern Mansion",
    description:
      "Set on an exclusive waterfront lot, this contemporary masterpiece offers unparalleled views and direct access to the water. The open floor plan and walls of glass create seamless indoor-outdoor living spaces perfect for entertaining. Features include a gourmet kitchen with top-of-the-line appliances, a master suite with private terrace, and a dock with boat lift.",
    location: "Miami Beach, Florida",
    price: "$15,900,000",
    priceNumeric: 15900000,
    type: "Mansion",
    bedrooms: 6,
    bathrooms: 8,
    area: "10,800 sq ft",
    areaNumeric: 10800,
    features: [
      "Waterfront",
      "Private Dock",
      "Boat Lift",
      "Infinity Pool",
      "Glass Elevator",
      "Summer Kitchen",
      "Smart Home",
      "Gym & Spa",
    ],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      "https://images.unsplash.com/photo-1600585154526-990dced4db3d",
      "https://images.unsplash.com/photo-1600563438938-a9a27215d724",
      "https://images.unsplash.com/photo-1600566752647-f0d2a1d39c99",
    ],
    yearBuilt: 2017,
    parking: 4,
    status: "For Sale",
  },
  {
    id: 5,
    title: "Historic French Chateau",
    description:
      "This meticulously restored 18th-century chateau combines historic elegance with modern amenities. The property features formal gardens, a vineyard, and panoramic countryside views. Inside, you'll find ornate period details including hand-painted ceilings, marble fireplaces, and crystal chandeliers alongside discreetly integrated modern conveniences.",
    location: "St. Tropez, France",
    price: "$22,500,000",
    priceNumeric: 22500000,
    type: "Chateau",
    bedrooms: 10,
    bathrooms: 8,
    area: "15,000 sq ft",
    areaNumeric: 15000,
    features: [
      "Vineyard",
      "Formal Gardens",
      "Wine Cellar",
      "Ballroom",
      "Library",
      "Chapel",
      "Guest Cottages",
      "Staff Quarters",
    ],
    image: "https://images.unsplash.com/photo-1574936269162-70a7b86a7ace",
    images: [
      "https://images.unsplash.com/photo-1574936269162-70a7b86a7ace",
      "https://images.unsplash.com/photo-1623841675762-55ebc4e08dde",
      "https://images.unsplash.com/photo-1633509258900-fb64f779d610",
      "https://images.unsplash.com/photo-1571979254405-41921d26407c",
    ],
    yearBuilt: 1785,
    parking: 8,
    status: "For Sale",
  },
  {
    id: 6,
    title: "Mountain Lodge Retreat",
    description:
      "Nestled in the mountains, this luxury lodge combines rustic charm with sophisticated amenities. The property features dramatic floor-to-ceiling windows showcasing panoramic mountain views, a grand stone fireplace, and exposed timber beams. Outside, find a heated infinity pool, hot tub, and multiple terraces for enjoying the natural surroundings.",
    location: "Aspen, Colorado",
    price: "$9,800,000",
    priceNumeric: 9800000,
    type: "Mountain Retreat",
    bedrooms: 5,
    bathrooms: 5.5,
    area: "8,200 sq ft",
    areaNumeric: 8200,
    features: [
      "Mountain Views",
      "Ski-in/Ski-out",
      "Heated Pool",
      "Stone Fireplace",
      "Game Room",
      "Wine Cellar",
      "Outdoor Kitchen",
      "Heated Driveway",
    ],
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      "https://images.unsplash.com/photo-1604538894164-3c536ce30589",
      "https://images.unsplash.com/photo-1597665158518-9a41ba85a0e2",
      "https://images.unsplash.com/photo-1584463699057-bdbc8d7f6607",
    ],
    yearBuilt: 2015,
    parking: 3,
    status: "For Sale",
  },
  {
    id: 7,
    title: "Luxury Park Avenue Apartment",
    description:
      "Located on one of Manhattan's most prestigious avenues, this pre-war apartment has been completely renovated to combine classic elegance with modern luxury. The grand living room features high ceilings, herringbone floors, and Central Park views. A formal dining room, chef's kitchen, and library complete the entertaining spaces.",
    location: "Manhattan, New York",
    price: "$6,750,000",
    priceNumeric: 6750000,
    type: "City Apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "3,200 sq ft",
    areaNumeric: 3200,
    features: [
      "Doorman Building",
      "Park Views",
      "Pre-war Details",
      "Chef's Kitchen",
      "Library",
      "Herringbone Floors",
      "Smart Home",
      "Wine Storage",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "https://images.unsplash.com/photo-1560448204-b80c08ef9a38",
    ],
    yearBuilt: 1926,
    parking: 1,
    status: "For Sale",
  },
  {
    id: 8,
    title: "Mediterranean Beachfront Estate",
    description:
      "This private oceanfront compound features a main residence and two guest houses surrounded by lush gardens, swimming pools, and direct beach access. The Mediterranean-inspired architecture includes arched doorways, exposed beams, and hand-painted tiles, while the interiors feature modern amenities and smart home technology.",
    location: "The Hamptons, New York",
    price: "$17,500,000",
    priceNumeric: 17500000,
    type: "Estate",
    bedrooms: 8,
    bathrooms: 10,
    area: "11,500 sq ft",
    areaNumeric: 11500,
    features: [
      "Oceanfront",
      "Guest Houses",
      "Multiple Pools",
      "Tennis Court",
      "Private Beach Access",
      "Wine Cellar",
      "Gym",
      "Home Theater",
    ],
    image: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613",
    images: [
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1582913130063-8318329a94dc",
      "https://images.unsplash.com/photo-1570793005386-840846445fed",
    ],
    yearBuilt: 2008,
    parking: 6,
    status: "For Sale",
  },
  {
    id: 9,
    title: "Historic London Townhouse",
    description:
      "This Grade II-listed Georgian townhouse in Mayfair has been meticulously restored and updated with the finest modern amenities while preserving its historic character. The property spans five floors and includes a landscaped garden, roof terrace, and separate mews house. Original features include grand fireplaces, intricate moldings, and a stunning central staircase.",
    location: "London, UK",
    price: "$14,900,000",
    priceNumeric: 14900000,
    type: "Historic Property",
    bedrooms: 6,
    bathrooms: 7,
    area: "6,800 sq ft",
    areaNumeric: 6800,
    features: [
      "Grade II Listed",
      "Garden",
      "Roof Terrace",
      "Mews House",
      "Wine Cellar",
      "Original Features",
      "Smart Home",
      "Staff Quarters",
    ],
    image: "https://images.unsplash.com/photo-1533854240467-8aae7f09a931",
    images: [
      "https://images.unsplash.com/photo-1533854240467-8aae7f09a931",
      "https://images.unsplash.com/photo-1616593969747-4797dc75033e",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
      "https://images.unsplash.com/photo-1574259585753-4854adeed59e",
    ],
    yearBuilt: 1812,
    parking: 2,
    status: "For Sale",
  },
  {
    id: 10,
    title: "Lakefront Villa with Private Dock",
    description:
      "This elegant villa on the shores of Lake Como offers breathtaking water and mountain views from every room. The property features perfectly manicured gardens, a private dock, a heated pool, and multiple terraces for entertaining. Inside, find soaring ceilings, marble floors, and custom finishes throughout.",
    location: "Lake Como, Italy",
    price: "$13,500,000",
    priceNumeric: 13500000,
    type: "Villa",
    bedrooms: 6,
    bathrooms: 7,
    area: "8,700 sq ft",
    areaNumeric: 8700,
    features: [
      "Lakefront",
      "Private Dock",
      "Boat Garage",
      "Pool",
      "Landscaped Gardens",
      "Wine Cellar",
      "Fresco Ceilings",
      "Marble Floors",
    ],
    image: "https://images.unsplash.com/photo-1580920568357-20cc9dfca54d",
    images: [
      "https://images.unsplash.com/photo-1580920568357-20cc9dfca54d",
      "https://images.unsplash.com/photo-1623037407644-b71aa13345cb",
      "https://images.unsplash.com/photo-1584540237769-3de9bd343a7c",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    ],
    yearBuilt: 1995,
    parking: 4,
    status: "For Sale",
  },
  {
    id: 11,
    title: "Private Island Estate",
    description:
      "This extraordinary private island estate offers the ultimate in exclusivity and luxury. The property includes a main residence, multiple guest houses, staff accommodations, and a private marina. With white sand beaches, lush tropical landscapes, and complete privacy, this is truly a one-of-a-kind offering.",
    location: "Miami Beach, Florida",
    price: "$38,000,000",
    priceNumeric: 38000000,
    type: "Estate",
    bedrooms: 12,
    bathrooms: 14,
    area: "20,000 sq ft",
    areaNumeric: 20000,
    features: [
      "Private Island",
      "Marina",
      "Helipad",
      "Multiple Residences",
      "Private Beach",
      "Staff Quarters",
      "Tennis Court",
      "Swimming Pool",
    ],
    image: "https://images.unsplash.com/photo-1580587771207-5d8fb7e498e2",
    images: [
      "https://images.unsplash.com/photo-1580587771207-5d8fb7e498e2",
      "https://images.unsplash.com/photo-1566918214014-a3b3e0917cb1",
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    ],
    yearBuilt: 2010,
    parking: 10,
    status: "For Sale",
  },
  {
    id: 12,
    title: "Monaco Luxury Penthouse",
    description:
      "This exceptional penthouse in Monaco's most prestigious building offers panoramic Mediterranean views and unparalleled luxury. The residence features expansive terraces, a private swimming pool, and direct elevator access. Inside, find bespoke finishes, smart home technology, and a layout perfect for both intimate gatherings and grand-scale entertaining.",
    location: "Monaco",
    price: "$42,500,000",
    priceNumeric: 42500000,
    type: "Penthouse",
    bedrooms: 5,
    bathrooms: 6,
    area: "7,800 sq ft",
    areaNumeric: 7800,
    features: [
      "Sea Views",
      "Private Pool",
      "Direct Elevator",
      "Smart Home",
      "Concierge Service",
      "Wine Room",
      "Home Theater",
      "Spa",
    ],
    image: "https://images.unsplash.com/photo-1518797464634-77ac4d2e8309",
    images: [
      "https://images.unsplash.com/photo-1518797464634-77ac4d2e8309",
      "https://images.unsplash.com/photo-1587527902084-8a31ec0f1681",
      "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8",
      "https://images.unsplash.com/photo-1528913775512-624d24b27b96",
    ],
    yearBuilt: 2019,
    parking: 4,
    status: "For Sale",
  },
];

// Helper function to filter properties
export const filterProperties = (
  data: Property[],
  locationFilter: string,
  typeFilter: string,
  bedroomsFilter: number | null,
  minPrice: number | null,
  maxPrice: number | null,
  minArea: number | null,
  maxArea: number | null
) => {
  return data.filter((property) => {
    // Location filter
    if (
      locationFilter &&
      locationFilter !== "All Locations" &&
      property.location !== locationFilter
    ) {
      return false;
    }

    // Type filter
    if (
      typeFilter &&
      typeFilter !== "All Types" &&
      property.type !== typeFilter
    ) {
      return false;
    }

    // Bedrooms filter
    if (bedroomsFilter !== null && property.bedrooms < bedroomsFilter) {
      return false;
    }

    // Price range filter
    if (minPrice !== null && property.priceNumeric < minPrice) {
      return false;
    }
    if (maxPrice !== null && property.priceNumeric > maxPrice) {
      return false;
    }

    // Area range filter
    if (minArea !== null && property.areaNumeric < minArea) {
      return false;
    }
    if (maxArea !== null && property.areaNumeric > maxArea) {
      return false;
    }

    return true;
  });
};

// Helper function to sort properties
export const sortProperties = (data: Property[], sortBy: string) => {
  const sortedData = [...data];

  switch (sortBy) {
    case "price-asc":
      return sortedData.sort((a, b) => a.priceNumeric - b.priceNumeric);
    case "price-desc":
      return sortedData.sort((a, b) => b.priceNumeric - a.priceNumeric);
    case "size-asc":
      return sortedData.sort((a, b) => a.areaNumeric - b.areaNumeric);
    case "size-desc":
      return sortedData.sort((a, b) => b.areaNumeric - a.areaNumeric);
    case "beds-asc":
      return sortedData.sort((a, b) => a.bedrooms - b.bedrooms);
    case "beds-desc":
      return sortedData.sort((a, b) => b.bedrooms - a.bedrooms);
    case "newest":
      return sortedData.sort((a, b) => b.yearBuilt - a.yearBuilt);
    case "oldest":
      return sortedData.sort((a, b) => a.yearBuilt - b.yearBuilt);
    default:
      return sortedData;
  }
};
