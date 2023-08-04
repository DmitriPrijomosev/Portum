import { Link } from "react-router-dom";
import background from "../Assets/portum-wallpaper.webp";

import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <div
        className="section1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="_container">
          <div className="section1_1">
            <div className="section1_2">
              <div className="section1_3 not_found">
                <h3>404</h3>
                <h3>{t("section1.2.1")}</h3>
                <hr className="hr"></hr>
                <Link to="/">
                  <h1>{t("section1.1.1")}</h1>
                </Link>
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
    </div>
  );
}

export default NotFound;
