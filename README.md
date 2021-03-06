<!-- Badge for License -->
<div align="right">

  [![](https://img.shields.io/github/license/LZerApp/aama-theme-layout.svg?style=flat-square)](./LICENSE)

</div>

<!-- title, logo and description -->
<div align="center">
  <img src="https://i.imgur.com/p25hLlD.png" alt="AAMA Theme Layout" height="150px">

# AAMA Theme Layout

๐จ _Layout for the custom WordPress theme for AAMA Taipei. Proudly built with [Tailwind CSS](https://tailwindcss.com/)._

[![](https://img.shields.io/badge/DESIGN-่จญ่จๅ็จฟ-8CA1AF.svg?logo=read-the-docs&style=flat-square)](https://www.figma.com/file/zEDW5rJZIiU7PUGbfRWFTT/)
[![](https://img.shields.io/badge/PREVIEW-้ ้ข้ ่ฆฝ-FBD984.svg?logo=code-review&style=flat-square)](https://lzerapp.github.io/aama-theme-layout/)

</div>

## ็ฎ้็ตๆง

```
.
โโโ public
โ   โโโ _assets
โ   โ   โโโ fonts/
โ   โ   โโโ images/
โ   โ   โโโ scripts/
โ   โ   โโโ styles/
โ   โ   โโโ index.html
โ   โโโ co-create         // ๅฑๅต
โ   โ   โโโ index.html
โ   โโโ co-study          // ๅฑๅญธ
โ   โ   โโโ index.html
โ   โโโ community         // ็คพ็พค
โ   โ   โโโ index.html
โ   โโโ entrepreneur      // ๅตๆฅญๅฎถ
โ   โ   โโโ index.html
โ   โโโ mentor            // ๅฐๅธซ
โ   โ   โโโ index.html
โ   โโโ index.html        // ้ฆ้ 
โโโ src
โ   โโโ index.js
โ   โโโ styles.css
โโโ package.json
โโโ postcss.config.js
โโโ tailwind.config.js
โโโ ...
```

> ็ซ้ปไปฅ `public` ไฝ็บๆ น็ฎ้๏ผ่ณๆบ็ฎ้็บ `/_assets`๏ผๅถไธญๅบ็ท `_` ไธฆ็กๅฏฆ่ณชๆ็พฉ๏ผๅ็บไฝฟ็ฎ้ๅง็ตไฝๆผๆไธๆน๏ผ้ฟๅ่ๅถไป้ ้ข็ฎ้ๆททๆท๏ผ

## ้็ผ่ชชๆ

้็ผๆๆๆดๅ็ๆไปถๆๆ๏ผ

- `/public/` ไธ็ๅๅ `*.html` ๆชๆก๏ผ้้ๆทปๅ ้ฉ็ถ็ HTML ๅ็ด ่ CSS ๆจฃๅผไพๅฎๆ้ ้ข็็ตๆง
- `/src/styles.css` ็จไปฅๅขๆทป่ชๅฎ็พฉ CSS ๆจฃๅผ๏ผๆๆฏไฝฟ็จ [`@apply`](https://tailwindcss.com/docs/reusing-styles) ๆๅ Tailwind.css ๆจฃๅผ็ตไปถ้กๅฅ
- `/src/index.js` ็จไปฅๆทปๅ ่ชๅฎ็พฉ JavaScript ็จๅผ็ขผ๏ผๅฏฆ็พ้ ้ขไธ็กๆณ้้ CSS ๅฏฆ็พ็ไบคไบๅผๅ็ซๆๆไฝ
- `tailwind.config.js` ่จญๅฎ Tailwind ่ช่จ่ฒๅฝฉ่ๆจฃๅผ

## ๆไปคๅ่กจ

```bash
# ็ฃ่ฝๆดๆฐ
$ npm run watch

# ๆงๅปบไปฃ็ขผ
$ npm run build
```

## ๆๆฌ่จฑๅฏ

Licensed under the MIT License, Copyright ยฉ 2021-present LZerApp.
