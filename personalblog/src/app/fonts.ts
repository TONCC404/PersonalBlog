// import { Inter } from "next/font/google"
// import type { NextFontWithVariable } from "next/dist/compiled/@next/font"
// import type { NextFont } from "next/font"

// const ppEditorialNewUltralightItalic: NextFontWithVariable & NextFont = {
//   className: "font-pp-editorial",
//   style: {
//     fontFamily: "PPEditorialNew-UltralightItalic",
//     fontWeight: "200",
//     fontStyle: "italic",
//   },
//   variable: "--font-pp-editorial",
// }

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// })

// export { ppEditorialNewUltralightItalic, inter }

import { Inter } from "next/font/google"

// 使用 Next.js 预设的 Google 字体导入方式
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // 这里使用了 CSS 变量来设置字体
})

// 自定义字体对象
const ppEditorialNewUltralightItalic = {
  className: "font-pp-editorial",
  style: {
    fontFamily: "PPEditorialNew-UltralightItalic",
    fontWeight: "200",
    fontStyle: "italic",
  },
  variable: "--font-pp-editorial", // 这里也是使用 CSS 变量
}

export { ppEditorialNewUltralightItalic, inter }

