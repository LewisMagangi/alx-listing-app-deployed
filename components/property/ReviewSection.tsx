import { useState, useEffect } from "react";
import axios from "axios";

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`);
        setReviews(response.data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.length === 0 ? (
        <p className="mt-4 text-gray-600">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={review.id || index} className="border-b pb-4 mb-4">
            <div className="flex items-center">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">{review.rating} stars</p>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
