import background from "../Assets/portum-wallpaper.jpg";
import img1 from "../Assets/Portum-img2.png";
import { useTranslation } from "react-i18next";
import Gallery from "../Components/Gallery";
import { useState } from "react";

function Portum() {

  const { t, i18n } = useTranslation();
 
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	}


	return (
    <div>
      <div
        className="section1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="_container">
        <div className="section1_1">
          <div className="section1_2">
            <div className="section1_3">
              <h1>{t("section1.1")}</h1>
              <hr className="hr"></hr>
              <h3>{t("section1.2")}</h3>
            </div>
          </div>
        </div>
        <div className="section1_4">
          <div className="section1_4_1">
            <h3>{t("section1.3")}</h3>
            <p>{t("section1.4")}</p>
          </div>
          <div className="section1_4_2">
            <a href="tel:+37259180009">5918 0009</a>
          </div>
        </div>
        </div>
      </div>
      <div className="section2"></div>
      <div className="section3">
        <div className="section3_1">
          <img src={img1} alt="" />
          <div className="text">
            <div className="section3_2">
              <p>{t("section3.2.1")}</p>
              <p>{t("section3.2.2")}</p>
              <p>{t("section3.2.3")}</p>
              <p>{t("section3.2.4")}</p>
            </div>
            <div className="signature">
              <hr className="hr2"></hr>
              <h5>Vadim Vesselov</h5>
              <p>Portum Matusebüroo OÜ</p>
            </div>
            <div className="section3_3"></div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4_1">
          <h3>{t("section4.1.1")}</h3>
        </div>
        <div className="section4_2">
          <div className="item">
            <p>{t("section4.1.2")}</p>
          </div>
          <div className="item">
            <p>{t("section4.1.3")}</p>
          </div>
          <div className="item">
            <p>
              {t("section4.1.4")}
              <a href="tel:+37259180009"> +372 5918 000</a>
            </p>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="_container">
          <div className="tab">
            <ul className="tab_controls">
              <li
                className={
                  toggleState === 1
                    ? "tab_controls_area tab_controls_area_active"
                    : "tab_controls_area"
                }
                onClick={() => toggleTab(1)}
              >
                <div className="number">01</div>
                <div className="tab_controls_area_header">
                  <h2>{t("section5.1.1")}</h2>
                  <p>{t("section5.1.2")}</p>
                </div>
              </li>
              <li
                className={
                  toggleState === 2
                    ? "tab_controls_area tab_controls_area_active"
                    : "tab_controls_area"
                }
                onClick={() => toggleTab(2)}
              >
                <div className="number">02</div>
                <div className="tab_controls_area_header">
                  <h2>{t("section5.1.3")}</h2>
                  <p>{t("section5.1.4")}</p>
                </div>
              </li>
              <li
                className={
                  toggleState === 3
                    ? "tab_controls_area tab_controls_area_active"
                    : "tab_controls_area"
                }
                onClick={() => toggleTab(3)}
              >
                <div className="number">03</div>
                <div className="tab_controls_area_header">
                  <h2>{t("section5.1.5")}</h2>
                  <p>{t("section5.1.6")}</p>
                </div>
              </li>
            </ul>
            <ul className="tab_textarea">
              <li
                className={
                  toggleState === 1 ? "content active-content" : "content"
                }
              >
                <p>{t("section5.2.1")}</p>
                <p>{t("section5.2.2")}</p>
                <p>{t("section5.2.3")}</p>
                <p>{t("section5.2.4")}</p>
                <p>{t("section5.2.5")}</p>
                <button>
                  <a href="tel:+37259180009">+372 5918 0009 (24/7)</a>
                </button>
              </li>
              <li
                className={
                  toggleState === 2 ? "content active-content" : "content"
                }
              >
                <p>{t("section5.3.1")}</p>
                <p>{t("section5.3.2")}</p>
                <p>{t("section5.3.3")}</p>
                <p>{t("section5.3.4")}</p>
                <p>{t("section5.3.5")}</p>
                <p>{t("section5.3.6")}</p>
                <p>{t("section5.3.7")}</p>
                <button>
                  <a href="tel:+37259180009">+372 5918 0009 (24/7)</a>
                </button>
              </li>
              <li
                className={
                  toggleState === 3 ? "content active-content" : "content"
                }
              >
                <p>{t("section5.4.1")}</p>
                <p>
                  {t("section5.4.2")}
                  <a href="https://www.zaurstone.ee/et/hauapiirded/">
                    <span style={{textDecorationLine: 'underline'}}>
                      ZaurStone OÜ
                    </span>
                  </a>
                  ;
                </p>
                <p>{t("section5.4.3")}</p>
                <p>{t("section5.4.4")}</p>
                <button>
                  <a href="tel:+37259180009">+372 5918 0009 (24/7)</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section6">
        <Gallery />
      </div>
      <div className="gallery"></div>
    </div>
  );
}

export default Portum;