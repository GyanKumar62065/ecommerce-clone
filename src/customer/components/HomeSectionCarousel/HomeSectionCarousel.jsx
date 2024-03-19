import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const carousel = useRef(AliceCarousel);

  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={item.id} product={item} />); // Ensure each item has a unique key

  console.log(activeIndex);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-10 flex justify-start">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
          key="carousel"
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carousel}
        />

        {activeIndex !== items.length - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={(e) => carousel?.current?.slideNext(e)}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={(e) => carousel?.current?.slidePrev(e)}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
