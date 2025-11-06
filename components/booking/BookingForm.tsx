import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, formData);
      setSuccess(true);
      alert("Booking confirmed!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="John"
            aria-label="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="Doe"
            aria-label="Last Name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="you@example.com"
            aria-label="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="+1 (555) 555-5555"
            aria-label="Phone Number"
            required
          />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
          placeholder="1234 5678 9012 3456"
          aria-label="Card Number"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            id="expirationDate"
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="MM/YY"
            aria-label="Expiration Date"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="123"
            aria-label="CVV"
            required
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label htmlFor="streetAddress">Street Address</label>
        <input
          id="streetAddress"
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
          placeholder="123 Main St"
          aria-label="Street Address"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="New York"
            aria-label="City"
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="NY"
            aria-label="State"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="10001"
            aria-label="Zip Code"
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            placeholder="United States"
            aria-label="Country"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">Booking confirmed successfully!</p>}
    </form>
  </div>
  );
};

export default BookingForm;
