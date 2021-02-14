$(document).ready(function () {
    console.log(" WTF");
    console.log($("h1"));
    var services = ["Parke Döşeme", "Sineklik", "Perpole", "Şömine Yapımı", "Tel Örgü Çit", "Tente Brenda", "Teras Kapatma", "Kartonpiyer",
        "Dekoratif Çita Kaplama", "Kırım Döküm", "Boya Badana", "Cam Balkon", "Fayans Döşeme", "Mutfak Dolabı Yapımı", "Mantolama", "Parke Döşeme",
        "Banyo Tadilat", "Çatı Yapım Tadilat", "Alçı Sıva", "Kara Sıva", "Alçıpan Duver", "Alçıpan Asma Tava", "Peyzaj", "Deck Döşeme", "Mutfak Tezgah Yapımı",
        "Banyo Tezgah Yapımı", "Mermer İşleri", "Doğrama İşleri", "Kalorifer Tesisat", "Su Tesisatı", "Elektrik Tesisatı", "İzolasyon İşleri", "Asfalt",
        "Marangoz", "Mobilya Boyama", "Dış Cephe Boyama", "Duşakabin", "Duvar Kağıdı Döşeme", "Duvar Ustası", "Epoksi Zemin Kaplama", "Dap İşleri", "Civali Dap",
        "Seramik", "Hafriyat", "Ferforje", "Klima", "Havuz Yapımı", "Korkuluk/Küpeşte", "Özel Mobilya Yapımı", "Otomasyon", "Spring Sistem", "Yol Çizgi/Otopark Boyama Uygulaması",
        "Sulama Sistemi", "Sistre Cila Uygulaması", "Demir Kapı", "Alüminyum Kapı", "Alarm Sistemi", "Digfer Sistemi", "Kamera Sistemi", "Oygula Cam Uygulaması", "Vitray Cam Uygulaması", "Bizoteli Ayna", "Düz Ayna"];

    var dataSource = new kendo.data.DataSource({
        data: services
    });
    $("#servicesDropDown").kendoMultiSelect({
        dataSource: services,
        placeholder: "Hizmetinizi seçin..."

    });


    $("#goToFromBtn").click(function () {
        var multiSelectedValues = $("#servicesDropDown").data("kendoMultiSelect").value();
        console.log(multiSelectedValues);
        localStorage.setItem('selectedServices', multiSelectedValues);

        window.selectedServices = multiSelectedValues;
        window.top.location = "http://127.0.0.1:5502/form.html";
    });
});