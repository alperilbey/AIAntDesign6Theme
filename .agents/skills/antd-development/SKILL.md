---
name: Ant Design 6 Development Skill
description: Instructions for building pages and components using Ant Design 6 and the project-specific dynamic theme architecture.
---

# Ant Design 6 & Dynamic Theming Development Standards

Bu skill, projede yeni sayfalar ve bileşenler oluşturulurken yapay zekanın (Antigravity) uyması gereken kuralları belirler.

## 1. Tema Mimarisi ve Renk Kullanımı

Proje, Ant Design 6'nın "Design Token" yapısını SCSS değişkenleri ile birleştiren dinamik bir tema mimarisi kullanmaktadır.

- **KURAL**: Asla hardcoded renk (örn: `#1890ff`, `red`) veya iç içe CSS (inline styles) kullanmayın.
- **KURAL**: Tema renklerini kullanmak için `theme.useToken()` hook'u yerine, **`styles/themes/_param.scss`** dosyasında tanımlı olan renk class'larını kullanın (örn: `.color-primary`, `.bg-secondary`, `.color-success`).
- **KURAL**: Ant Design bileşenleri dışında kalan alanlarda (custom div, section vb.) her zaman projeye özgü bu class'ları tercih edin.

## 2. Typography (Metin ve Başlıklar)

- **KURAL**: Metinler ve başlıklar için **standart HTML taglarını** (`h1`, `h2`, `h3`, `h4`, `h5`, `p`, `span`) kullanın.
- **KURAL**: Ant Design'ın `Typography.Title`, `Typography.Paragraph` ve `Typography.Text` bileşenlerini **sadece zorunlu hallerde** (örn: built-in ellipsis, copyable, editable özellikleri gerektiğinde) kullanın.
- **KURAL**: Eğer Ant Design typography bileşenlerini kullanmanız gerekirse, bunları doğrudan `antd` paketinden değil, **`@/components/theme/antd-ui`** bridge dosyası üzerinden içe aktarın.

```tsx
// ÖNERİLEN KULLANIM (Server Component dostu)
export default function MyPage() {
  return (
    <>
      <h1 className="color-primary">Sayfa Başlığı</h1>
      <p className="text-lg">Bu bir paragraf metnidir.</p>
    </>
  );
}

// ZORUNLU HALLERDE (Bridge üzerinden)
import { Title, Text } from '@/components/theme/antd-ui';
// ... <Title level={2} copyable>Kopyalanabilir Başlık</Title>
```

## 3. Stil ve Layout Standartları

- **Layout**: Sayfa yapısı için `antd`'nin `Layout`, `Row`, `Col` ve `Space` bileşenlerini kullanın.
- **Utility Classes**: `styles/` klasörü altındaki (özellikle `_typography.scss` ve `_param.scss`) tanımlı olan **padding, margin, display ve alignment** class'larını her zaman kontrol edin. Figma tasarımlarına veya ekran görüntülerine sadık kalmak için bu hazır class'ları (`m-12`, `p-24`, `d-flex`, `text-center` vb.) kullanın.
- **Özel Stiller**: Eğer projede tanımlı olmayan yeni CSS/SCSS kuralları yazmanız gerekirse:
    1.  `styles/pages/` altında ilgili sayfa adıyla bir klasör oluşturun.
    2.  Bu klasör içine sayfaya özel `.scss` dosyasını oluşturun.
- **Icons**: İkonlar için `@ant-design/icons` paketini kullanın.

## 4. Gelişmiş Tasarım ve SEO

- **Premium Design**: Sayfa oluştururken "Expert Frontend Developer" bakış açısıyla; modern, premium ve state-of-the-art tasarımlar yapın.
- **SEO**: Her sayfada hiyerarşik başlık yapısına (`h1` -> `h2` -> `h3`) ve semantik HTML kullanımına dikkat edin.
- **Performance**: Sunucu bileşenlerini (Server Components) maksimize etmek için gereksiz `'use client';` kullanımından kaçının. Typography bileşenleri yerine native tag kullanımı bu konuda önceliklidir.

---

**NOT**: Tasarımlarda 6'nın katları olan spacing sistemini (6, 12, 18, 24...) takip edin.
