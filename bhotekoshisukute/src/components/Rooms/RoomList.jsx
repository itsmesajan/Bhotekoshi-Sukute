import React from 'react';
import { rooms } from '../../constants/data'; // Import the unified data

const RoomList = () => {
  return (
    <main className="flex-grow bg-secondary dark:bg-dark/95">
      <div className="container mx-auto px-6 py-16 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-dark dark:text-light tracking-tight">
            Our Exquisite Rooms
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-dark/70 dark:text-light/70 font-light">
            Discover a sanctuary of comfort and elegance. Each room is meticulously designed to provide an unparalleled experience of luxury and tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col bg-light dark:bg-dark rounded-xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-primary/20 group"
            >
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${room.imageUrl})` }}
                ></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-display font-bold text-dark dark:text-light mb-3">
                  {room.title}
                </h3>
                <p className="text-dark/70 dark:text-light/70 text-base font-light flex-grow mb-6">
                  {room.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-display font-bold text-primary">
                    From NPR {room.price}{' '}
                    <span className="text-sm font-body font-light text-dark/60 dark:text-light/60">
                      / night
                    </span>
                  </span>
                  <a
                    className="text-primary font-bold hover:underline"
                    href={room.link}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RoomList;