import dine1 from "../assets/dine/1.webp";
import dine2 from "../assets/dine/2.webp";
import dine3 from "../assets/dine/3.webp";
import dine4 from "../assets/dine/4.webp";
import dine5 from "../assets/dine/5.webp";


export const rooms = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    description: 'A spacious haven of elegance, featuring a plush king-size bed, a private balcony with serene views, and state-of-the-art amenities for your utmost comfort.',
    price: '8,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlSj-CES0R3WeoTH1dboBGD7UOcC6wLhh3q2zv1vCLOyCoGH4hSk91Dr_Nw294uKvBCTkstAFVmMH_rIoSvgT3AFZbFxC7GlENbZSrHCnGsLGgf0CSuqXA-riXL49uJrOE25H0GmYO2UiQ8kpjp6t4BuXXDGaTPLmXoi_jpthfRcrGqeJWms84VLVp5SQRAE-ola72yBgbcxFlS-w6_TKpVz_ksRvsYEnGeGFUaVTX0UHvSpxAN6zrzONOq7-QjVe6GVXUsjLQ3Pb',
    link: '/rooms/deluxe',
    features: [
      { name: 'Room Size', value: '350 sq ft' },
      { name: 'Bed Type', value: 'King or Twin Beds' },
      { name: 'Occupancy', value: 'Up to 4 Guests' },
      { name: 'View', value: 'Garden or River' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC42fGgy8fF5ofGepL6-nc9iLHXdUzqGrqjYzYfNLgSsPjk7_gkRhA-HlE8X2GgN1GiZtEAP3DF3QXE6LDU_6U2dtN4EOxlnSHo5pz9k3D__dY9fo45lnzgr2ovrDYbwz1Jb8YyNFBOEF__HdcsYpHYp9S4-b_AIIutUBWLyfe0bK-MUsmdEf4LyOw8EbwcAVWU6r_hGG9JJYnpnbWLjj397GhFH8oK3j6CEop39Nnd5joOXR9ScDFiaiFnlG8bz3HT04FuijBGnnZR',
      'https://images.unsplash.com/photo-1618773959953-b8c7b4f5351a?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594967389506-8d195663673f?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773959555-520e5414e0ae?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773959325-a131804b4c7f?q=80&w=1470&auto=format&fit=crop',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8FFVfsSv_hvRnjX5ErqP_B1TP0jE7erdAoC2SS78iHmDLQrTdFgPwNDRUynFbISPaljKAQlZFyr0UUd3em6rJ26yX1XAD_cj9Ao04_ffsQAx1b4K1knSHyzS7E1YmQDtRb9FG4qBUNZpAgxISDSvX6tj6pAqs1-t-gn1nrowvee3ybp6eYP2QW9qfVLENcvCulbrSIQWLIw_kHek1mUZ9jHtJ6Js4zXtCkvdHv7B_EJVutctwiFtxuukja2HRl4A2luVOk9L9sL1',
      'https://images.unsplash.com/photo-1618773959555-520e5414e0ae?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594967389506-8d195663673f?q=80&w=1470&auto=format&fit=crop',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBpuXmTrZnbRD0TfVcb4mBC1AbtY9cQtjpSNXUbTBgG0b4Dfv3F4xm11ONCl_mzq0Ilkm7GOCNLSF61yv0nFpbw6ZMFhjTo_RautDlnDZj1Haj6vhipWvLJff4V7s0p9iE8zo4OPQTr0IczqSzetk2FztsE38rdF5V6nzcF7Dd1CaePzx-tbARrzgOya8E4fBNB4Zy_ykcT484WtaU3gBB0t1AdRBBhaGIRKU55SNCtoxIo2HJ0tVRjH8ERkxAoOyLi32BlSyTL4G6',
    link: '/rooms/executive-suite',
    features: [
      { name: 'Room Size', value: '600 sq ft' },
      { name: 'Bed Type', value: 'King Bed' },
      { name: 'Occupancy', value: '2 Guests' },
      { name: 'View', value: 'Panoramic View' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBpuXmTrZnbRD0TfVcb4mBC1AbtY9cQtjpSNXUbTBgG0b4Dfv3F4xm11ONCl_mzq0Ilkm7GOCNLSF61yv0nFpbw6ZMFhjTo_RautDlnDZj1Haj6vhipWvLJff4V7s0p9iE8zo4OPQTr0IczqSzetk2FztsE38rdF5V6nzcF7Dd1CaePzx-tbARrzgOya8E4fBNB4Zy_ykcT484WtaU3gBB0t1AdRBBhaGIRKU55SNCtoxIo2HJ0tVRjH8ERkxAoOyLi32BlSyTL4G6',
      'https://images.unsplash.com/photo-1618773959953-b8c7b4f5351a?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594967389506-8d195663673f?q=80&w=1470&auto=format&fit=crop',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCynMgoyFzNqxoM5zrmqZokmkkbzzOuFCInVHOCkbHFdXhqbnDwAmGGk3d1ZTOVm_GS7QYcQppL9_s7idAQYns5fDJNuwN1BdYSV7X_C8v7_YKsKI1cTZt1IrmjHjDBuiMnZ_6-nd0E34oL1T1jlCXt4SSaDMd6CbJJQs1rADYqXkCJp2szB8NtNrwCGjxB2ZEBAQ66nARfzTMftvvFVoI8vgjaOWnJa2ekCR4deyjb3mF1lsBMkAD3LNn19g2FVIeovy50kgo-jtld',
    link: '/rooms/river-view-cabin',
    features: [
      { name: 'Room Size', value: '250 sq ft' },
      { name: 'Bed Type', value: 'King Bed' },
      { name: 'Occupancy', value: '2 Guests' },
      { name: 'View', value: 'River View' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCynMgoyFzNqxoM5zrmqZokmkkbzzOuFCInVHOCkbHFdXhqbnDwAmGGk3d1ZTOVm_GS7QYcQppL9_s7idAQYns5fDJNuwN1BdYSV7X_C8v7_YKsKI1cTZt1IrmjHjDBuiMnZ_6-nd0E34oL1T1jlCXt4SSaDMd6CbJJQs1rADYqXkCJp2szB8NtNrwCGjxB2ZEBAQ66nARfzTMftvvFVoI8vgjaOWnJa2ekCR4deyjb3mF1lsBMkAD3LNn19g2FVIeovy50kgo-jtld',
      'https://images.unsplash.com/photo-1594967389506-8d195663673f?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773959325-a131804b4c7f?q=80&w=1470&auto=format&fit=crop',
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
