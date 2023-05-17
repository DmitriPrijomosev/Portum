import { useTranslation } from "react-i18next";
import backgroundContact from '../Assets/backgroundContact.png'
import '../CSS/prices.css'

function Teenused() {

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
                <h3>услуги и цены</h3>
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
      <div className="pricesSection2row">
        <div className="pricesSection2">
          <h1 className="pricesSectionHeader">Организация похорон</h1>
          <div className="pricesSection2TerxtArea">
            <p>
              С нашей помощью Вы сможете подобрать все необходимые ритуальные
              пренадлежности, спланировать и провести похороны (гражданская
              панихида или церковный обряд), а также траурно оформить место
              захоронения. Наши опытные специалисты оперативно и максимально
              корректно для родственников и близких покойного возьмут на себя
              все заботы по организации и проведению этого траурного
              мероприятия.
            </p>
            <p>
              Каждые похороны, как и каждый ушедший близкий - индивидуальны.
              Поэтому Вы можете выбрать один из готовых пакетов услуг или
              выбрать то, что неободимо именно Вам. Все детали мы можем обсудить
              в любое удобное для Вас время.
            </p>
          </div>
        </div>
      </div>
      <div className="pricesSection3">
        <div className="_container pricesSection3Items">
          <div className="pricesSection3Title">
            <h2>Цены на пакеты</h2>
          </div>
          <div className="pricesSection3_row">
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>Индивидуальный</h3>
                </div>
                <div className="itemPrice">от 490 евро</div>
                <ul className="itemList">
                  <li className="itemListDescription">
                    Все услуги по договорённости. Составьте собственный,
                    подходящий именно Вам пакет
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>Рациональный</h3>
                </div>
                <div className="itemPrice">от 740 евро</div>
                <ul className="itemList">
                  <li className="itemListDescription">
                    Гроб, обшитый тканью, драпировка
                  </li>
                  <li className="itemListDescription">Подушка шёлковая</li>
                  <li className="itemListDescription">Покрывало шёлковое</li>
                  <li className="itemListDescription">Ручки на гроб</li>
                  <li className="itemListDescription">
                    Хранение и туалет усопшего в морге
                  </li>
                  <li className="itemListDescription">Катафалк</li>
                  <li className="itemListDescription">Организация похорон</li>
                </ul>
              </div>
            </div>
            <div className="pricesSection3_column">
              <div className="pricesSection3_column_item">
                <div className="itemLabel">
                  <h3>Премиум</h3>
                </div>
                <div className="itemPrice">от 1100 евро</div>
                <ul className="itemList">
                  <li className="itemListDescription">
                    Гроб, обшитый тканью, драпировка
                  </li>
                  <li className="itemListDescription">Подушка шёлковая</li>
                  <li className="itemListDescription">Покрывало шёлковое</li>
                  <li className="itemListDescription">Ручки на гроб</li>
                  <li className="itemListDescription">
                    Хранение и туалет усопшего в морге
                  </li>
                  <li className="itemListDescription">Катафалк</li>
                  <li className="itemListDescription">Организация похорон</li>
                  <li className="itemListDescription">Носильщики</li>
                  <li className="itemListDescription">Свечи</li>
                  <li className="itemListDescription">
                    Временная пластиковая табличка на захоронение
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricesSection4">
        <div className="pricesSection4Items">
          <div className="pricesSection3Title">
            <h2>цены на отдельные услуги</h2>
          </div>
          <div className="pricesTable">
            <table>
              <tr>
                <th>Наименование услуги</th>
                <th>Цена</th>
              </tr>
              <tr>
                <td>Круглосуточная транспортировка умершего в морг</td>
                <td> бесплатно</td>
              </tr>
              <tr>
                <td>Хранение в морге и туалет покойного</td>
                <td>200€</td>
              </tr>
              <tr>
                <td>Катафалк</td>
                <td>60€</td>
              </tr>
              <tr>
                <td>Услуги чтеца</td>
                <td>от 120€</td>
              </tr>
              <tr>
                <td>Услуги батюшки для отпевания в часовне или на кладбище</td>
                <td>по договоренности</td>
              </tr>
              <tr>
                <td>Широкий ассортимент гробов</td>
                <td>от 200€ до 3 000€</td>
              </tr>
              <tr>
                <td>Урны для кремации</td>
                <td>от 55€</td>
              </tr>
              <tr>
                <td>Доставка усопшего в крематорий в день кремации</td>
                <td>70€</td>
              </tr>
              <tr>
                <td>Композиция на крышку гроба, отрезные цветы</td>
                <td>от 120€</td>
              </tr>
              <tr>
                <td>
                  Возможность заказа автобуса для перевозки людей 14-18 человек
                </td>
                <td>60€ / 1 час</td>
              </tr>
              <tr>
                <td>Венки ,отрезные цветы, ветки, ели, зелень</td>
                <td>от 60€</td>
              </tr>
              <tr>
                <td>Бронирование места проведения поминок</td>
                <td>По договоренности</td>
              </tr>
              <tr>
                <td>Музыка по договорённости</td>
                <td>oт 100€</td>
              </tr>
              <tr>
                <td>
                  Выезд ритуального агента на дом для консультации по
                  организации похорон
                </td>
                <td>55€</td>
              </tr>
              <tr>
                <td>Временная пластиковая табличка на захоронение</td>
                <td>55€</td>
              </tr>
              <tr>
                <td>Транспортировка усопшего из-за границы</td>
                <td>по договоренности</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teenused;
