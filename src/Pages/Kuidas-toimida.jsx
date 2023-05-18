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
              <h3>Как действовать</h3>
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
              <h2>Если близкий человек умер дома</h2>
            </div>
            <article className="wahtText">
              <p>
                Если человек умер в своем доме, незамедлительно позвоните по
                телефону 112, чтобы вызвать скорую помощь. Бригада скорой помощи
                зафиксирует факт смерти и выдаст справку, которая в наше время
                может быть в электронном формате.
              </p>
              <p>
                После получения свидетельства о смерти позвоните нам на
                круглосуточный номер 372 5918 0009.
              </p>
              <p>
                Позвонить нам Вы можете и сразу - мы проконсультируем и подержим
                вас, организовав все необходимые дальнейшие действия.
              </p>
            </article>
          </div>
        </div>
        <div className="activitiesSection3Row">
          <div className="activitiesSection3RowItemLeft">
            <img src={img4} alt="Portum Matusebüroo, lilled" />
          </div>
          <div className="activitiesSection3RowItemRight">
            <div className="whatTitle">
              <h2>Смерть близкого в больнице или доме по уходу</h2>
            </div>
            <article className="wahtText">
              <p>
                Большинство смертей происходит в больнице или домах по уходу.
                Эти организации обычно не занимаются похоронами, однако они
                самостоятельно оформят справку о смерти и обеспечат первичную
                опеку над умершим до тех пор, пока ближайшие родственники не
                выберут похоронное бюро, которое займется телом.
              </p>
              <p>
                После получения информации о смерти близкого, позвоните на наш
                круглосуточный телефон. Мы организуем доставку тела в морг и
                обсудим все необходимые дальнейшие шаги для проведения достойных
                похорон.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Kuidastoimida;
