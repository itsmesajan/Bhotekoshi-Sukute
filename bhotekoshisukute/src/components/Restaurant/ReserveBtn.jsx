import React from 'react'
import useFetchApi from '../../hooks/useFetchApi';

const ReserveBtn = () => {
          const {
        data: siteregulars,
        loading,
        error,
      } = useFetchApi(
        "https://www.bhotekoshibeachresort.com/api/api_siteregulars.php",
        "siteregulars"
      );

      const whatsapp = siteregulars?.whatsapp_a;

      if (loading) return <></>;
      if (error) return <div>{error}</div>;
  return (
    <>
      <a
        href={`tel:${whatsapp}`}
        rel="noopener noreferrer"
        className="inline-block bg-[var(--primary-color)] text-[var(--secondary-color)] hover:text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[var(--green-color)] transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
      >
        <i class="fas fa-phone mr-2"></i>
                   Make a Reservation
      </a>
    </>
  );
}

export default ReserveBtn
