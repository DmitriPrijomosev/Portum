import { useTranslation } from "react-i18next";
import backgroundContact from "../Assets/backgroundContact.png";
import "../CSS/prices.css";

function Teenused() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="section1 contactSection1"
        style={{ backgroundImage: `url(${backgroundContact})` }}
      >
        <div className="contact_container">
          <div className="contact_section1_1">
            <div className="contact_section1_2">
              <div className="contact_section1_3">
                <h3>{t("section7.1.1")}</h3>
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
      <div className="_container pricesSection2row">
        <div className="pricesSection2">
          <h1 className="pricesSectionHeader">{t("section7.2.1")}</h1>
          <div className="pricesSection2TerxtArea">
            <p>{t("section7.2.2")}</p>
            <p>{t("section7.2.3")}</p>
          </div>
        </div>
      </div>
      <div className="_container pricesSection3">
        <div className="pricesSection3Items">
          <div className="pricesSection3Title">
            <h2>{t("section7.3")}</h2>
          </div>
          <div className="pricesSection3_row">
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>{t("section7.3.1")}</h3>
                </div>
                <div className="itemPrice">{t("section7.3.2")}</div>
                <ul className="itemList">
                  <li className="itemListDescription">{t("section7.3.3")}</li>
                </ul>
              </div>
            </div>
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>{t("section7.4.1")}</h3>
                </div>
                <div className="itemPrice">{t("section7.4.2")}</div>
                <ul className="itemList">
                  <li className="itemListDescription">{t("section7.4.3")}</li>
                  <li className="itemListDescription">{t("section7.4.4")}</li>
                  <li className="itemListDescription">{t("section7.4.5")}</li>
                  <li className="itemListDescription">{t("section7.4.6")}</li>
                  <li className="itemListDescription">{t("section7.4.7")}</li>
                  <li className="itemListDescription">{t("section7.4.8")}</li>
                  <li className="itemListDescription">{t("section7.4.9")}</li>
                </ul>
              </div>
            </div>
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>{t("section7.5.1")}</h3>
                </div>
                <div className="itemPrice">{t("section7.5.2")}</div>
                <ul className="itemList">
                  <li className="itemListDescription">{t("section7.4.3")}</li>
                  <li className="itemListDescription">{t("section7.4.4")}</li>
                  <li className="itemListDescription">{t("section7.4.5")}</li>
                  <li className="itemListDescription">{t("section7.4.6")}</li>
                  <li className="itemListDescription">{t("section7.4.7")}</li>
                  <li className="itemListDescription">{t("section7.4.8")}</li>
                  <li className="itemListDescription">{t("section7.4.9")}</li>
                  <li className="itemListDescription">{t("section7.5.3")}</li>
                  <li className="itemListDescription">{t("section7.5.4")}</li>
                  <li className="itemListDescription">{t("section7.5.5")}</li>
                  <li className="itemListDescription">{t("section7.5.6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_container pricesSection4">
        <div className="pricesSection4Items">
          <div className="pricesSection3Title">
            <h2>{t("section8.1")}</h2>
          </div>
          <div className="pricesTable">
            <table>
              <thead>
                <tr>
                  <th>{t("section8.2")}</th>
                  <th>{t("section8.3")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("section8.4")}</td>
                  <td>{t("section8.5")}</td>
                </tr>
                <tr>
                  <td>{t("section8.6")}</td>
                  <td>200€</td>
                </tr>
                <tr>
                  <td>{t("section8.7")}</td>
                  <td>{t("section8.8")}</td>
                </tr>
                <tr>
                  <td>{t("section8.9")}</td>
                  <td>{t("section8.10")}</td>
                </tr>
                <tr>
                  <td>{t("section8.11")}</td>
                  <td>{t("section8.12")}</td>
                </tr>
                <tr>
                  <td>{t("section8.13")}</td>
                  <td>{t("section8.14")}</td>
                </tr>
                <tr>
                  <td>{t("section8.15")}</td>
                  <td>{t("section8.16")}</td>
                </tr>
                <tr>
                  <td>{t("section8.17")}</td>
                  <td>70€</td>
                </tr>
                <tr>
                  <td>{t("section8.18")}</td>
                  <td>{t("section8.19")}</td>
                </tr>
                <tr>
                  <td>{t("section8.20")}</td>
                  <td>{t("section8.21")}</td>
                </tr>
                <tr>
                  <td>{t("section8.22")}</td>
                  <td>{t("section8.23")}</td>
                </tr>
                <tr>
                  <td>{t("section8.24")}</td>
                  <td>{t("section8.25")}</td>
                </tr>
                <tr>
                  <td>{t("section8.26")}</td>
                  <td>{t("section8.27")}</td>
                </tr>
                <tr>
                  <td>{t("section8.28")}</td>
                  <td>55€</td>
                </tr>
                <tr>
                  <td>{t("section8.29")}</td>
                  <td>55€</td>
                </tr>
                <tr>
                  <td>{t("section8.30")}</td>
                  <td>{t("section8.25")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teenused;
