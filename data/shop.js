// 店舗情報・メニュー情報
// このファイルを編集することで、サイト全体の情報を一括更新できます。

const shopInfo = {
  name: "ぼうず'n coffee",
  nameEn: "BOZU'N COFFEE",
  tagline: "Temple Cafe in Ikebukuro",
  address: "東京都豊島区池袋3-1-6 祥雲寺",
  tel: "03-3984-2408",
  hours: "12:00 〜 18:00",
  hoursDetail: "①12:00–13:50 / ②14:00–15:50 / ③16:00–18:00（入れ替え制）",
  reservation: "完全予約制・入れ替え制",
  nearestStation: "東京メトロ有楽町線「要町」駅 徒歩約2分",
  accessAlt: "JR・東京メトロ「池袋」駅西口より徒歩約10分",
  parking: "なし",
  payment: "現金のみ",
  smoking: "全席禁煙",
  seats: "書院 / 縁側 / テラス席",
  closedNote: "営業日・予約方法は公式Instagramにてご確認ください。",
  instagram: "https://www.instagram.com/bozu.n_coffee/",
  instagramHandle: "@bozu.n_coffee",
  facebook: "https://www.facebook.com/bozu.ncoffee/",
  tabelog: "https://tabelog.com/tokyo/A1322/A132202/13207424/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%A5%A5%E9%9B%B2%E5%AF%BA+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E6%B1%A0%E8%A2%8B3-1-6",
  mapEmbed: "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E6%B1%A0%E8%A2%8B3-1-6+%E7%A5%A5%E9%9B%B2%E5%AF%BA&output=embed"
};

// ドリンクメニュー（実店舗の黒板メニューより／変更の可能性あり）
const drinkMenu = [
  { name: "エスプレッソ",   nameEn: "Espresso",        price: "¥300", note: "" },
  { name: "アメリカーノ",   nameEn: "Americano",       price: "¥400", note: "Hot / Cold" },
  { name: "カフェラテ",     nameEn: "Cafe Latte",      price: "¥400", note: "Hot / Cold" },
  { name: "カフェモカ",     nameEn: "Cafe Mocha",      price: "¥400", note: "Hot / Cold" },
  { name: "抹茶オレ",       nameEn: "Matcha au lait",  price: "¥400", note: "Hot / Cold" },
  { name: "ココア",         nameEn: "Hot Cocoa",       price: "¥400", note: "Hot / Cold" },
  { name: "ミルク",         nameEn: "Milk",            price: "¥400", note: "Hot / Cold" },
  { name: "ゆずネード",     nameEn: "Yuzu-ade",        price: "¥400", note: "Iced" },
  { name: "抹茶",           nameEn: "Matcha",          price: "¥500", note: "お菓子とご一緒に / +お菓子" }
];

// お菓子メニュー（実店舗の黒板メニューより／変更の可能性あり）
const sweetsMenu = [
  { name: "バスク風チーズケーキ", nameEn: "Basque Cheesecake",      price: "¥650", note: "アイスクリームのせ" , featured: true },
  { name: "クリーム白玉宇治金時", nameEn: "Cream Shiratama Uji Kintoki", price: "¥650", note: "濃い目の抹茶 + 白玉 + あんこ + バニラアイス", featured: true },
  { name: "アフォガード",         nameEn: "Affogato",                 price: "¥600", note: "エスプレッソ or 濃茶" },
  { name: "白玉宇治金時",         nameEn: "Shiratama Uji Kintoki",    price: "¥450", note: "" },
  { name: "あんバタートースト",   nameEn: "Anbutter Toast",           price: "¥450", note: "本物のバターたっぷり" },
  { name: "串だんご",             nameEn: "Kushi Dango",              price: "¥450", note: "しょうゆ / ごまだれ" },
  { name: "どら焼",               nameEn: "Dorayaki",                 price: "¥400", note: "" },
  { name: "どら焼 ホイップ",      nameEn: "Dorayaki with Whip",       price: "¥450", note: "" }
];

// ハイライトメニュー（ファーストビュー寄りのカード用）
const signatureItems = [
  {
    name: "クリーム白玉宇治金時",
    nameEn: "Cream Shiratama Uji Kintoki",
    description: "濃い目の宇治抹茶、もちもちの白玉、北海道産あずきにバニラアイス。お寺の縁側でいただく、夏の定番。",
    price: "¥650",
    image: "images/cafe-set.jpg",
    tag: "Signature"
  },
  {
    name: "バスク風チーズケーキ",
    nameEn: "Basque Cheesecake",
    description: "香ばしい焼き目、しっとり濃厚。アイスクリームを添えて、コーヒーとともに。",
    price: "¥650",
    image: "images/cheesecake.jpg",
    tag: "Popular"
  },
  {
    name: "カフェラテ",
    nameEn: "Cafe Latte",
    description: "信楽焼の器に、丁寧に注がれる一杯。なめらかなミルクと、ほろ苦さ。",
    price: "¥400",
    image: "images/latte-art.jpg",
    tag: "Coffee"
  }
];

// 空間
const spaceItems = [
  {
    image: "images/hero-engawa.jpg",
    no: "01",
    title: "縁側",
    titleEn: "— Engawa",
    text: "苔の庭に向かって伸びる縁側。座布団に腰をおろし、風と陽射しを聴く。"
  },
  {
    image: "images/shoin-hall.jpg",
    no: "02",
    title: "書院",
    titleEn: "— Shoin",
    text: "「瑞鳳山」の額が掛かる書院造りの広間。落ち着いた光のなかで、ひと息を。"
  },
  {
    image: "images/moss-garden-view.jpg",
    no: "03",
    title: "庭",
    titleEn: "— Garden",
    text: "石灯籠と苔、四季を映す小さな庭。窓の向こうに、季節の景色を。"
  },
  {
    image: "images/exterior-cafe.jpg",
    no: "04",
    title: "外観",
    titleEn: "— Entrance",
    text: "「時の間にいる、ぼうずnCOFFEE」— 黒板に導かれて、お寺の中へ。"
  }
];

// ギャラリー（Masonry用に縦横ミックス）
const galleryImages = [
  { src: "images/hero-engawa.jpg",      alt: "苔庭を望む縁側", span: "tall" },
  { src: "images/signature-set.jpg",    alt: "縁側で味わうチーズケーキとラテ", span: "tall" },
  { src: "images/latte-art.jpg",        alt: "信楽焼のカフェラテ", span: "tall" },
  { src: "images/shoin-window.jpg",     alt: "書院から見る庭", span: "wide" },
  { src: "images/cafe-set.jpg",         alt: "テラスのカフェセット", span: "wide" },
  { src: "images/tsukubai.jpg",         alt: "庭の水鉢", span: "wide" },
  { src: "images/engawa-seats.jpg",     alt: "縁側に座る人々", span: "tall" },
  { src: "images/temple-gate.jpg",      alt: "祥雲寺 山門", span: "wide" },
  { src: "images/moss-garden-view.jpg", alt: "窓辺から望む苔庭", span: "tall" },
  { src: "images/temple-ginkgo.jpg",    alt: "境内の銀杏", span: "wide" },
  { src: "images/cheesecake.jpg",       alt: "バスク風チーズケーキ", span: "wide" },
  { src: "images/signage-monk.jpg",     alt: "お坊さんの看板", span: "tall" }
];

// Instagram風 (実投稿はリンク先で)
const igTiles = [
  "images/signature-set.jpg",
  "images/latte-art.jpg",
  "images/cheesecake.jpg",
  "images/moss-garden-view.jpg"
];
