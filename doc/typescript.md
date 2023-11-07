文法、構文的なことは書かない

`tsconfig.json` `package.json`のスキーマについて
インターネットに繋がらない環境やプロキシで制限されている環境などにおいてVSCode上スキーマを読み込めないとエラーが発生することがある。
TypeScriptプロジェクトのビルドなどに問題は発生しないが、外部のnpmパッケージをダウンロードする必要がある場合問題が発生する場合がある。

そんな場合どっちもできないのでは。。。という感じがするが。

対処法
`package.json`
"$schema":"./package-json-schema.json",

`tsconfig.json` 
"$schema": "./tsconfig-schema.json",

デフォルトの参照先
https://json.schemastore.org/package
https://json.schemastore.org/tsconfig


