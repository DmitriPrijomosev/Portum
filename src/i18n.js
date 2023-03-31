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
