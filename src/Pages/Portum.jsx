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
            <a href="">5918 0009</a>
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
            <p>Helistage meile ööpäevaringselt numbrile +372 5918 000</p>
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
                  <h2>ÖÖPÄEVARINGNE DISPETŠER</h2>
                  <p>Meile helistades saate:</p>
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
                  <h2>Matuste korraldamine</h2>
                  <p>Oleme valmis koheselt aidata:</p>
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
                  <h2>Kalmisteenused</h2>
                  <p>Anname edasist abi:</p>
                </div>
              </li>
            </ul>
            <ul className="tab_textarea">
              <li
                className={
                  toggleState === 1 ? "content active-content" : "content"
                }
              >
                <p>
                  - saate teada kuidas käituda erinevates olukordades
                  (prioriteetsed tegevused lähedase surma korral, dokumentide
                  hankimine);
                </p>
                <p>- saate korraldada lahkunu transportimine surnukambrisse;</p>
                <p>
                  - vajaduse korral tuleme Teie juurde et aidata
                  paberimajandusega ja matusetoodete valikuga;
                </p>
                <p>
                  - matuse planeerimine ja korraldamine, transpordi ja
                  matusesaali broneerimine;
                </p>
                <p>
                  - info erinevate organisatsioonide (perekonnaseisuametite,
                  surnuaedade ja kalmistute) töö kohta, matusetalituste ja
                  rituaaltalituste läbiviimisest.
                </p>
                <button>
                  <a href="">+372 5918 000 (24/7)</a>
                </button>
              </li>
              <li
                className={
                  toggleState === 2 ? "content active-content" : "content"
                }
              >
                <p>
                  - valida matuse aksessuaare (kirst, pärg, tahvel või rist);
                </p>
                <p>- valmistada lahkunu ette hüvastijätutseremooniaks;</p>
                <p>- planeerida matuste marsruut ning tellida surnuauto;</p>
                <p>- korraldada matusetalitus ja usulised rituaalid;</p>
                <p>
                  - matmispaiga kaunistamine ja lõpliku hüvastijätukoha
                  ettevalmistamine (kuuselaternad ja lilled, varikatus, poodium
                  kirstu jaoks, toolid sugulastele);
                </p>
                <p>- viia matused läbi Teie poolt valitud kohas.</p>
                <p>
                  Meie kogenud spetsialistid korrektselt ja operatiivselt
                  võtavad enda peale kõik matusega seotud mured ning korraldavad
                  matusetseremooniat just Teile sobival viisil.
                </p>
                <button>
                  <a href="">+372 5918 0009 (24/7)</a>
                </button>
              </li>
              <li
                className={
                  toggleState === 3 ? "content active-content" : "content"
                }
              >
                <p>
                  Hauakivid, mälestusmärgid ja hauapiirded saab tellida otse
                  meie käest. Usume, et saame pakkuda Teile kõige laiemat
                  valikut omatoodet nii graniidist kui ka betoonist.
                </p>
                <p>
                  Rohkem infot saab meie kontserni ettevõtte veebilehelt{" "}
                  <span>ZaurStone OÜ</span>;
                </p>
                <p>
                  Lisaks sellele saame teid vajadusel aidata haua hooldamisel —
                  puhastamine, koristamine, taimede eemaldamine ja liiva
                  lisamine.
                </p>
                <p>
                  Tööd võib tellida kas ühekordselt või lepingu järgi jooksvalt,
                  teostatud tööde vajadusel esitame fotoaruande.
                </p>
                <button>
                  <a href="">+372 5918 0009 (24/7)</a>
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