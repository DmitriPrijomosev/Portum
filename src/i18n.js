import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ee: {
    translation: {
      "navbar.kuidastoimida-button": "Kuidas toimida",
      "navbar.teenused-button": "Teenused ja hinnad",
      "navbar.kontakt-button": "Kontakt",
      "section1.1": "MATUSEBÜROO PORTUM",
      "section1.2": "TEIE KÕRVAL KÕIGE RASKEMATEL HETKEDEL",
      "section1.3": "ÖÖPÄEVARINGNE DISPETŠER",
      "section1.4": "LAHKUNU ÖÖPÄEVARINGNE TRANSPORT SURNUKUURI — TASUTA",
      "section3.2.1": "Lähedaste lahkumine on alati valus kaotus.",
      "section3.2.2":
        "Enamik inimesi satub raskustusse, kui nad seisavad silmitsi surma registreerimise ja matusekorraldusega. Sellises olukorras vajab inimene professionaalset nõu. Ja siin me oleme Teile abiks",
      "section3.2.3":
        "Lihtsalt helistage numbrile 59180009 (oleme Teie jaoks avatud ööpäevaringselt), et saada tasuta teavet matuseteenuste kohta ning saada meie matusekorraldaja käest nõu.",
      "section3.2.4": "Me hoolitseme iga detaili eest.",
      "section3.2.8": "Kontakt",
      "section4.1.1": "Mida teha, kui lähedane on surnud?",
      "section4.1.2":
        "Kui inimene sureb kodus, kutsuda üle Eesti kiirabi numbril 112, mis fikseerib surma fakti ja väljastab tõendi.",
      "section4.1.3":
        "Kui inimene sureb haiglas, väljastab raviarst surmatunnistuse",
      "section4.1.4": "Helistage meile ööpäevaringselt numbrile",
      "section5.1.1": "ÖÖPÄEVARINGNE DISPETŠER",
      "section5.1.2": "Meile helistades saate:",
      "section5.1.3": "Matuste korraldamine",
      "section5.1.4": "Oleme valmis koheselt aidata:",
      "section5.1.5": "Kalmisteenused",
      "section5.1.6": "Anname edasist abi:",
      "section5.2.1":
        "- saate teada kuidas käituda erinevates olukordades (prioriteetsed tegevused lähedase surma korral, dokumentide hankimine);",
      "section5.2.2":
        "- saate korraldada lahkunu transportimine surnukambrisse;",
      "section5.2.3":
        "- vajaduse korral tuleme Teie juurde et aidata paberimajandusega ja matusetoodete valikuga;",
      "section5.2.4":
        "- matuse planeerimine ja korraldamine, transpordi ja matusesaali broneerimine;",
      "section5.2.5":
        "- info erinevate organisatsioonide (perekonnaseisuametite, surnuaedade ja kalmistute) töö kohta, matusetalituste ja rituaaltalituste läbiviimisest.",
      "section5.3.1":
        "- valida matuse aksessuaare (kirst, pärg, tahvel või rist);",
      "section5.3.2": "- valmistada lahkunu ette hüvastijätutseremooniaks;",
      "section5.3.3": "- planeerida matuste marsruut ning tellida surnuauto;",
      "section5.3.4": "- korraldada matusetalitus ja usulised rituaalid;",
      "section5.3.5":
        "- matmispaiga kaunistamine ja lõpliku hüvastijätukoha ettevalmistamine (kuuselaternad ja lilled, varikatus, poodium kirstu jaoks, toolid sugulastele)",
      "section5.3.6": "- viia matused läbi Teie poolt valitud kohas.",
      "section5.3.7":
        "Meie kogenud spetsialistid korrektselt ja operatiivselt võtavad enda peale kõik matusega seotud mured ning korraldavad matusetseremooniat just Teile sobival viisil.",
      "section5.4.1":
        "Hauakivid, mälestusmärgid ja hauapiirded saab tellida otse meie käest. Usume, et saame pakkuda Teile kõige laiemat valikut omatoodet nii graniidist kui ka betoonist.",
      "section5.4.2": "Rohkem infot saab meie kontserni ettevõtte veebilehelt ",
      "section5.4.3":
        "Lisaks sellele saame teid vajadusel aidata haua hooldamisel — puhastamine, koristamine, taimede eemaldamine ja liiva lisamine.",
      "section5.4.4":
        "Tööd võib tellida kas ühekordselt või lepingu järgi jooksvalt,teostatud tööde vajadusel esitame fotoaruande.",
    },
  },
  ru: {
    translation: {
      "navbar.kuidastoimida-button": "Как действовать",
      "navbar.teenused-button": "Услуги и цены",
      "navbar.kontakt-button": "Контакты",
      "section1.1": "похоронное бюро портум",
      "section1.2": "рядом с вами в самые сложные моменты",
      "section1.3": "круглосуточный диспетчер",
      "section1.4":
        "Круглосуточная транспортировка умершего в морг — бесплатно",
      "section3.2.1": "Потеря близких – это всегда боль утраты.",
      "section3.2.2":
        "Большинство людей теряются, когда оказываются перед необходимостью регистрации смерти, оформления документов на погребение, организации похорон. В такой ситуации человеку нужен совет профессионалов.",
      "section3.2.3":
        "Просто позвоните по круглосуточному телефону 59180009 и получите бесплатные информационные услуги по похоронному обслуживанию или сделайте вызов похоронного агента на дом.",
      "section3.2.4": "Мы возьмем на себя каждую мелочь.",
      "section4.1.1": "ЧТО ДЕЛАТЬ, ЕСЛИ УМЕР БЛИЗКИЙ ЧЕЛОВЕК",
      "section4.1.2":
        "Если человек умер дома, вызовите скорую помощь по телефону 112 по всей Эстонии, которая зафиксирует факт смерти и выдаст справку.",
      "section4.1.3":
        "Если человек умер в больнице, справку о смерти выдаст лечащий врач",
      "section4.1.4": "Позвоните на круглосуточный телефон",
      "section5.1.1": "ДИСПЕТЧЕР 24H",
      "section5.1.2": "Позвонив нам, Вы сможете:",
      "section5.1.3": "ОРГАНИЗАЦИЯ ПОХОРОН",
      "section5.1.4": "Поможем Вам сразу:",
      "section5.1.5": "УСЛУГИ НА КЛАДБИЩЕ",
      "section5.1.6": "Поможем и в дальнейшем:",
      "section5.2.1":
        "- узнать, как вести себя в различных ситуациях (первоочередные действия при смерти близкого, порядок получения документов);",
      "section5.2.2": "- заказать перевозку покойного в морг;",
      "section5.2.3":
        "- при необходимости вызвать нашего сотрудника на дом для помощи в оформлении документов на погребение и подборки ритуальной продукции;",
      "section5.2.4":
        "- составить предварительный заказ на похороны, забронировать автотранспорт, ритуальный зал;",
      "section5.2.5":
        "- получить консультацию по работе различных организаций (ЗАГСов, моргов и кладбищ), по проведению панихиды и ритуальных услугах.",
      "section5.3.1":
        "- подобрать ритуальные принадлежности (гроб, венки, оформить табличку или крест);",
      "section5.3.2": "- подготовить усопшего к церемонии прощания;",
      "section5.3.3": "- спланировать маршрут похорон и заказать катафалк;",
      "section5.3.4":
        "- организовать гражданскую панихиду и религиозный обряд;",
      "section5.3.5":
        "- траурно оформить место захоронения и подготовить место последнего прощания (оформление еловым лапником и цветами, навес, подиум для гроба, стулья для родственников);",
      "section5.3.6": "- провести захоронение в выбранном Вами месте.",
      "section5.3.7":
        "Наши опытные специалисты оперативно и максимально корректно для родственников и близких покойного возьмут на себя все заботы по организации и проведению этого траурного мероприятия.",
      "section5.4.1":
        "Изготовление и установку памятников и оградок Вы можете заказать непосредственно у нас. Мы сможем предложить Вам самый широкий выбор изделий собственного производства из гранита и бетона.",
      "section5.4.2":
        "Более подробная информация доступна на сайте предприятия нашей группы ",
      "section5.4.3":
        "Помимо этого при необходимости мы можем помочь Вам и с поддержанием захоронения в порядке — уборка, чистка, удаление растений и досыпка песка.",
      "section5.4.4":
        "Работы могут быть произведены как разово, так и на постоянной основе с оговоренной в договоре периодичностью с предоставлением фотоотчета.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || 'ee', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
