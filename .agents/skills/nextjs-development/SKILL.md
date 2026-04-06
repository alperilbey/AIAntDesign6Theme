---
name: Next.js 15+ Expert Development Skill
description: Expert standards for Next.js 15+ development, including project architecture, SEO, performance, and Server Components strategy.
---

# Next.js 15+ Expert Development Standards

Bu kural seti, projede yeni sayfalar ve mimari yapılar oluşturulurken en yüksek standartların korunmasını sağlar.

## 1. Proje Klasör Yapısı (Architecture)

Her yeni sayfa ve özellik şu klasör yapısını takip etmelidir:

- **`app/`**: Route tanımları, `layout.tsx`, `page.tsx` ve `loading.tsx` dosyaları buraya eklenir. SADECE routing ve layout sorumluluğu taşır.
- **`components/`**: Yeniden kullanılabilir UI bileşenleri burada tutulur. Sayfa bazlı özel bileşenler de alt klasörlerde (`components/pages/[folder]`) toplanabilir.
- **`services/`**: API çağrıları, veri çekme mantığı (fetch/SWR/React Query) ve iş mantığı (business logic) buradadır. Veri katmanı buraya aittir.
- **`styles/`**: Global `main.scss`, variable'lar ve mixin'ler burada yer alır. CSS/SCSS modülleri de tercih edilebilir.

## 2. Server & Client Component Stratejisi

Next.js 15+ varsayılan olarak Server Components kullanır.

- **KURAL**: Her zaman Server Component ile başlayın. İhtiyaç yoksa `'use client';` eklemeyin.
- **İstisna**: Interaktivite (useState, useEffect), DOM eventleri (onClick) veya Ant Design'ın bazı client-side özelliklerine ihtiyaç varsa `'use client';` kullanın.
- **Optimizasyon**: Client sayfasının tamamını değil, sadece etkileşimli olan KÜÇÜK bileşenleri client component yapmaya çalışın.

## 3. SEO ve Semantic HTML

- **Metadatalar**: Her `page.tsx` için anlamlı `metadata` nesnesini export edin.
- **Heading Hiyerarşisi**: Sayfada mutlaka 1 adet `<h1>` (Title level=1) bulunmalıdır. Hiyerarşiyi (H1 -> H2 -> H3) bozmayın.
- **Semantic Tags**: Div yerine `main`, `section`, `article`, `nav`, `footer` gibi etiketleri kullanın.

```tsx
export const metadata: Metadata = {
  title: "Sayfa Başlığı | Proje Adı",
  description: "Sayfa açıklaması burada yer alır.",
};
```

## 4. Performance & Clean Code Best Practices

- **Image Optimization**: Harici görseller için Antd `Image` veya Next.js `Image` bileşenlerini lazy-loading ile kullanın.
- **TypeScript**: Tüm interface'leri ve tip tanımlarını eksiksiz yapın. `any` kullanımından kaçının.
- **Error Handling**: Beklenmedik durumlar için `error.tsx` ve form doğrulama (validation) mekanizmalarını kurun.
- **Services Rule**: Veriyi doğrudan component içinde `fetch` etmeyin. `@/services` altındaki fonksiyonları kullanarak temiz bir veri akışı sağlayın.

---

**ÖNEMLİ**: Yeni bir sayfa talebinde bulunulduğunda, önce bu mimariyi kurun sonrasında Ant Design v6 skill'ini uygulayarak tasarımı tamamlayın.
