import dine1 from "../assets/dine/1.webp";
import dine2 from "../assets/dine/2.webp";
import dine3 from "../assets/dine/3.webp";
import dine4 from "../assets/dine/4.webp";
import dine5 from "../assets/dine/5.webp";

import activities1 from "../assets/activities/1.webp";
import activities2 from "../assets/activities/2.webp";
import activities3 from "../assets/activities/3.webp";
import activities4 from "../assets/activities/4.webp";
import activities5 from "../assets/activities/5.webp";

import dlx1 from "../assets/rooms/dlx1.webp";
import tent from "../assets/rooms/tent.webp";
import suite1 from "../assets/rooms/suite1.webp";

import pkg1 from "../assets/package/1.jpg";
import pkg2 from "../assets/package/2.jpg";
import pkg3 from "../assets/package/3.jpg";


import hall1 from "../assets/hall/hall1.webp";




export const rooms = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    description: 'A spacious haven of elegance, featuring a plush king-size bed, a private balcony with serene views, and state-of-the-art amenities for your utmost comfort.',
    price: '8,000',
    imageUrl: dlx1,
    link: '/rooms/deluxe',
    features: [
      { name: 'Room Size', value: '350 sq ft' },
      { name: 'Bed Type', value: 'King or Twin Beds' },
      { name: 'Occupancy', value: 'Up to 4 Guests' },
      { name: 'View', value: 'Garden or River' },
    ],
    images: [
      dlx1,
      tent,
      suite1,
    ],
    amenities: [
      { name: 'Air Conditioning', icon: 'ac_unit' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
      { name: 'Flat-Screen TV', icon: 'tv' },
      { name: 'Mini Fridge', icon: 'kitchen' },
      { name: 'Coffee/Tea Maker', icon: 'coffee_maker' },
      { name: 'In-Room Safe', icon: 'lock' },
      { name: 'Work Desk', icon: 'desk' },
      { name: 'Balcony/Patio', icon: 'balcony' },
      { name: 'Toiletries', icon: 'soap' },
      { name: '24-Hour Room Service', icon: 'room_service' },
      { name: 'Ensuite with Shower', icon: 'shower' },
    ],
  },
  {
    id: 'family-suite',
    title: 'Family Suite',
    description: 'Perfect for family retreats, this two-bedroom suite offers ample space, a comfortable living area, and a convenient kitchenette for a home-away-from-home feel.',
    price: '12,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8FFVfsSv_hvRnjX5ErqP_B1TP0jE7erdAoC2SS78iHmDLQrTdFgPwNDRUynFbISPaljKAQlZFyr0UUd3em6rJ26yX1XAD_cj9Ao04_ffsQAx1b4K1knSHyzS7E1YmQDtRb9FG4qBUNZpAgxISDSvX6tj6pAqs1-t-gn1nrowvee3ybp6eYP2QW9qfVLENcvCulbrSIQWLIw_kHek1mUZ9jHtJ6Js4zXtCkvdHv7B_EJVutctwiFtxuukja2HRl4A2luVOk9L9sL1',
    link: '/rooms/family-suite',
    features: [
      { name: 'Room Size', value: '550 sq ft' },
      { name: 'Bed Type', value: '2 King Beds' },
      { name: 'Occupancy', value: 'Up to 6 Guests' },
      { name: 'View', value: 'River View' },
    ],
    images: [
      suite1,
      dlx1,
      tent,
    ],
    amenities: [
      { name: 'Kitchenette', icon: 'kitchen' },
      { name: 'Two Bathrooms', icon: 'shower' },
      { name: 'Kids Zone', icon: 'toys' },
      { name: 'Work Desk', icon: 'desk' },
      { name: 'Coffee/Tea Maker', icon: 'coffee_maker' },
    ],
  },
  {
    id: 'executive-suite',
    title: 'Executive Suite',
    description: 'The pinnacle of luxury, our Executive Suite boasts a separate living room, a dedicated workspace, and exclusive access to premium services for a truly elevated stay.',
    price: '15,000',
    imageUrl: suite1,
    link: '/rooms/executive-suite',
    features: [
      { name: 'Room Size', value: '600 sq ft' },
      { name: 'Bed Type', value: 'King Bed' },
      { name: 'Occupancy', value: '2 Guests' },
      { name: 'View', value: 'Panoramic View' },
    ],
    images: [
      suite1,
      dlx1,
      suite1,
      tent,
    ],
    amenities: [
      { name: 'Dedicated Workspace', icon: 'laptop' },
      { name: 'Luxury Toiletries', icon: 'soap' },
      { name: 'Mini Bar', icon: 'local_bar' },
      { name: 'Room Service', icon: 'room_service' },
      { name: 'In-Room Safe', icon: 'lock' },
    ],
  },
  {
    id: 'river-view-cabin',
    title: 'River View Cabin',
    description: 'An intimate and cozy cabin offering breathtaking views of the river. The perfect setting for a romantic and unforgettable escape.',
    price: '10,000',
    imageUrl: tent,
    link: '/rooms/river-view-cabin',
    features: [
      { name: 'Room Size', value: '250 sq ft' },
      { name: 'Bed Type', value: 'King Bed' },
      { name: 'Occupancy', value: '2 Guests' },
      { name: 'View', value: 'River View' },
    ],
    images: [
      tent,
      dlx1,
      tent,
      suite1,
    ],
    amenities: [
      { name: 'Private Balcony', icon: 'balcony' },
      { name: 'Complimentary Snacks', icon: 'local_cafe' },
      { name: 'Mini Fridge', icon: 'kitchen' },
    ],
  },
];



export const restaurants = [
  {
    id: 1,
    title: "The Riverside Grill",
    description:
      "Experience fine dining by the tranquil river. Our menu features a fusion of continental and authentic Nepali cuisine, crafted from the freshest local ingredients. The elegant ambiance makes it perfect for a romantic dinner or a special family gathering.",
    openTime: "6:00 PM - 10:30 PM",
    cuisine: "Nepali, Continental",
    images: [
      dine5,
      dine1,
      dine2,
    ],
  },
  {
    id: 2,
    title: "Garden Cafe",
    description:
      "Nestled amidst our lush gardens, the Garden Cafe offers a relaxed, alfresco dining experience. Enjoy a selection of light meals, freshly brewed coffee, and pastries throughout the day. It's the ideal spot for a casual lunch or a quiet afternoon tea.",
    openTime: "9:00 AM - 6:00 PM",
    cuisine: "Cafe, Light Meals",
    images: [
      dine3,
      dine4,
      dine2,
    ],
  },
];


export const halls = [
  {
    id: "hall",
    title: "Bhotekoshi Beach Hall",
    description:
      "Our Conference Hall is a versatile space designed for productivity and collaboration. With modern amenities and a professional ambiance, it's the perfect setting for your next business meeting, seminar, or workshop. The hall can be configured in various layouts to suit your specific needs, from theater-style for presentations to classroom-style for training sessions.",
    imageUrl:hall1,
    link: "/Halls/Bhotekoshi Beach Hall",
    features: [
      { name: "Hall Size", value: "1000 sq ft" },
      { name: "U Shape", value: "50" },
      { name: "Classroom", value: "80" },
      { name: "Theater", value: "100" },
      { name: "Round Table", value: "70" },
    ],
    images: [
      hall1,
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC42fGgy8fF5ofGepL6-nc9iLHXdUzqGrqjYzYfNLgSsPjk7_gkRhA-HlE8X2GgN1GiZtEAP3DF3QXE6LDU_6U2dtN4EOxlnSHo5pz9k3D__dY9fo45lnzgr2ovrDYbwz1Jb8YyNFBOEF__HdcsYpHYp9S4-b_AIIutUBWLyfe0bK-MUsmdEf4LyOw8EbwcAVWU6r_hGG9JJYnpnbWLjj397GhFH8oK3j6CEop39Nnd5joOXR9ScDFiaiFnlG8bz3HT04FuijBGnnZR",
    ],
    amenities: [
      { name: "Projector", icon: "display_external_input" },
      { name: "PA System with Microphone", icon: "mic" },
      { name: "LED TV", icon: "tv" },
      { name: "Video Conferencing", icon: "video_call" },
      { name: "Computer/Laptop", icon: "computer" },
      { name: "Whiteboard", icon: "table_chart" },
      { name: "Flip Chart", icon: "sticky_note_2" },
      { name: "Soft (Pin) Board", icon: "dashboard" },
      { name: "Printing Services", icon: "print" },
      { name: "Photography", icon: "photo_camera" },
      { name: "Videography", icon: "videocam" },
    ],
  },
];


export const activities = [
  {
    id: 1,
    title: "Rafting",
    description:
      "Feel the thrill of white-water rafting on the Bhotekoshi River. Suitable for beginners and experienced adventurers alike, this activity promises adrenaline-pumping excitement with stunning river views.",
    images: [
      activities1,activities2,activities3
    ],
  },
  {
    id: 2,
    title: "Hiking",
    description:
      "Explore scenic trails surrounded by lush forests and majestic mountains. Perfect for nature lovers, hiking provides fresh air, beautiful viewpoints, and a chance to reconnect with the outdoors.",
    images: [
      activities4,activities2,activities5
    ],
  },
  {
    id: 3,
    title: "Swimming",
    description:
      "Relax and unwind in our crystal-clear swimming pool surrounded by lush greenery. Suitable for all ages, enjoy a refreshing swim, lounge by the poolside, or have fun with family and friends.",
    images: [
      activities1,activities5,activities3
    ],
  },
];


export const packages = [
  {
    id: 1,
    title: "Festive Package",
    description:
      "Embrace the festive spirit with our all-inclusive package, perfect for creating lasting memories with family and friends.",
    price: 3500,
    image: pkg1,  },
  {
    id: 2,
    title: "Family Adventure",
    description:
      "The perfect family getaway filled with fun activities for all ages, ensuring a memorable vacation for everyone.",
    price: 3200,
    image: pkg2,
  },
  {
    id: 3,
    title: "Corporate Team Builder",
    description:
      "Boost team morale and collaboration with our specially curated corporate retreat package, combining work and play.",
    price: 4000,
    image: pkg3,
  },
];



export const images = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMKtbA-4OU1c_CvRNeqopIeUMAdYo59upRWudnneVVtA2-k2q_vWXc_io-mBgu2-qVBBq1A6BHp9jkvQ1cz2_kexXxJTyQ3wQOSA278mpIEWXyIJPo4X-x8SU1UbPPRU38L-I4nA=s1360-w1360-h1020-rw",
    alt: "Gallery 1",
    className:"item-1",
    category: "room"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcmTCS-l4rMvidFRLRJP27nG5DA_YQtDuV_4ANeENLH-l6uolZKvt8OUGs2qIfEk1U-vrdZJFGK-zpVc2oypM8p-azqOe89cAAElEnFOsfcosTKUB3DXoAWcBJvsWINnZ1rC5zbFGI5OhIuUykOPb5KCMkuzlnDn3pTkpBMXC8TqeDA1l7Pd5sRHUPr-xLEs7OEaGIAjZh_3KFGRHj6W34__osMyAIFwoHtt2kk-oh5YEPuU2G-8m1tTudzr4vN30HX6phzGisMgbp",
    alt: "Gallery 2",
    className:"item-2",
    category: "lobby"
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr9BCJVxReJGw-XGxGHHt3s_2pjmbDemdP0tX-IOeiznv_2wh8JLEbW8o6ZwyiaGQ_bhci8vkCGwTrjXW-rwKn-qW7oQlIyfmuU5RzB4DU0iOvwq-7gA-RplNVQbG4CpVils__x=s1360-w1360-h1020-rw",
    alt: "Gallery 3",
    className:"item-3",
    category: "room"
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqml8UhqgwnkoKXuspNDeO4vyu85q9meKVqihq9tZQyCvEDJebXdO-gh0JJomRGJ5PmTOsV1gSR2S5520s3YOKGtq9cmu79jDrbUsUvKMhe7mReqJn3lM8pz7p1EUVMu3X5EeH=s1360-w1360-h1020-rw",
    alt: "Gallery 4",
    className:"item-4",
    category: "swimming"
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgOeueqqwZ_BZbtOANIN0q-wg54hO9aHxFj8ZPyFglvLhnSj1l398RwYlHOE7gaWQq_Ms0MFrZLAwqes2vdq_4VsdNmTodGda9TfNsa8nd4pk4L8bKNzOPLgVl8XlfetQ2FNhAGw=s1360-w1360-h1020-rw",
    alt: "Gallery 5",
    className:"item-5",
    category: "hall"
  },
  {
    src: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1170&auto=format&fit=crop",
    alt: "Gallery 6",
    className:"item-6",
    category: "room"
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr4CwrV43_nGYpcwQra89ZDsBYYkbQsQIRJPU_Tclj9QHOWdKyckPQZAgUW1MuKIt9_Dw9E3r0EpthTZpHxrXAUNRSMkeE71MBBLLgl-VJQ4ve-UUh2Dpp800KX1GKw7W96Dwo=s1360-w1360-h1020-rw",
    alt: "Gallery 7",
    className:"item-7",
    category: "dine"
  },
  {
    src: "https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?q=80&w=1170&auto=format&fit=crop",
    alt: "Gallery 8",
    className:"item-8",
    category: "room"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcmTCS-l4rMvidFRLRJP27nG5DA_YQtDuV_4ANeENLH-l6uolZKvt8OUGs2qIfEk1U-vrdZJFGK-zpVc2oypM8p-azqOe89cAAElEnFOsfcosTKUB3DXoAWcBJvsWINnZ1rC5zbFGI5OhIuUykOPb5KCMkuzlnDn3pTkpBMXC8TqeDA1l7Pd5sRHUPr-xLEs7OEaGIAjZh_3KFGRHj6W34__osMyAIFwoHtt2kk-oh5YEPuU2G-8m1tTudzr4vN30HX6phzGisMgbp",
    alt: "Gallery 9",
    className:"item-9",
    category: "room"
  },
];

