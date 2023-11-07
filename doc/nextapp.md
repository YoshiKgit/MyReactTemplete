@import style.less

# Next.JS

個人的に使用する際の備忘録

## なぜNext.jsを使うのか

個人的なこんな要望にマッチしていたので
- React公式で推奨しているものを使いたい
- インターネット常にノウハウが多いフレームワークを使いたい
- フルスタックなフレームワークを利用したい
- 導入が簡単なものを使いたい

https://react.dev/learn/start-a-new-react-project


---

## 導入
reate-next-appで行う
※ Node.jsやグローバルへのインストールは割愛

``` bash 
npx create-next-app (プロジェクト名)
```

``` bash
npx create-next-app my-next-app-tmplete
✔ Would you like to use TypeScript with this project? … No / Yes
✔ Would you like to use ESLint with this project? … No / Yes
✔ Would you like to use Tailwind CSS with this project? … No / Yes
✔ Would you like to use `src/` directory with this project? … No / Yes
✔ Use App Router (recommended)? … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
Creating a new Next.js app in /Users/yoshik/git/MyReactTemplete/scr/my-next-app-tmplete.
```
**App Routerを使用します**

起動確認

フレームワークのスタートページが表示されていればOK
``` bash 
npm run dev
```
以下で記載する内容は下記のバージョンで記載したものとなる

```json
  "dependencies": {
    "@types/node": "20.5.0",
    "@types/react": "18.2.20",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "eslint": "8.47.0",
    "eslint-config-next": "13.4.15",
    "next": "13.4.15",
    "postcss": "8.4.27",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.3",
    "typescript": "5.1.6"
  }
```



### 好みにカスタマイズ

#### スタートページの修正
`./app/page.tsx` 初期化
フレームワークの用意した画面が書かれているので不要なものを削除
とりあえずこれくらいにしておく

```　tsx
export default function Home() {
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            
        </div>
    </main>
)
}
```

#### metadata等の修正
`./app/layout.tsx` 初期化

fontを変更Noto_Sans_JPに変更
```tsx
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
    weight: '400',
    display: 'swap',
    preload: false,
  })

```

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}

```

`title`と`description`を修正
``` tsx
export const metadata: Metadata = {
  title: 'My Next App Templete',
  description: 'React開発環境の構築',
}
```

langを`ja`に変更
``` tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```


#### favicon削除
使用したいものがあればそれでいいが、フレームワーク標準のものを表示したままにはしたくないのでとりあえず削除
`./app/favicon.ico` 削除



#### グローバルCSS修正
`globals.css`修正
このままとしておく

背景の変更とかmediaクエリを必要になった際に変更するかも


#### eslint

`create next app`を全てYesで入れたらデフォルトで入っている
`.eslintrc.json`が作られていることを確認する

デフォルトではルールが不足している場合追加を行う

デフォルトルール
- "next/core-web-vitals"

"next/core-web-vitals"は以下を内包している
- "plugin:react/recommended"
- "plugin:react-hooks/recommended"
- "plugin:@next/next/recommended"

必要に応じて以下を追加する
"eslint:recommended",
"plugin:@typescript-eslint/recommended"


npm install --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-config-prettier

## 


trailingSlash: true,




