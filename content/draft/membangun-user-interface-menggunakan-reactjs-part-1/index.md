---
title: Membuat Web Page dengan React.js dan Semantic UI
date: "2020-01-21T23:46:37.121Z"
featuredImage: "./react-semantic.jpg"
---

React.js adalah sebuah library javascript buatan facebook yang digunakan untuk membangun user interface. Pada post kali ini kita akan mencoba membuat sebuah halaman web dengan React.js dan untuk _styling_ kita akan menggunakan [Semantic UI](https://semantic-ui.com/). Akhir-akhir ini saya baru mencoba Semantic UI, bahkan blog inipun beberapa komponenya juga pakai Semantic UI :).

Semantic UI adalah sebuah CSS framework yang bisa diaplikasikan ke project React. Semantic UI juga menawarkan komponen siap pakai, jadi kita tinggal memanggil komponennya saja. Tentu ini akan sangat membantu kita dalam mempercepat pembuatan sebuah layout.

Banyak juga CSS framework lain seperti Material UI, Ant Design, Bootstrap dll, atau bisa juga styling sendiri pakai CSS native tergantung selera kalian masing-masing. Oke gausah berlama-lama disini langsung saja kita ke pembahasan.

## Mempersiapkan Project React
<br/>
 1. Pastikan kamu sudah menginstall NodeJS dan memiliki akses internet. Buatlah sebuah project React dengan

```
$ npx create-react-app mywebpage
```

<br/>
 2. Setelah itu masuk ke projek react dengan

```
$ cd mywebpage
```

<br/>
 3. Lalu jalankan development server dengan

```
$ npm start
```

<br/>

> ketika menjalankan npm start terdapat error maka tambahkan perintah sudo didepannya

<br/>
Okeh sampai disini kita akan menginstall terlebih dahulu package dari Semantic UI atau kita singkat saja jadi Semantic aja ya. Buka terminal baru dan install package Semantic dengan

```
$ npm install semantic-ui-react
```
<br/>

Sampai disini kamu sudah menginstall package dari Semantic, selanjutnya buka `App.js` pada code editor dan kita akan membuat sebuah layout 
