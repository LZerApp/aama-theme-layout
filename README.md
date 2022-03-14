<!-- Badge for License -->
<div align="right">

  [![](https://img.shields.io/github/license/LZerApp/aama-theme-layout.svg?style=flat-square)](./LICENSE)

</div>

<!-- title, logo and description -->
<div align="center">
  <img src="https://i.imgur.com/p25hLlD.png" alt="AAMA Theme Layout" height="150px">

# AAMA Theme Layout

🎨 _Layout for the custom WordPress theme for AAMA Taipei. Proudly built with [Tailwind CSS](https://tailwindcss.com/)._

[![](https://img.shields.io/badge/DESIGN-設計原稿-8CA1AF.svg?logo=read-the-docs&style=flat-square)](https://www.figma.com/file/zEDW5rJZIiU7PUGbfRWFTT/)
[![](https://img.shields.io/badge/PREVIEW-頁面預覽-FBD984.svg?logo=code-review&style=flat-square)](https://lzerapp.github.io/aama-theme-layout/)

</div>

## 目錄結構

```
.
├── public
│   ├── _assets
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── scripts/
│   │   └── styles/
│   │   └── index.html
│   ├── co-create         // 共創
│   │   └── index.html
│   ├── co-study          // 共學
│   │   └── index.html
│   ├── community         // 社群
│   │   └── index.html
│   ├── entrepreneur      // 創業家
│   │   └── index.html
│   ├── mentor            // 導師
│   │   └── index.html
│   └── index.html        // 首頁
├── src
│   ├── index.js
│   └── styles.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── ...
```

> 站點以 `public` 作為根目錄，資源目錄為 `/_assets`（其中底線 `_` 並無實質意義，僅為使目錄始終位於最上方，避免與其他頁面目錄混淆）

## 開發說明

開發時會更動的文件應有：

- `/public/` 下的各個 `*.html` 檔案，透過添加適當的 HTML 元素與 CSS 樣式來完成頁面的結構
- `/src/styles.css` 用以增添自定義 CSS 樣式，或是使用 [`@apply`](https://tailwindcss.com/docs/reusing-styles) 提取 Tailwind.css 樣式組件類別
- `/src/index.js` 用以添加自定義 JavaScript 程式碼，實現頁面上無法透過 CSS 實現的交互式動畫或操作
- `tailwind.config.js` 設定 Tailwind 自訂色彩與樣式

## 指令列表

```bash
# 監聽更新
$ npm run watch

# 構建代碼
$ npm run build
```

## 授權許可

Licensed under the MIT License, Copyright © 2021-present LZerApp.
