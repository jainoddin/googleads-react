import React, { useEffect, useRef } from "react";

const GoogleAd = () => {
  const adRef = useRef(null);
  const isAdLoaded = useRef(false); // To track if the ad has been loaded

  useEffect(() => {
    if (adRef.current && !isAdLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true; // Set the ad as loaded
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }} // Fixed style prop
      data-ad-client="ca-pub-9277557126987573"
      data-ad-slot="8484471271"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default GoogleAd;
