/* ============================================================================
   Ders videoları

   NotebookLM ile ürettiğiniz videoları buraya bağlarsınız. İki yol var:

   1) YEREL DOSYA — videoyu sitedeki "video" klasörüne yükleyin ve buraya
      yalnızca dosya adını yazın:
          "B01": "B01_ders_videosu.mp4",

      GitHub'da tarayıcıyla yüklenebilecek en büyük dosya 25 MB'dir
      (docs.github.com). Daha büyük videoları önce sıkıştırın ya da
      ikinci yolu kullanın.

   2) YOUTUBE — videoyu YouTube'a yükleyip (listelenmemiş de olabilir)
      adresini olduğu gibi yapıştırın:
          "B01": "https://www.youtube.com/watch?v=XXXXXXXXXXX",

      Platform bunu otomatik olarak youtube-nocookie.com üzerinden gömer.
      Not: YouTube kullanırsanız sayfa artık "hiçbir yere veri gitmez"
      olmaktan çıkar; izleyicinin tarayıcısı YouTube'a bağlanır.

   Boş bırakılan dersler eskisi gibi davranır: video yerine "henüz
   eklenmedi" kutusu ve elle işaretleme düğmesi görünür.

   Video sonuna kadar izlenince "İzle" adımı kendiliğinden tamamlanır.
   ========================================================================== */
window.BTT_VIDEO = {

  // Yerel dosyaların bulunduğu klasör. Sonundaki eğik çizgiyi silmeyin.
  klasor: "video/",

  dersler: {
    // ---- 1 · Bilgi, Teknoloji ve Toplum ----
    "B01": "B01.mp4",                   // 1.1 · Teknoloji Toplumu Değiştirir mi?
    "B02": "",                   // 1.2 · İlk Uygarlıklarda Bilim ve Teknoloji
    "B03": "",                   // 1.3 · Antik Yunan, İslam Dünyası ve Bilgi Aktarımı

    // ---- 2 · Bilimsel Devrim ve Yeni Dünya Görüşü ----
    "B04": "",                   // 2.1 · Rönesans ve Bilimsel Devrim
    "B05": "",                   // 2.2 · Kopernik, Galileo, Newton ve Modern Bilim

    // ---- 3 · Sanayi, Enerji, Ulaşım ----
    "B06": "",                   // 3.1 · Sanayi Devrimi
    "B07": "",                   // 3.2 · Elektrik, Kentleşme ve Modern Yaşam
    "B08": "",                   // 3.3 · Ulaşım ve İletişim Devrimleri

    // ---- 4 · Bilim, Savaş ve Sorumluluk ----
    "B09": "",                   // 4.1 · Darwin, Pasteur, Curie: Bilim ve Modern Toplum
    "B10": "",                   // 4.2 · 20. Yüzyıl: Savaş, Atom ve Big Science

    // ---- 5 · Dijital Toplum, Yapay Zekâ ve Gelecek ----
    "B11": "",                   // 5.1 · Bilgisayar ve İnternet Devrimi
    "B12": "",                   // 5.2 · Sosyal Medya, Algoritmalar ve Gözetim
    "B13": "",                   // 5.3 · Yapay Zekâ ve Toplum
    "B14": "",                   // 5.4 · Geleceğin Bilim ve Teknolojisi

    // ---- 6 · AI-CompEU · Avrupa Birliği Katmanı ----
    "M01": "M01.mp4",                   // 6.1 · AB Nedir? Tarih, Kurumlar ve Değerler
    "M02": "",                   // 6.2 · AB'nin Bilim ve Teknoloji Politikası
    "M03": "",                   // 6.3 · Avrupa Birliği Yapay Zekâ Yasası
    "M04": "",                   // 6.4 · Kişisel Veri Kime Aittir?
    "M05": "",                   // 6.5 · İyi Materyal Kimin Ölçütüne Göre İyidir?
    "M06": "",                   // 6.6 · Bir Kıta Kendi Enerjisini Yeniden Kurabilir …
    "M07": "",                   // 6.7 · Platformların Anayasası
    "M08": "",                   // 6.8 · Yeniliği Kim Yönlendirir?
  },
};
