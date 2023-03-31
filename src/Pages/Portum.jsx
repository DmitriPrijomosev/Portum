import background from "../Assets/portum-wallpaper.jpg";
import img1 from "../Assets/Portum-img2.png";
import { useTranslation } from "react-i18next";

function Portum() {

	const { t, i18n } = useTranslation();

	return (
    <div>
      <div
        className="section1"
        style={{ backgroundImage: `url(${background})` }}
      >
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
            <a href="">+59180009</a>
          </div>
        </div>
      </div>
      <div className="section2"></div>
      <div className="section3">
        <div className="section3_1">
          <img src={require("../Assets/Portum-img2.png")} alt="" />
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
          <h3>Mida teha, kui lähedane on surnud?</h3>
        </div>
        <div className="section4_2">
          <div className="item">
            <p>
              Kui inimene sureb kodus, kutsuda üle Eesti kiirabi numbril 112,
              mis fikseerib surma fakti ja väljastab tõendi.
            </p>
          </div>
          <div className="item">
            <p>Kui inimene sureb haiglas, väljastab raviarst surmatunnistuse</p>
          </div>
          <div className="item">
            <p>Helistage meile ööpäevaringselt numbrile 59180009</p>
          </div>
        </div>
      </div>
      <div className="section5"></div>
      <div className="gallery"></div>
    </div>
  );
}

export default Portum;