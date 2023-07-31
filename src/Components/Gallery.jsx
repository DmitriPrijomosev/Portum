import "../CSS/gallery.css";
import galleryImg1 from "../Assets/img/portum-matuseburoo-kirikus2.webp";
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
  let firstImageWidth = slider.children[0].offsetWidth +13;
  slider.scrollLeft -= firstImageWidth;
};

const slideRight = () => {
  var slider = document.getElementById("slider");
  let firstImageWidth = slider.children[0].offsetWidth + 13;
  slider.scrollLeft += firstImageWidth;
};


  return (
    <div className="galleryBody ">
      <div className="galleryMain" id="slider">
        <img
          className="img-main"
          src={galleryImg1}
          alt="Matuseteenistus, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg2}
          alt="Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg3}
          alt="Matuseteenistus, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg4}
          alt="Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg5}
          alt="Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg6}
          alt="Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg7}
          alt="Kirstukaanekimp, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg8}
          alt="Kirstukaanekimp, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg9}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg10}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg11}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg12}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg13}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg14}
          alt="Matuseauto, Portum Matusebüroo"
          loading="lazy"
        />
        <img
          className="img-main"
          src={galleryImg15}
          alt="Matuste korraldamine, Portum Matusebüroo"
          loading="lazy"
        />
      </div>
      <button
        aria-label="Left Arrow"
        onClick={slideLeft}
        className="left gallery-button"
      >
        <LeftArrow className="icon" />
      </button>
      <button
        aria-label="Right Arrow"
        onClick={slideRight}
        className="right gallery-button"
      >
        <RightArrow className="icon" />
      </button>
    </div>
  );
}

export default Gallery;
