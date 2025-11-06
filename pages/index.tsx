
import { useState, useEffect } from "react";
import axios from "axios";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";

const FILTERS = [
  "All", "Top Villa", "Self Checkin", "Beachfront", "Mountain View", "Free Parking", "Pet Friendly", "Pool", "City Center"
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        setProperties(res.data || []);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = selectedFilter === "All"
    ? properties
    : properties.filter((property) =>
        Array.isArray(property.category) && property.category.includes(selectedFilter)
      );

  if (loading) return <p className="p-6">Loading properties...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-2xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property: any, idx: number) => (
            <Card
              key={(property.id ?? property.name) + idx}
              title={property.name}
              description={(property.address?.city || '') + ', ' + (property.address?.country || '')}
              image={property.image}
              price={property.price}
              location={property.address?.state}
              rating={property.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
