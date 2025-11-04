import React from 'react'
import useFetchApi from '../../hooks/useFetchApi';
import { Link } from 'react-router-dom';



const RoomBooking = () => {
      const {
    data: siteregulars,
    loading ,
    error,
  } = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_siteregulars.php",'siteregulars'); 

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  const {booking_code} = siteregulars
  return (
    <div>
      <Link
        to={booking_code}
        target="_blank"
        rel="noopener noreferrer"
className="w-full block rounded-lg bg-[var(--primary-color)] px-6 py-3 text-base text-center font-bold text-[var(--secondary-color)] hover:text-white transition-all hover:bg-[var(--green-color)]"      >
        Book Now
      </Link>
    </div>
  );
}

export default RoomBooking
