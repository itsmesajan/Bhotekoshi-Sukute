import React from "react";
import useFetchApi from "../../hooks/useFetchApi";

const LocationDetails = () => {

        const {
    data: locationDetail,
    loading,
    error,
  } = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_location.php", "locationDetail");


  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  return (
    <>
    {locationDetail.map((item,index)=>(    
      <div 
      key={index}
      className="flex items-start space-x-4">
        <span className="material-symbols-outlined text-primary mt-1">
          {item.icon}
        </span>
        <div className="space-y-2">
          <h4 className="font-semibold">          
            {item.id === "location" ? "Our Location" : item.id === "phoneNumbers" ? "Phone" : "Email"}
        </h4>
          {item.id === "location" && (
          <p className="text-subtle-light dark:text-subtle-dark">
            <a href={item.link}>{item.title}</a>
          </p>
        )}
        {item.id === "phoneNumbers" && (
            <p className="text-subtle-light dark:text-subtle-dark">
            {item.numbers.map((num,i)=>(
                <span key={i}>
                <a href={num.link}>{num.title}</a>
                {i < item.numbers.length - 1 && <br />}
              </span>
            ))}
          </p>
        )}

        {item.id === "emails" && (
          <p className="text-subtle-light dark:text-subtle-dark">
            {item.url.map((mail, i) => (
              <span key={i}>
                <a href={mail.link}>{mail.addresses}</a>
                {i < item.url.length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
        </div>
      </div>
    ))}
    </>
  );
};

export default LocationDetails;
