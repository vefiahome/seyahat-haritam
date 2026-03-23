// =============================================
// BU DOSYAYI DÜZENLEYECEKSİN
// Her yeni gezi sonrası buraya il ekle
// =============================================

const DATA = {
  iller: {
"İstanbul": {
  emoji: "🏙",
  yil: "2024",
  drive_klasor: "",
  fotograflar: []
},
    // ÖRNEK FORMAT - silip kendi illerini ekle:
    //
    // "İstanbul": {
    //   emoji: "🏙",                          // İl simgesi (istediğin emoji)
    //   yil: "2024",                           // Gezi yılı
    //   drive_klasor: "https://drive.google.com/drive/folders/KLASOR_ID",  // Drive klasör linki
    //   fotograflar: [
    //     { url: "https://drive.google.com/uc?export=view&id=DOSYA_ID" },
    //     { url: "https://drive.google.com/uc?export=view&id=DOSYA_ID" },
    //   ]
    // },

    // Şu an boş - aşağıdaki kılavuzu oku ve ekle

  }
};

// =============================================
// GOOGLE DRIVE FOTOĞRAF LİNKİ NASIL ALINIR?
// =============================================
// 1. Drive'da fotoğrafa sağ tıkla → "Bağlantıyı al"
// 2. "Link sahibi görüntüleyebilir" yap
// 3. Gelen link şöyle görünür:
//    https://drive.google.com/file/d/DOSYA_ID/view?usp=sharing
// 4. DOSYA_ID kısmını kopyala
// 5. Şu formata çevir:
//    https://drive.google.com/uc?export=view&id=DOSYA_ID
//
// KLASÖR LİNKİ:
// 1. Klasöre sağ tıkla → "Bağlantıyı al"
// 2. "Link sahibi görüntüleyebilir" yap
// 3. Linki olduğu gibi yapıştır
// =============================================
