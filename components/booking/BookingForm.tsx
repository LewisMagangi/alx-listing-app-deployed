const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="border p-2 w-full mt-2"
            placeholder="John"
            aria-label="First Name"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="border p-2 w-full mt-2"
            placeholder="Doe"
            aria-label="Last Name"
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
            className="border p-2 w-full mt-2"
            placeholder="you@example.com"
            aria-label="Email"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            className="border p-2 w-full mt-2"
            placeholder="+1 (555) 555-5555"
            aria-label="Phone Number"
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
          className="border p-2 w-full mt-2"
          placeholder="1234 5678 9012 3456"
          aria-label="Card Number"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            id="expirationDate"
            type="text"
            name="expirationDate"
            className="border p-2 w-full mt-2"
            placeholder="MM/YY"
            aria-label="Expiration Date"
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            name="cvv"
            className="border p-2 w-full mt-2"
            placeholder="123"
            aria-label="CVV"
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
          className="border p-2 w-full mt-2"
          placeholder="123 Main St"
          aria-label="Street Address"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            className="border p-2 w-full mt-2"
            placeholder="New York"
            aria-label="City"
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            className="border p-2 w-full mt-2"
            placeholder="NY"
            aria-label="State"
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
            className="border p-2 w-full mt-2"
            placeholder="10001"
            aria-label="Zip Code"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            name="country"
            className="border p-2 w-full mt-2"
            placeholder="United States"
            aria-label="Country"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
