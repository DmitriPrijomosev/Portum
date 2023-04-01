import galleryImg1 from "../Assets/portum-matuseteenused.jpeg";
import '../CSS/gallery.css'
import galleryImg2 from '../Assets/photo-1530281700549-e82e7bf110d6.jpg';


function Gallery() {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="galleryBody">
      <div className="galleryMain" id="slider">
        <img className="img-main" src={galleryImg2} alt="" />
        <img className="img-main" src={galleryImg1} alt="" />
        <img className="img-main" src={galleryImg2} alt="" />
        <img className="img-main" src={galleryImg1} alt="" />
        <img className="img-main" src={galleryImg2} alt="" />
        <img className="img-main" src={galleryImg1} alt="" />
        <img className="img-main" src={galleryImg2} alt="" />
        <img className="img-main" src={galleryImg1} alt="" />
        <img className="img-main" src={galleryImg2} alt="" />
        <img className="img-main" src={galleryImg1} alt="" />
        <img className="img-main" src={galleryImg2} alt="" />
      </div>
      <button
        onClick={slideLeft}
        className="left gallery-button"
      >
        Left
      </button>
      <button
        onClick={slideRight}
        className="right gallery-button"
      >
        Right
      </button>
    </div>
  );
}

export default Gallery;