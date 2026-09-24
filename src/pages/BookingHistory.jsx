import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  async function getBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*");
    
    if (error) {
      console.error(error);
      alert("Failed to retrieve bookings");
      return;
    }
    setBookings(data);
  }

  // This automatically groups and counts tickets per stadium 
  const venueTotals = bookings.reduce((totals, booking) => {
    const venue = booking.venue;
    const ticketCount = Number(booking.tickets) || 0;
    
    if (totals[venue]) {
      totals[venue] += ticketCount;
    } else {
      totals[venue] = ticketCount;
    }
    return totals;
  }, {});

  return (
    <main className="history-page">
      <h1>Booking History</h1>
      <button className="history-button" onClick={getBookings}>
        View Bookings
      </button>

      {/* New Summary Section */}
      {bookings.length > 0 && (
        <div className="venue-summary">
          <h3>Total Tickets by Stadium</h3>
          <div className="summary-cards">
            {Object.entries(venueTotals).map(([venue, totalTickets]) => (
              <div key={venue} className="summary-card">
                <h4>{venue}</h4>
                <p><strong>{totalTickets}</strong> tickets booked</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Stand</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.tickets}</td>
                <td>{booking.stand}</td>
                <td>{booking.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;
