// =============================================
// BU DOSYAYI DÜZENLEYECEKSİN
// Her yeni gezi sonrası buraya il ekle
// =============================================

const DATA = {
  iller: {

    // ── ÖRNEK FORMAT ──────────────────────────
    //
    // "Kayseri": {
    //   emoji: "🏔",
    //   geziler: [
    //     {
    //       tarih: "19-21 Mart 2026",
    //       drive_klasor: "https://drive.google.com/drive/folders/KLASOR_ID",
    //       fotograflar: [
    //         { url: "https://lh3.googleusercontent.com/d/DOSYA_ID" },
    //         { url: "https://lh3.googleusercontent.com/d/DOSYA_ID" },
    //       ]
    //     },
    //     // Aynı ile ikinci gezi:
    //     {
    //       tarih: "5 Ağustos 2024",
    //       drive_klasor: "https://drive.google.com/drive/folders/KLASOR_ID",
    //       fotograflar: [
    //         { url: "https://lh3.googleusercontent.com/d/DOSYA_ID" },
    //       ]
    //     }
    //   ]
    // },
    // ──────────────────────────────────────────

    "İstanbul": {
      emoji: "🏙",
      geziler: [
        {
          tarih: "",
          drive_klasor: "",
          fotograflar: []
        }
      ]
    },

    "Kayseri": {
      emoji: "🏔",
      geziler: [
        {
          tarih: "",
          drive_klasor: "",
          fotograflar: [
            { url: "https://lh3.googleusercontent.com/d/1iIoft21fVly66M7MfSaF_iu8pUn-kgNE" },
          ]
        }
      ]
    },

  }
};

// =============================================
// GOOGLE DRIVE FOTOĞRAF LİNKİ NASIL ALINIR?
// =============================================
// 1. Drive'da fotoğrafa sağ tıkla → "Paylaş"
// 2. "Bağlantıya sahip olan herkes" → "Görüntüleyici" yap
// 3. Gelen link:
//    https://drive.google.com/file/d/DOSYA_ID/view?usp=sharing
// 4. Sadece DOSYA_ID kısmını al
// 5. Şu formata çevir:
//    https://lh3.googleusercontent.com/d/DOSYA_ID
//
// KLASÖR LİNKİ:
// 1. Klasöre sağ tıkla → "Paylaş"
// 2. "Bağlantıya sahip olan herkes" → "Görüntüleyici"
// 3. Linki drive_klasor alanına olduğu gibi yapıştır
// =============================================
