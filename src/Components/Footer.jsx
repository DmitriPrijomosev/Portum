import '../CSS/footer.css';
import { useTranslation } from "react-i18next";

function Footer() {

const { t } = useTranslation();

	return (
    <div className="footer">
      <div className="_container footer_container">
        <div className="footer_column">
          <div className="footer_column_header">
            <p>{t("section10.1")}</p>
            <p>{t("section10.2")}</p>
          </div>
          <div className="footer_column_phone">
            <a href="tel:+37259180009">+372 5918 0009</a>
          </div>
        </div>
        <div className="footer_column">
          <div className="footer_column_header">
            <p>{t("section10.3")}</p>
          </div>
          <div className="footel_column_text">
            <p>{t("section10.4")}</p>
            <p>viljandi mnt 18b, tallinn</p>
            <a href="mailto:info@portum.ee">info@portum.ee</a>
          </div>
        </div>
        <div className="footer_column">
          <div className="footer_column_header">
            <p>{t("section10.5")}</p>
          </div>
          <div className="footel_column_text">
            <p>
              {t("section10.6")}
              <br></br>
              {t("section10.7")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;