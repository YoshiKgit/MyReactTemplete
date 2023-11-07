# Reactテンプレート

前提条件
- node.jsインストール
- `creacte-react-app`で構築
- Tailwind CSS 使用
- ESLint





## Reactプロジェクトの作成

``` bash
npx create-react-app my-react-app-templete --template typescript
```


## Tailwind CSS導入
``` bash
npm install -D tailwindcss
npx tailwindcss init
```

設定ファイル`tailwind.config.js`更新
``` js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`index.css`に以下を追記
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

VSCode拡張機能 Tailwind CSS IntelliSenseインストール
Tailwind CSSのサジェストが表示されるようになる

またCSSの適応でVSCode上エラーが出るが、無視で良い。
VSCodeでエラーが出るが嫌な人は言語タイプをTailwind CSS とするか
※上記拡張が必要


## ESLint

TypeScriptの場合でもESLintを使うこと
TSLintは非推奨

``` bash
npm install eslint --save-dev
npx eslint --init
```

tsconfig.jsonの`include`に以下追加
``` json
  "include": [
    "src",
    "./.eslintrc.js",
  ]
```

## prettier

``` bash
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier
```

``` json
extends: [
  'その他の機能',
  'prettier', // 追記
],
```