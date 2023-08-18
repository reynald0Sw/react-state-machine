import React from "react";
import "./Welcome.css";
import { gsap } from "gsap";
import { useEffect } from "react";

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send("START");
  };

 




  return (
    <div className="Welcome">
      <p className="Welcome-title title">Start Your Trip with reynald0swTrip</p>
      <p className="Welcome-description description">
        Pay in fortnightly or monthly instalments up to 6 months for purchases
        up to $5,000 AUD
      </p>
      <button onClick={startBooking} className="Welcome-cancel button">
        Start
      </button>
      
    </div>
  );
};
