import React from "react";
import { useState } from "react";
import { rooms } from "../../constants/data";

const RoomDetail = ({ room }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!room) {
      return <div className="text-center py-20">Room not found.</div>;
    }

    // Filter out the current room to show "other rooms"
    const otherRooms = rooms.filter(r => r.id !== room.id);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm">
                    <a className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="#">Rooms</a>
                    <span className="text-gray-400 dark:text-gray-500">/</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{room.title}</span>
                </div>

                {/* Room Details Grid */}
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-5">
                    {/* Image Column */}
                    <div className="md:col-span-3">
                        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                            <img alt={room.title} className="absolute h-full w-full object-cover transition-opacity duration-300" src={room.images[currentImageIndex]} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            {/* Image Pagination */}
                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                {room.images.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col md:col-span-2">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{room.title}</h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{room.description}</p>

                            {/* Room Features */}
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Room Features</h3>
                                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                                    {room.features.map((feature, index) => (
                                        <div key={index}>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{feature.name}</p>
                                            <p className="text-base font-medium text-gray-800 dark:text-gray-200">{feature.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="w-full rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:bg-primary/80">Book {room.title}</button>
                        </div>
                    </div>
                </div>

                {/* Amenities Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Amenities</h3>
                    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
                        {room.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">{amenity.icon}</span>
                                <p className="text-base text-gray-700 dark:text-gray-300">{amenity.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Rooms Section - NEW! */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Explore Other Rooms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {otherRooms.map(otherRoom => (
                            <div
                                key={otherRoom.id}
                                className="flex flex-col bg-light dark:bg-dark rounded-xl overflow-hidden shadow-md transition-shadow duration-500 hover:shadow-primary/20 group"
                            >
                                <div className="relative overflow-hidden">
                                    <div
                                        className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${otherRoom.imageUrl})` }}
                                    ></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-display font-bold text-dark dark:text-light mb-2">
                                        {otherRoom.title}
                                    </h3>
                                    <p className="text-dark/70 dark:text-light/70 text-sm font-light flex-grow mb-4">
                                        {otherRoom.description.substring(0, 100)}...
                                    </p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-lg font-display font-bold text-primary">
                                            NPR {otherRoom.price} / night
                                        </span>
                                        <a
                                            className="text-primary font-bold hover:underline text-sm"
                                            href={otherRoom.link}
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
        </div>
    );
};

export default RoomDetail;