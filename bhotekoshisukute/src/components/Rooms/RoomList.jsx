import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";

const RoomList = () => {
  const { data, loading, error } = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_room.php");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!data) return;

    let roomsArray = [];

    if (Array.isArray(data)) {
      const first = data[0];
      if (first && Array.isArray(first.accomodation)) {
        roomsArray = first.accomodation;
      } else {
        // collect any accomodation arrays inside the array
        data.forEach((d) => {
          if (d && Array.isArray(d.accomodation)) roomsArray.push(...d.accomodation);
        });
      }
    } else if (data && Array.isArray(data.accomodation)) {
      roomsArray = data.accomodation;
    }

    // fallback: if still empty and data itself looks like an array, use it
    if (!roomsArray.length && Array.isArray(data)) {
      roomsArray = data;
    }

    setRooms(roomsArray);
  }, [data]);

  if (loading) {
    return <div className="py-24 text-center">Loading rooms…</div>;
  }

  if (error) {
    return <div className="py-24 text-center text-red-600">Error: {error}</div>;
  }

  if (!rooms || rooms.length === 0) {
    return <div className="py-24 text-center">No rooms available.</div>;
  }

  return (
    <main className="flex-grow bg-secondary dark:bg-dark/95">
      <div className="container mx-auto px-6 py-16 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">
            Your Haven of Comfort
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Discover a sanctuary of comfort and elegance. Each room is
            meticulously designed to provide an unparalleled experience of
            luxury and tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room) => {
            const img =
              room.imageUrl ||
              (room.images && room.images[0] && (typeof room.images[0] === "string" ? room.images[0] : room.images[0].src || room.images[0].url)) ||
              (room.imageUrls && room.imageUrls[0] && (room.imageUrls[0].src || room.imageUrls[0].url)) ||
              "/assets/placeholder.jpg";

            const price =
              room.price ||
              room.roomDetails?.["Starting Price"]?.value ||
              room.priceRange ||
              "N/A";

            return (
              <div
                key={room.id || room.title}
                className="flex flex-col bg-light dark:bg-dark rounded-xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-primary/20 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={room.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <Link
                    to={`/accommodation/${room.id}`}
                    className="text-3xl font-display font-bold text-[var(--secondary-color)] dark:text-light mb-3"
                  >
                    {room.title}
                  </Link>
                  <p className="text-dark/70 dark:text-light/70 text-base font-light flex-grow mb-6">
                    {room.subtitle}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-display font-bold text-[var(--secondary-color)]">
                      From {price}{" "}
                    </span>
                    <Link
                      to={`/accommodation/${room.id}`}
                      className="text-[var(--secondary-color)] font-bold hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default RoomList;