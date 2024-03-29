import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavigationBar() {
  const { t, i18n } = useTranslation();
  // const navigate = useNavigate();
  const [languageSelectorState, setLanguageSelectorState] = useState("ee");
  const [mobileMenuState, setMobileMenuState] = useState("closed");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("Portum_lang");
    if (savedLanguage) {
      setLanguageSelectorState(savedLanguage);
    }
  }, []);

  const changeWebsiteLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("Portum_lang", language);
    setLanguageSelectorState(language);
  };

  const handleLinkClick = () => {
    setMobileMenuState("closed");
    window.scrollTo(0, 0);
  };

  return (
    <header className="navBar">
      <div
        className={
          mobileMenuState === "opened"
            ? "navBarTop navBarTopOpened"
            : "navBarTop"
        }
      >
        <div className="_container menuBar">
          <button className="phone menuBarItem navElement navElement1">
            <a href="tel:+37259180009">+372 5918 0009 (24/7)</a>
          </button>
          <Link className="menuBarItem navElement navElement2" to="/">
            <button className="logo">Portum</button>
          </Link>
          <nav
            className={
              mobileMenuState === "closed" ? "navMobile" : "navMobileOpened"
            }
          >
            <div className="langSelector menuBarItem navElement">
              <button
                className={
                  languageSelectorState === "ee" ? "lang lang_hidded" : "lang"
                }
                onClick={() => changeWebsiteLanguage("ee")}
              >
                ET
              </button>
              <button
                className={
                  languageSelectorState === "ru" ? "lang lang_hidded" : "lang"
                }
                onClick={() => changeWebsiteLanguage("ru")}
              >
                RU
              </button>
            </div>
            <Link className="navElement" to="/">
              <button onClick={() => handleLinkClick("closed")}>
                {t("navbar.avaleht-button")}
              </button>
            </Link>
            <Link className="navElement" to="/kuidas-toimida">
              <button onClick={() => handleLinkClick("closed")}>
                {t("navbar.kuidastoimida-button")}
              </button>
            </Link>
            <Link className="navElement" to="/teenused">
              <button onClick={() => handleLinkClick("closed")}>
                {t("navbar.teenused-button")}
              </button>
            </Link>
            <Link className="navElement" to="/kontakt">
              <button onClick={() => handleLinkClick("closed")}>
                {t("navbar.kontakt-button")}
              </button>
            </Link>
          </nav>
          <button
            aria-label="Mobile menu icon"
            className={
              mobileMenuState === "closed"
                ? "mobile_controls mobile_controls_hidded"
                : "mobile_controls"
            }
            onClick={() => setMobileMenuState("closed")}
          >
            <FaTimes />
          </button>
          <div className="langSelector menuBarItem navElement navElement3">
            <button
              className={
                languageSelectorState === "ee" ? "lang lang_hidded" : "lang"
              }
              onClick={() => changeWebsiteLanguage("ee")}
            >
              ET
            </button>
            <button
              className={
                languageSelectorState === "ru" ? "lang lang_hidded" : "lang"
              }
              onClick={() => changeWebsiteLanguage("ru")}
            >
              RU
            </button>
          </div>
          <button
            aria-label="Mobile menu icon"
            className={
              mobileMenuState === "opened"
                ? "mobile_controls mobile_controls_hidded"
                : "mobile_controls"
            }
            onClick={() => setMobileMenuState("opened")}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <div className="navBarBottom _container">
        <nav className="navigation">
          <Link className="navElement navElement1" to="/kuidas-toimida">
            <button>{t("navbar.kuidastoimida-button")}</button>
          </Link>
          <Link className="navElement navElement2" to="/teenused">
            <button>{t("navbar.teenused-button")}</button>
          </Link>
          <Link className="navElement navElement3" to="/kontakt">
            <button>{t("navbar.kontakt-button")}</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavigationBar;
