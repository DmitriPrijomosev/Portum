import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavigationBar() {

	const { t, i18n } = useTranslation();
	const changeWebsiteLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  	};

	return (
    <header className="navBar">
      <div className="navBarTop">
        <div className="_container menuBar">
          <button className="phone">
            <a href="">+372 5918 0009 (24/7)</a>
          </button>
          <Link to="/">
            <button className="logo">Portum</button>
          </Link>
          <div className="langSelector">
            <button
              className="lang"
              onClick={() => changeWebsiteLanguage("ee")}
            >
              EST
            </button>
            <button
              className="lang"
              onClick={() => changeWebsiteLanguage("ru")}
            >
              RU
            </button>
          </div>
        </div>
      </div>
      <nav className="_container navBarBottom">
        <Link to="/kuidas-toimida">
          <button>{t("navbar.kuidastoimida-button")}</button>
        </Link>
        <Link to="/teenused">
          <button>{t("navbar.teenused-button")}</button>
        </Link>
        <Link to="/kontakt">
          <button>{t("navbar.kontakt-button")}</button>
        </Link>
      </nav>
    </header>
  );
}

export default NavigationBar;