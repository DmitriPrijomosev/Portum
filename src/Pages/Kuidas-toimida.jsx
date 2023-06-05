import { useTranslation } from "react-i18next";
import backgroundContact from "../Assets/backgroundContact.png";
import img3 from "../Assets/Portum3.png";
import img4 from "../Assets/Portum4.png";
import '../CSS/activities.css';

function Kuidastoimida() {

const { t } = useTranslation();

return (
  <div>
    <div
      className="section1 contactSection1"
      style={{ backgroundImage: `url(${backgroundContact})` }}
    >
      <div className="_container contactContainer">
        <div className="section1_1">
          <div className="section1_2">
            <div className="section1_3 contactSection1_3">
              <h3>{t("navbar.kuidastoimida-button")}</h3>
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
    <div className="_container activitiesSection3">
      <div className="activitiesSection3Column">
        <div className="activitiesSection3Row">
          <div className="activitiesSection3RowItemLeft">
            <img src={img3} alt="Portum Matusebüroo, lilled" />
          </div>
          <div className="activitiesSection3RowItemRight">
            <div className="whatTitle">
              <h2>{t("section6.1")}</h2>
            </div>
            <article className="wahtText">
              <p>{t("section6.2")}</p>
              <p>{t("section6.3")}</p>
              <p>{t("section6.4")}</p>
            </article>
          </div>
        </div>
        <div className="activitiesSection3Row">
          <div className="activitiesSection3RowItemLeft">
            <img src={img4} alt="Portum Matusebüroo, lilled" />
          </div>
          <div className="activitiesSection3RowItemRight">
            <div className="whatTitle">
              <h2>{t("section6.5")}</h2>
            </div>
            <article className="wahtText">
              <p>{t("section6.6")}</p>
              <p>{t("section6.7")}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Kuidastoimida;
