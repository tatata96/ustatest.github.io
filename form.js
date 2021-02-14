

$("#logo").click(function () {
    window.history.back();
});

////// ŞEHİR -İLÇE - SEMT SEÇİMLERİ /////////////////////////////////////////////////7
var citiesDD = $("#citiesDropdown").kendoDropDownList({
    height: 310,
    dataSource: ["İstanbul"]
}).data("kendoDropDownList");

const ilceler = [{ ilce: "Adalar", semtler: ["Burgaz Adası", "Büyükada", " Heybeliada", "Kınalıada", "Sedef Adası", "Sivriada", "Tavşan Adası", "Yassıada"] }, { ilce: "Arnavutköy", semtler: ["Bolluca", "Hadımköy(Boyalık)", " Haraççı", "İmrahor", "Köyler", "Taşoluk", "Arnavutköy", "Boğazköy"] }, { ilce: "Ataşehir", semtler: ["Ataşehir", "Barbaros", "Ferhatpaşa", " İçerenköy", "Kayışdağı", "Küçükbakkalköy", "Mustafa Kemal", "Namık Kemal", "Örnek", "Yeni Çamlıca", "Yeni Sahra"] }, { ilce: "Avcılar", semtler: ["Ambarlı", "Avcılar", " Firuzköy", "Gümüşpala", "Yeşilkent"] },
{ ilce: "Bağcılar", semtler: ["Bağcılar", "Barbaros/Yeşilbağ", "DemirKapı", "Güneşli", "Hürriyet", "Kemalpaşa", "Kirazlı", "Mahmutbey"] },
{
    ilce: "Bahçelievler", semtler: ["Cumhuriyet", "Çobançeşme", "Fevzi Çakmak", "Hürriyet", "Kocasinan", "Merkes", "Siyavuşpaşa", "Soğanlı", "Şirinevler", "Yenibosna", "Zafer"]
}, { ilce: "Bakırköy", semtler: ["Ataköy", "Cevizlik", "Florya", "Kartaltepe", "Yeşilköy", "Zeytinlik", "Zuhuratbaba",] }, { ilce: "Başakşehir", semtler: ["Başakşehir", "İkitelli", "İkitelli Org. San.", "Köyler"] }, { ilce: "Bayrampaşa", semtler: ["Altıntepsi", "Muratpaşa", "Numunebağ", "Yıldırım"] },
{ ilce: "Beşiktaş", semtler: ["Abbasağa", "Akatlar", "Arnavutköy", "Balmumcu", "Bebek", "Etiler", "Gayrettepe", "Levazım", "Levent", "Maçka", "Ortaköy", "Türkali", "Valideçeşme", "Zincirlikuyu"] },
{ ilce: "Beykoz", semtler: ["Anadolu Hisarı", "Beykoz", "Çavuşbaşı", "Çubuklu", "Göksu", "Köyler", "Paşabahçe", "Tokatköy"] }, { ilce: "Beylikdüzü", semtler: ["Gürpınar", "Kavaklı", "Merkez", "Yakuplu"] },

{
    ilce: "Beyoğlu", semtler: ["Arapcami", "Cihangir", "Dolapdere", "Galata", "Galatasaray", "Halıcıoğlu", "Hasköy", "İstiklal", "Kabataş", "Karaköy", "Kasımpaşa", "Kemankeş", "Pürtelaş",
        , "Şişhane", "Taksim", "Tarlabaşı", "Tepebaşı", "Tophane", "Yenişehir", "Büyükçekmece"]
}, { ilce: "Büyükçekmece", semtler: ["Celaliye(Kamiloba)", "Kumburgaz", "Merkez", "Mİmarsinan", "Tepecik"] }, { ilce: "Çatalca", semtler: ["Binkılıç", "Çatalca", "Çiftlikköy", "Karacaköy", "Köyler", "Merkez"] },
{ ilce: "Çekmeköy", semtler: ["Alemdağ(Alemdar)", "Çekmeköy", "Köyler", "Ömerli", "Taşdelen"] }, { ilce: "Esenler", semtler: ["Birlik", "Esenler", "Karabayır", "Sanayi"] }, { ilce: "Esenyurt", semtler: ["Esenyurt", "Haramidere", "Kıraç"] }, { ilce: "Eyüpsultan", semtler: ["Alibeyköy", "Çırcır", "Eyüpsultan", "Göktürk", "Kemerburgaz", "Köyler", "Rami", "Yeşilpınar"] }
    , { ilce: "Fatih", semtler: ["Akdeniz", "Aksaray", "Beyazıt", "Çapa", "Eminönü(Mısır Çarşısı)", "Fatih", "Fener", "Fevzipaşa", "Fındıkzade", "Haseki", "Kocamustafapaşa", "Kumkapı", "Küçükmustafapaşa", "Laleli", "Mahmutpaşa", "Mevlanakapı", "Samatya", "Sirkeci/Cağaloğlu", "Sultanahmet", "Şehremini", "Tahtakale", "Topkapı/Cevizlibağ", "Unkapanı", "Vefa", "Yedikule"] }, { ilce: "Gaziosmanpaşa", semtler: ["Fevzçakmak", "Gaziosmanpaşa", "Kazımkarabekir", "Küçükköy", "Yıldıztabya"] }, { ilce: "Güngören", semtler: ["Abdurrahman Nafiz Gürman", "Akıncılar", "Güngören", "Haznedar", "Merter", "Sanayi", "Tozkoparan"] },
{ ilce: "Kadıköy", semtler: ["19 Mayıs", "Acıbadem", "Altıyol", "Bahariye", "Bostancı", "Caddebostan", "Caferağa", "Çiftehavuzlar", "Eğitim", "Erenköy", "Fenerbahçe", "Feneryolu", "Fikirtepe", "Göztepe", "Halitağa", "Hasanpaşa", "Kalamış", "Kazasker", "Kızıltoprak", "Koşuyolu", "Kozyatağı", "Kuyubaşı", "Merdivenköy", "Moda", "Osmanağa", "Rasimpaşa", "Rıhtım", "Sahrayıcedit", "Selamiçeşme", "Söğütlüçeşme", "Suadiye", "Şaşkınbakkal", "Şenesenevler", "Tüccarbaşı", "Ziverbey"] },
{ ilce: "Kağıthane", semtler: ["Çağlayan", "Çeliktepe", "Gültepe", "Hamidiye", "Kağıthane", "Seyrantepe", "Şirintepe"] }, { ilce: "Kartal", semtler: ["Dragos", "Esentepe", "Orhantepe", "Rahmanlar(Atalar)", "Soğanlık", "Topselvi", "Uğurmumcu", "Yakacık"] }, { ilce: "Küçükçekmece", semtler: ["Cennet", "Halkalı", "Merkez", "Parseller", "Sefaköy", "Yarımburgaz"] }, { ilce: "Maltepe", semtler: ["Adatepe", "Aydınevler", "Cevizli", "Dragos", "Esenkent", "Ferhatpaşa", "Feyzullah", "Gülsuyu", "İdealtepe", "Küçükyalı", "Yalı", "Zümrütevler"] },
{ ilce: "Pendik", semtler: ["Bahçelievler", "Çamçeşme", "Çarşı", "Dolayoba", "Esenyalı", "Köyler", "Şeyhli", "Yayalar", "Yenişehir"] }, { ilce: "Sancaktepe", semtler: ["Köyler", "Samandıra", "Sarıgazi", "Yenidoğan"] }, { ilce: "Sarıyer", semtler: ["Bahçeköy", "Büyükdere", "Emirgan", "İstinye", "Köyler", "Merkez", "Rumeli Hisarı", "Sarıyer", "Tarabya", "Yeniköy"] }, { ilce: "Şile", semtler: ["Ağva", "Köyler", "Şile"] },
{ ilce: "Silivri", semtler: ["Büyükçavuşlu", "Çanta", "Değirmenköy", "Gümüşyaka", "Kavaklı", "Köyler", "Ortaköy", "Selimpaşa", "Silivri"] }, { ilce: "Şişli", semtler: ["19 Mayıs", " Bozkurt", "Cumhuriyet", "Duatepe", "Elmadağ", "Esentepe", "Feriköy", "Fulya", "Gülbahar", "Halide Edip", "Harbiye", "Kurtuluş", "Mecidiyeköy", "Meşrutiyet", "Nişantaşı", "Okmeydanı", "Osmanbey", "Şişli", "Teşvikiye", "Topağacı", "Zincirlikuyu"] }, { ilce: "Sultanbeyli", semtler: ["Mehmetakif", "Mimarsinan", "Necipfazıl", "Turgutreis"] }, { ilce: "Sultangazi", semtler: ["Cebeci", "Merkez", "Sultançiftliği", "Yayla", "Zübeydehanım"] }, { ilce: "Tuzla", semtler: ["Akfırat", "Aydınlı", "İçmeler", "İstasyon", "Merkez OSB.", "Mimarsinan", "Orhanlı", "Postane", "Tersaneler"] },
{ ilce: "Ümraniye", semtler: ["Aşağıdudullu", "Atakent", "Atatürk", "Çakmak", "Dudullu OSB.", "Esenevler", "Esenşehir", "Ihlamnurkuyu", "Kazımkarabekir", "Merkez", "Namık Kemal", "Şerifali", "Tepeüstü", "Yukarıdudullu"] }, { ilce: "Üsküdar", semtler: ["Acıbadem", "Altunizade", "Bağlarbaşı", "Bahçelievler", "Beylerbeyi", "Bulgurlu", "Çamlıca", "Çengelköy", "Doğancılar", "Ferah", "Fıstıkağacı", "Kandilli", "Kuzguncuk", "Libadiye", "Merkez", "Nakkaştepe", "Selimiye", "Ünalan"] }, { ilce: "Zeytinburnu", semtler: ["Beştelsiz", "Çırpıcı", "Maltepe", "Merkezefendi"] }];

var ilcelerDD = $("#ilcelerDropdown").kendoDropDownList({
    dataTextField: "ilce",
    dataValueField: "ilce",
    change: onIlceChange,

    height: 310,

    dataSource: ilceler
}).data("kendoDropDownList");
var semtlerDD = $("#semtlerDropdown").kendoDropDownList({

    height: 310,

    //dataSource: ["A", "B", "C"]
}).data("kendoDropDownList");

function onIlceChange() {
    var value = $("#ilcelerDropdown").val();

    var selectedIlce = ilceler.filter(element => element.ilce == value)[0];
    console.log(selectedIlce);
    console.log(ilceler);

    console.log(selectedIlce.semtler);

    var dataSource = new kendo.data.DataSource({
        data: selectedIlce.semtler
    });
    var dropdownlist = $("#semtlerDropdown").data("kendoDropDownList");
    dropdownlist.setDataSource(selectedIlce.semtler);


}
////// ŞEHİR -İLÇE - SEMT SEÇİMLERİ BİTTİ /////////////////////////////////////////////////7


//console.log(window.selectedServices);
console.log(localStorage.getItem('selectedServices'));
var selectedServicesList = localStorage.getItem('selectedServices');
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
    authDomain: "test-form-d3492.firebaseapp.com",
    databaseURL: "https://test-form-d3492.firebaseio.com",
    projectId: "test-form-d3492",
    storageBucket: "test-form-d3492.appspot.com",
    messagingSenderId: "222398070278",
    appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let lastname = document.querySelector(".lname").value;
    let phone = document.querySelector(".phone").value;
    let email = document.querySelector(".email").value;
    let sehir = ($("#citiesDropdown").data("kendoDropDownList").value());
    let ilce = ($("#ilcelerDropdown").data("kendoDropDownList").value());
    let semt = ($("#semtlerDropdown").data("kendoDropDownList").value());
    let adres = document.querySelector(".adres").value;
    let not = document.querySelector("#not").value;
    let selectedServices = selectedServicesList;
    //foto ekleme


    //saveContactInfo(name, email, message);

    document.querySelector("form").reset();
    sendEmail(name, lastname, phone, email, sehir, ilce, semt, adres, not, selectedServices);
}



// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}

function sendEmail(name, lastname, phone, email, sehir, ilce, semt, adres, not, selectedServices) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tamarakozok@gmail.com",
        Password: "bfyqiwuajjqauqqv",
        To: "tamarakozok@gmail.com",
        From: "tamarakozok@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `<span style="font-weight:bold">İsim: </span> ${name} <br/> <span style="font-weight:bold">Soyisim: </span> ${lastname} <br/>  <span style="font-weight:bold">Soyisim: </span>Telefon: ${phone}  <br/> <span style="font-weight:bold">Email: </span> : ${email}
          <br/> <span style="font-weight:bold">Şehir: </span>  ${sehir}  <br/> <span style="font-weight:bold">İlçe: </span> ${ilce}  <br/> <span style="font-weight:bold">Semt: </span> ${semt} <br/> <span style="font-weight:bold">Adres: </span> ${adres} <br/> <span style="font-weight:bold">Not: </span> ${not} <br/><span style="font-weight:bold"> Seçilen Hizmetler: </span> ${selectedServices}`,

    }).then((name) => {
        alert("FORMUNUZ GÖNDERİLDİ! 24 saat içinde sizinle iletişime geçeceğiz.");
        window.history.back();

    });
}
