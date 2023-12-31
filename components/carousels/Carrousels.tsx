import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import styles from "../../styles/Carousel.module.css";
import cc from "classcat";

const Carousel2 = ({ photos }) => {
  const [loaded, setLoaded] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [visibleSlides, setVisibleSlides] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
      setVisibleSlides(s.details().slidesPerView);
    },
    spacing: 10,
    slidesPerView: 1,
    centered: false,
    loop: false,
    mode: "snap",
    breakpoints: {
      "(min-width: 550px)": {
        slidesPerView: 2,
        mode: "free-snap"
      },
      "(min-width: 850px)": {
        slidesPerView: 3,
        mode: "free-snap"
      },
      "(min-width: 1150px)": {
        slidesPerView: 4,
        mode: "free-snap"
      },
      "(min-width: 1350px)": {
        slidesPerView: 5,
        mode: "free-snap"
      },
      "(min-width: 1650px)": {
        slidesPerView: 6,
        mode: "free-snap"
      }
    }
  });
  React.useEffect(() => {
    const fullLoad = [...Array(currentSlide + visibleSlides + 1).keys()];
    const new_loaded = [...fullLoad];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide, visibleSlides]);
  return (
    <>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className={`${styles.keenSlider} ${"keen-slider"}`}
        >
          {photos.map((photo, idx) => (
            <div
              className={cc(["keen-slider__slide"], ["lazy__slide"])}
              key={idx}
            >
              <div className="h-[100%} w-[100%] mr-2 bg-slate-800  ">
            <h3>1</h3>
          </div>
          <div className="h-[100%} w-[100%] mr-2 bg-slate-800  ">
            <h3>2</h3>
          </div>
          <div className="h-[100%} w-[100%] mr-2 bg-slate-800  ">
            <h3>3</h3>
          </div>
          <div className="h-[100%} w-[100%] mr-2 bg-slate-800  ">
            <h3>4</h3>
          </div>
          <div className="h-[100%} w-[100%] mr-2 bg-slate-800  ">
            <h3>5</h3>
          </div>
            </div>
          ))}
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={
                  currentSlide >=
                  slider.details().size - slider.details().slidesPerView
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
function ArrowLeft(props) {
  return (
    <div
      onClick={props.onClick}
      className={cc([
        styles.arrowLeft,
        styles.arrow,
        { [styles.arrowDisabled]: props.disabled }
      ])}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );
}
function ArrowRight(props) {
  return (
    <div
      onClick={props.onClick}
      className={cc([
        styles.arrowRight,
        styles.arrow,
        { [styles.arrowDisabled]: props.disabled }
      ])}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
}

export default Carousel2;
