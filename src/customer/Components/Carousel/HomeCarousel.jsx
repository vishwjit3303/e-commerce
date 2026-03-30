import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-md"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
      style={{ width: "100%", height: "360px", objectFit: "cover", margin: "0 10px" }}
    />
  ));
  return (
    <div style={{ width: "100%", padding: "10px 0" }}>
      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
};

export default HomeCarousel;

