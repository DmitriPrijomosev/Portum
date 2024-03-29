import backgroundContact from "../Assets/backgroundContact.png";
import "../CSS/contac.css";
import img2 from "../Assets/PortumAsukoht.png";
import { useTranslation } from "react-i18next";

function Kontakt() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="section1"
        style={{ backgroundImage: `url(${backgroundContact})` }}
      >
        <div className="contact_container">
          <div className="contact_section1_1">
            <div className="contact_section1_2">
              <div className="contact_section1_3">
                <h3>{t("navbar.kontakt-button")}</h3>
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
      <div className="_container contactContainer">
        <div className="contactSection3">
          <div className="section3_1 contactSection3_1">
            <div className="contactFields">
              <h2 className="padding">
                {t("section9.1")}, {t("section9.2")}
              </h2>

              <p className="padding">
                <span>{t("section9.3")}</span>Viljandi Maantee 18b, 11216
                Tallinn
              </p>
              <p>
                <span>{t("section9.4")}</span>
                <a href="tel:+37259180009">+372 5918 0009</a>
              </p>
              <p>
                <span>{t("section9.5")}</span>9.00-17.00
              </p>
              <p>
                <span>{t("section9.6")}</span>09.30-16.00
              </p>
              <p className="padding">
                <span>{t("section9.7")}</span>
              </p>

              <p className="padding">
                <span>{t("section9.8")}</span>
                <a href="mailto:info@portum.ee">info@portum.ee</a>
              </p>
            </div>
            <div className="text contactText">
              <img src={img2} alt="Portum Matusebüroo, asukoht" />
            </div>
          </div>
        </div>
      </div>
      <div className="section4 contactSection4_2">
        <div className="section4_2">
          <div className="map">
            <iframe
              title="Portum Matusebüroo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.681105598991!2d24.729743877308522!3d59.388348306295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295281100e2ff%3A0xe9613555d02443d!2sViljandi%20Maantee%2018b%2C%2011214%20Tallinn!5e0!3m2!1set!2see!4v1684232993128!5m2!1set!2see"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={{}}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contactSection5 _container">
        <p>Portum Matusebüroo OÜ, reg 16133370</p>
      </div>
    </div>
  );
}

export default Kontakt;
