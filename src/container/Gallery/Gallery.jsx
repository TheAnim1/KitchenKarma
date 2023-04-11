import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Gallery.css";
import { images } from "../../constants";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollref = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollref;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <div className="app__specialMenu-title">
          <SubHeading title="Our Gallery" classname="subheading__title" />
          <h1 className="headtext__cormorant">INSTAGRAM</h1>
          <p
            className="p__opensans"
            style={{ color: "#AAA", marginTop: "2rem" }}
          >
            browse our mouthwatering photo gallery now.
          </p>
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            View More
          </button>
        </div>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollref}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex_center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
