class: middle, center

<span class="">About <span style="font-size: 40px; background-color: #eee; padding-left: 5px; padding-right: 5px; border-radius: 12px;">npm:</span> support of Deno</span>

<img src="./assets/npm-roadsign.jpg" style="border-radius: 45px; box-shadow: 0 0 10px rgba(0,0,0,0.3);" align="center" width="400" />

<small>Yoshiya Hinosawa @ Deno</small>

---

アジェンダ

- Deno の復習
- npm 互換性の話
  - タイムライン
  - 概要 / 使い方
  - モチベーション
  - npm 互換性で変わらないこと

---
class: middle center inverse

Deno の復習

---
class: middle center inverse

Deno とは

---

Deno とは
- 2018年から開発が始まってる新しい JS runtime
- オープンソースプロジェクト
- Node.js での反省を生かして Node.js の作者でもあるライアン・ダールが開発を始める

<img src="assets/jsconfeu2018-2.jpg" style="margin-left: -100px" width="1000" />

---
Deno の特徴1

# 整理されたランタイム

- Web 互換 API (fetch, Web Streams etc)
- 整理された Module システム
  - CommonJS なし、ES Module のみ
- URL 指定でモジュールをインポートする
  - ブラウザと同じ挙動
  - npm install / node_modules 的なものは無い

---
Deno の特徴2

# DX の改善

- 豊富な ビルトインツール
  - `deno lint`, `deno fmt`, etc
- TypeScript もビルトイン
- シングルバイナリ

---
Deno の特徴3

# セキュリティ強化

- サプライチェーン攻撃に強い (ネットワークアクセス時、ファイルアクセス時に権限チェックがある)


---

まとめ

<!--
- Deno は Node.js の反省を活かした新しい JS runtime で最初は npm 互換は拒否していた
- `npm:` という特殊な URL を使って npm モジュールを Deno の世界に取り込んで使う事が出来る。
- Node の API は `npm:` URL の向こう側にうまく閉じ込められている。
- Deno が Node になってしまったのではなく、あくまで Deno の世界観の中で npm の"機能"を使うことが出来るもの
-->

- `npm:` という特殊な URL を介して Deno の中で npm モジュールが使える
- Deno の良い点を出来る限り損なわないように、慎重にデザインされている
- 多くのモジュールで動作確認が取れている (express, vite, etc)
- ただし、まだまだバギー (エラー報告歓迎)

---
class: middle center

Please try:

`import "npm:好きなモジュール"`

---
class: middle center

<img src="assets/deno_logo_3.svg" width="200" />

Thank you!
