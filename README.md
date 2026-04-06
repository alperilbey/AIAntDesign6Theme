# Project Name

Bu proje modern web teknolojileri kullanılarak geliştirilmiştir.

## Teknolojiler

* Next.js
* React
* TypeScript
* Ant Design

---

# AI Agent Kullanımı

Bu proje AI destekli geliştirme için yapılandırılmıştır ve `.agents` klasörü altında tanımlı **Skill sistemini** kullanır.

```
.agents/
  skills/
    antd-development/
      SKILL.md
    nextjs-development/
      SKILL.md
```

## Skill Sistemi

Her skill klasörü, AI agent'ın belirli görevleri nasıl yerine getireceğini tanımlayan bir `SKILL.md` dosyası içerir.

Örneğin:

* SEO optimizasyon kuralları
* Next.js mimari standartları
* Kod yazım standartları
* API kullanım kuralları

AI agent'lar bu dosyaları **otomatik olarak tespit eder ve görevleri gerçekleştirirken bu kurallara uyar.**

## AI ile Çalışırken Dikkat Edilmesi Gerekenler

AI agent kullanırken aşağıdaki kurallara uyulmalıdır:

1. `.agents/skills` klasöründeki kurallara uyulmalıdır.
2. Yeni mimari kararlar eklenmeden önce ilgili skill dosyası güncellenmelidir.
3. AI tarafından oluşturulan kodlar mevcut proje standartlarına uygun olmalıdır.

## AI Prompt Önerisi

Bazı durumlarda AI agent'a aşağıdaki yönerge verilmesi önerilir:

```
Follow the rules defined in `.agents/skills` before implementing new features.
```

---

# Proje Yapısı

```
app/
components/
services/
styles/

.agents/
  skills/

public/
```

---

# Katkıda Bulunma

1. Yeni feature için branch oluşturun.
2. Kod standartlarına uyun.
3. Gerekirse ilgili `SKILL.md` dosyasını güncelleyin.
4. Pull request oluşturun.

---

# Lisans

MIT
