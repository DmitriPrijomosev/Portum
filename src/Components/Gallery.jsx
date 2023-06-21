import "../CSS/gallery.css";

import galleryImg1 from "../Assets/img/portum-matuseburoo-kirikus2.jpg";
import galleryImg2 from "../Assets/img/portum-matuseburoo-kontor-2.jpg";
import galleryImg3 from "../Assets/img/portum-matuseburoo-kirikus.jpg";
import galleryImg4 from "../Assets/img/portum-matuseburoo-kontor-3.jpg";
import galleryImg5 from "../Assets/img/portum-matuseburoo-kontor-4.jpg";
import galleryImg6 from "../Assets/img/portum-matuseburoo-kontor.jpg";
import galleryImg7 from "../Assets/img/portum-matuseburoo-lilled-2.jpg";
import galleryImg8 from "../Assets/img/portum-matuseburoo-lilled.jpg";
import galleryImg9 from "../Assets/img/portum-matuseburoo-matuseauto-1.jpg";
import galleryImg10 from "../Assets/img/portum-matuseburoo-matuseauto-2.jpg";
import galleryImg11 from "../Assets/img/portum-matuseburoo-matuseauto-3.jpg";
import galleryImg12 from "../Assets/img/portum-matuseburoo-matuseauto-4.jpg";
import galleryImg13 from "../Assets/img/portum-matuseburoo-matuseauto-5.jpg";
import galleryImg14 from "../Assets/img/portum-matuseburoo-matuseauto-6.jpg";
import galleryImg15 from "../Assets/img/portum-matuseburoo-matused.jpg";

import { ReactComponent as LeftArrow } from '../Assets/img/left-arrow-circle-svgrepo-com.svg';
import { ReactComponent as RightArrow } from '../Assets/img/right-arrow-circle-svgrepo-com.svg';

function Gallery() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="galleryBody">
      <div className="galleryMain" id="slider">
        <img className="img-main" src={galleryImg1} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg2} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg3} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg4} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg5} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg6} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg7} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg8} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg9} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg10} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg11} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg12} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg13} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg14} alt="" loading="lazy" />
        <img className="img-main" src={galleryImg15} alt="" loading="lazy" />
      </div>
      <button onClick={slideLeft} className="left gallery-button">
        <LeftArrow className="icon" />
      </button>
      <button onClick={slideRight} className="right gallery-button">
        <RightArrow className="icon" />
      </button>
    </div>
  );
}

export default Gallery;
