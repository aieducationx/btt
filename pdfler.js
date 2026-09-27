/* ============================================================================
   Ders PDF'leri

   Her dersin tam metni ayrı bir PDF olarak "pdf" klasöründe durur. Okuma
   adımında sayfanın içinde açılır; öğrenci isterse indirir ya da yeni
   sekmede büyütür.

   klasor:
     · GitHub sitesinde "pdf/" yeterlidir (dosyalar sitenin yanındadır).
     · Mergen tek dosya ya da SCORM sürümünde PDF'ler pakete girmez; oradan
       göstermek isterseniz buraya yayımlanmış sitenin tam adresini yazın:
           klasor: "https://kullaniciadiniz.github.io/btt/pdf/"
       Boş bırakılırsa PDF bölümü hiç görünmez, ders metni eskisi gibi çalışır.
   ========================================================================== */
window.BTT_PDF = {

  klasor: "pdf/",

  // Dosya adları ders kimliğiyle aynıdır; değiştirmeniz gerekmez.
  dersler: {
    "B01": "B01.pdf", "B02": "B02.pdf", "B03": "B03.pdf", "B04": "B04.pdf",
    "B05": "B05.pdf", "B06": "B06.pdf", "B07": "B07.pdf", "B08": "B08.pdf",
    "B09": "B09.pdf", "B10": "B10.pdf", "B11": "B11.pdf", "B12": "B12.pdf",
    "B13": "B13.pdf", "B14": "B14.pdf",
    "M01": "M01.pdf", "M02": "M02.pdf", "M03": "M03.pdf", "M04": "M04.pdf",
    "M05": "M05.pdf", "M06": "M06.pdf", "M07": "M07.pdf", "M08": "M08.pdf"
  }
};
