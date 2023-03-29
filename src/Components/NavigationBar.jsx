import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavigationBar() {

	const { t, i18n } = useTranslation();
	const changeWebsiteLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  	};

	return (
    <div className="navBar">
      <div>
        <div className="phone">
          <a href="">59180009</a>
        </div>
        <Link to="/">
          <button>Portum</button>
        </Link>
        <div className="lang" onClick={() => changeWebsiteLanguage("ee")}>
          EST
        </div>
        <div className="lang" onClick={() => changeWebsiteLanguage("ru")}>
          RU
        </div>
      </div>
      <div>
        <Link to="/kuidas-toimida">
          <button>{t("navbar.kuidastoimida-button")}</button>
        </Link>
        <Link to="/teenused">
          <button>{t("navbar.teenused-button")}</button>
        </Link>
        <Link to="/kontakt">
          <button>{t("navbar.kontakt-button")}</button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;