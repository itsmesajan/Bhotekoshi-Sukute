import React from "react";
import useFetchApi from "../../hooks/useFetchApi";
import { Link } from "react-router-dom";

const Copyright = () => {
  const {
    data: siteregulars,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_siteregulars.php",
    "siteregulars"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const currentYear = new Date().getFullYear();

  const { sitename } = siteregulars;

  return (
    <div className="mt-8 border-t border-slate-300 pt-8 text-center text-sm text-slate-300">
            <p>
              &copy; {currentYear} {sitename}. All rights reserved by{" "}
              <Link
            to="https://longtail.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Longtail e-Media
          </Link>
            </p>
          </div>
  );
};

export default Copyright;
