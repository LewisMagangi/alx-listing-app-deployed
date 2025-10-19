import BookingForm from "../../components/booking/BookingForm";
import OrderSummary from "../../components/booking/OrderSummary";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6">
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
          <p className="text-gray-700">
            Free cancellation within 48 hours of booking. After that, cancel up to 7 days before check-in for a full refund, minus service fees. No refund for cancellations within 7 days of check-in.
          </p>
        </section>
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Ground Rules</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>No parties or events allowed.</li>
            <li>No smoking inside the property.</li>
            <li>Pets are not allowed unless approved in advance.</li>
            <li>Quiet hours after 10 PM.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
