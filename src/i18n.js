import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ee: {
    translation: {
      "navbar.avaleht-button": "Avaleht",
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
      "section6.1": "LÄHEDASE SURM KODUS",
      "section6.2":
        "Kui inimene suri oma kodus, helistage viivitamatult kiirabi kutsumiseks telefonil 112. Kiirabibrigaad fikseerib surma fakti ja väljastab tõendi, mis praegusel ajal võib olla elektroonilises vormis.",
      "section6.3":
        "Pärast surmatunnistuse saamist helistage meile ööpäevaringsele telefonile +372 5918 0009.",
      "section6.4":
        "Helistada meile saate ka kohe - nõustame ja toetame Teid, korraldades kõik vajalikud edasised tegevused.",
      "section6.5": "LÄHEDASE SURM HAIGLAS VÕI HOOLDEKODUS",
      "section6.6":
        "Enamik surmajuhtumeid toimub haiglas või hooldekodudes. Need organisatsioonid ei tegele tavaliselt matustega, kuid nad vormistavad ise surmatõendi ja tagavad surnule esmase hooldusõiguse, kuni lähimad sugulased valivad surnukeha eest hoolitsemiseks matusebüroo.",
      "section6.7":
        "Pärast lähedase surma kohta teabe saamist helistage meie ööpäevaringsele telefonile. Korraldame surnukeha surnukuuri toimetamise ja arutame läbi kõik vajalikud edasised sammud väärikateks matusteks.",
      "section7.1.1": "TEENUSED JA HINNAD",
      "section7.2.1": "MATUSTE KORRALDAMINE",
      "section7.2.2":
        "Meie abiga saate valida kõik matusteks vajalikud rituaalsed tarbed, planeerida ja läbi viia matused (tsiviilmatuseteenistus või kirikutseremoonia), kaunistada matmispaika. Meie kogenud töötajad võttavad viivitamatult lahkunu sugulaste ja sõprade leinaürituse korraldamise ja läbiviimise mured enda peale.",
      "section7.2.3":
        "Iga matus, nagu iga lahkunud lähedane, on individuaalne. Seetõttu saate valida mõne valmis teenuspaketi või valida selle, mida vajate. Kõiki üksikasju saame arutada teile sobival ajal.",
      "section7.3": "PAKETI HINNAD",
      "section7.3.1": "INDIVIDUAALNE",
      "section7.3.2": "alates 490 eurost",
      "section7.3.3":
        "Kõik teenused on läbiräägitavad. Tee ise endale sobiv pakett",
      "section7.4.1": "RATSIONAALNE",
      "section7.4.2": "alates 740 eurost",
      "section7.4.3": "Tekstiiliga kaetud kirst",
      "section7.4.4": "Siidist padi",
      "section7.4.5": "Siidist katte",
      "section7.4.6": "Kirstu käepidemed",
      "section7.4.7": "Lahkunu säilitamine ja korrastamine surnukuuris",
      "section7.4.8": "Matuseauto",
      "section7.4.9": "Matuste korraldamine",
      "section7.5.1": "PREMIUM",
      "section7.5.2": "alates 1100 eurost",
      "section7.5.3": "Kandjad",
      "section7.5.4": "Küünlad, pärjad",
      "section7.5.5": "Ajutine hauatahvel",
      "section7.5.6": "Matuseteenistus",
      "section8.1": "ÜKSIKUTE TEENUSTE HINNAD",
      "section8.2": "TEENUSE NIMETUS",
      "section8.3": "HIND",
      "section8.4":
        "Surnute ööpäevaringne transport surnukuuri meie klientidele",
      "section8.5": "tasuta",
      "section8.6": "Lahkunu säilitamine ja korrastamine surnukuuris",
      "section8.7": "Surnuauto",
      "section8.8": "60€ / tund",
      "section8.9": "Matusekõneleja",
      "section8.10": "alates 120€",
      "section8.11":
        "Preestriteenistused matusetalitustel kabelis või kalmistul",
      "section8.12": "kokkuleppel",
      "section8.13": "Lai kirstude valik",
      "section8.14": "alates 200€ kuni 3 000€",
      "section8.15": "Tuhastamise urnid",
      "section8.16": "alates 55€",
      "section8.17": "Surnu toimetamine krematooriumisse tuhastamise päeval",
      "section8.18": "Kirstukaanekimp, lõikelilled",
      "section8.19": "alates 120€",
      "section8.20": "Bussivedu 14-18 inimesele",
      "section8.21": "60€ / tund",
      "section8.22": "Pärjad, lõikelilled, oksad, kuused, rohelus",
      "section8.23": "alates 60€",
      "section8.24": "Peielaua koha broneerimine",
      "section8.25": "kokkuleppel",
      "section8.26": "Kokkulepitud muusika",
      "section8.27": "alates 100€",
      "section8.28":
        "Matuseagendi väljakutse koju matuste korraldamise nõustamiseks",
      "section8.29": "Ajutine plastikhauatahvel",
      "section8.30": "Lahkunu transport välismaalt",
      "section9.1": "Matusebüroo PORTUM",
      "section9.2": "Liivametsa Maja kontor",
      "section9.3": "Aadress: ",
      "section9.4": "Telefon: ",
      "section9.5": "E-R ",
      "section9.6": "L, P ",
      "section9.7": "Lahkunu transport 24H",
      "section9.8": "E-post: ",
      "section10.1": "ÖÖPÄEVARINGNE DISPETŠER",
      "section10.2": "LAHKUNU TRANSPORT SURNUKUURI",
      "section10.3": "Kontaktandmed",
      "section10.4": "Matusebüroo portum",
      "section10.5": "Lahtiolekuajad",
      "section10.6": "E - R 9.30-18.00",
      "section10.7": "L - P 9.30-16.00",
    },
  },
  ru: {
    translation: {
      "navbar.avaleht-button": "Главная",
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
        "Большинство людей теряются, когда оказываются перед необходимостью регистрации смерти, оформления документов на погребение, организацией похорон. В такой ситуации человеку нужен совет профессионалов.",
      "section3.2.3":
        "Просто позвоните по круглосуточному телефону 59180009 и получите бесплатные информационные услуги по похоронному обслуживанию или сделайте вызов похоронного агента на дом.",
      "section3.2.4": "Мы возьмем на себя каждую мелочь.",
      "section4.1.1": "ЧТО ДЕЛАТЬ, ЕСЛИ УМЕР БЛИЗКИЙ ЧЕЛОВЕК",
      "section4.1.2":
        "Если человек умер дома, вызовите скорую помощь по телефону 112 по всей Эстонии, которая зафиксирует факт смерти и выдаст справку",
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
        "- получить консультацию по работе различных организаций (ЗАГСов, моргов и кладбищ), по проведению панихиды и ритуальных услуг.",
      "section5.3.1":
        "- подобрать ритуальные принадлежности (гроб, венки, оформить табличку или крест);",
      "section5.3.2": "- подготовить усопшего к церемонии прощания;",
      "section5.3.3": "- спланировать маршрут похорон и заказать катафалк;",
      "section5.3.4":
        "- организовать гражданскую панихиду и религиозный обряд;",
      "section5.3.5":
        "- траурно оформить место захоронения и подготовить место последнего прощания (оформление еловым лапником и цветами, навес, подиум для гроба, стулья для родственников);",
      "section5.3.6": "- провести захоронение в выбранном Вами месте;",
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
      "section6.1": "ЕСЛИ БЛИЗКИЙ ЧЕЛОВЕК УМЕР ДОМА",
      "section6.2":
        "Если человек умер в своем доме, незамедлительно позвоните по телефону 112, чтобы вызвать скорую помощь. Бригада скорой помощи зафиксирует факт смерти и выдаст справку, которая в наше время может быть в электронном формате.",
      "section6.3":
        "После получения свидетельства о смерти позвоните нам на круглосуточный номер 372 5918 0009.",
      "section6.4":
        "Позвонить нам Вы можете и сразу - мы проконсультируем и подержим Вас, организовав все необходимые дальнейшие действия.",
      "section6.5": "СМЕРТЬ БЛИЗКОГО В БОЛЬНИЦЕ ИЛИ ДОМЕ ПО УХОДУ",
      "section6.6":
        "Большинство смертей происходит в больнице или домах по уходу. Эти организации обычно не занимаются похоронами, однако они самостоятельно оформят справку о смерти и обеспечат первичную опеку над умершим до тех пор, пока ближайшие родственники не выберут похоронное бюро, которое займется телом.",
      "section6.7":
        "После получения информации о смерти близкого, позвоните на наш круглосуточный телефон. Мы организуем доставку тела в морг и обсудим все необходимые дальнейшие шаги для проведения достойных похорон.",
      "section7.1.1": "УСЛУГИ И ЦЕНЫ",
      "section7.2.1": "ОРГАНИЗАЦИЯ ПОХОРОН",
      "section7.2.2":
        "С нашей помощью Вы сможете подобрать все необходимые ритуальные пренадлежности, спланировать и провести похороны (гражданская панихида или церковный обряд), а также траурно оформить место захоронения. Наши опытные специалисты оперативно и максимально корректно для родственников и близких покойного возьмут на себя все заботы по организации и проведению этого траурного мероприятия.",
      "section7.2.3":
        "Каждые похороны, как и каждый ушедший близкий - индивидуальны. Поэтому Вы можете выбрать один из готовых пакетов услуг или выбрать то, что неободимо именно Вам. Все детали мы можем обсудить в любое удобное для Вас время.",
      "section7.3": "ЦЕНЫ НА ПАКЕТЫ",
      "section7.3.1": "ИНДИВИДУАЛЬНЫЙ",
      "section7.3.2": "от 490 евро",
      "section7.3.3":
        "Все услуги по договорённости. Составьте собственный, подходящий именно Вам пакет",
      "section7.4.1": "РАЦИОНАЛЬНЫЙ",
      "section7.4.2": "от 740 евро",
      "section7.4.3": "Гроб обшитый тканью, драпировка",
      "section7.4.4": "Подушка шёлковая",
      "section7.4.5": "Покрывало шёлковое",
      "section7.4.6": "Ручки на гроб",
      "section7.4.7": "Хранение и туалет усопшего в морге",
      "section7.4.8": "Катафалк",
      "section7.4.9": "Организация похорон",
      "section7.5.1": "ПРЕМИУМ",
      "section7.5.2": "от 1100 евро",
      "section7.5.3": "Носильщики",
      "section7.5.4": "Свечи, венки",
      "section7.5.5": "Временная пластиковая табличка на захоронение",
      "section7.5.6": "Отпевание",
      "section8.1": "ЦЕНЫ НА ОТДЕЛЬНЫЕ УСЛУГИ",
      "section8.2": "НАИМЕНОВАНИЕ УСЛУГИ",
      "section8.3": "ЦЕНА",
      "section8.4":
        "Круглосуточная транспортировка умершего в морг для клиeнтов",
      "section8.5": "бесплатно",
      "section8.6": "Хранение в морге и туалет покойного",
      "section8.7": "Катафалк",
      "section8.8": "60€ / час",
      "section8.9": "Услуги чтеца",
      "section8.10": "от 120€",
      "section8.11": "Услуги батюшки для отпевания в часовне или на кладбище",
      "section8.12": "по договоренности",
      "section8.13": "Широкий ассортимент гробов",
      "section8.14": "от 200€ до 3 000€",
      "section8.15": "Урны для кремации",
      "section8.16": "от 55€",
      "section8.17": "Доставка усопшего в крематорий в день кремации",
      "section8.18": "Композиция на крышку гроба, отрезные цветы",
      "section8.19": "от 120€",
      "section8.20":
        "Возможность заказа автобуса для перевозки людей, 14-18 человек",
      "section8.21": "60€ / час",
      "section8.22": "Венки, отрезные цветы, ветки, ели, зелень",
      "section8.23": "от 60€",
      "section8.24": "Бронирование места проведения поминок",
      "section8.25": "по договоренности",
      "section8.26": "Музыка по договорённости",
      "section8.27": "от 100€",
      "section8.28":
        "Выезд ритуального агента на дом для консультации по организации похорон",
      "section8.29": "Временная пластиковая табличка на захоронение",
      "section8.30": "Транспортировка усопшего из-за границы",
      "section9.1": "Похоронное бюро PORTUM",
      "section9.2": "Здание Liivametsa Maja",
      "section9.3": "Адрес: ",
      "section9.4": "Телефон: ",
      "section9.5": "Пн-Пт ",
      "section9.6": "Сб, Вс ",
      "section9.7": "Круглосуточная транспортировка усопших",
      "section9.8": "Эл.почта: ",
      "section10.1": "Круглосуточный диспетчер",
      "section10.2": "Транспортировка умершего в морг",
      "section10.3": "Контактные данные",
      "section10.4": "Похоронное бюро Portum",
      "section10.5": "Часы работы",
      "section10.6": "Пн - Пт 9.30-18.00",
      "section10.7": "Сб - Вс 9.30-16.00",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("Portum_language") || 'ee', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
