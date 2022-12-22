// import { categoryObject as categories } from "./Category";

const allDevices = [
  {
    id: "659318ffdkq20",
    name: "Телевизор Samsung UE55AU7100UXCE",
    price: 68999,
    isFavourite: false,
    rate: 3,
    reviews: 30,
    description: "55 дюймов 3840x2160 Пикс",
    img: "//img.mvideo.ru/Big/10031027bb.jpg"
  },
  {
    id: "659318ffdkq21",
    name: "Смартфон Apple iPhone 13 Pro Max",
    price: 107352,
    isFavourite: false,
    rate: 3,
    reviews: 30,
    description: " 256GB Sierra Blue",
    img: "//img.mvideo.ru/Pdb/30063591b.jpg"
  },
  {
    id: "659318ffdkq22",
    name: "Смартфон Xiaomi Redmi Note 10S",
    price: 14352,
    isFavourite: false,
    rate: 3,
    reviews: 30,
    description: " 6+64GB Gray",
    img: "//img.mvideo.ru/Big/30057494bb.jpg",
    formerPrice: 18999
  },
  {
    id: "659318ffdkq23",
    name: "Умная колонка Яндекс Станция 2",
    price: 16352,
    formerPrice: 18999,
    isFavourite: false,
    rate: 3,
    reviews: 30,
    description: " Алиса, цвет Кобальт",
    img: "//img.mvideo.ru/Big/10030163bb.jpg"
  },
  {
    id: "659318ffdkq24",
    name: "Apple IPhone 11 Pro Max",
    price: 114999,
    isFavourite: false,
    description: " 64Gb, темно-зеленый",
    img: "//img.mvideo.ru/Big/30063190bb.jpg",
    rate: 4.3,
    reviews: 57,
    formerPrice: 139999
  },
  {
    id: "659318ffdkq25",
    name: "Ноутбук Honor MagicBook X 15",
    price: 44999,
    isFavourite: false,
    description: "i3 8/256 Gray (BBR-WAI9)",
    img: "//img.mvideo.ru/Big/30056686bb.jpg",
    rate: 5.0,
    reviews: 10,
    formerPrice: 52999
  },
  {
    id: "659318ffdkq26",
    name: "Яндекс Станция Кастомизированная",
    price: 4999,
    isFavourite: false,
    description: " 128Gb, фиолетовый",
    img: "//img.mvideo.ru/Big/10031221bb.jpg",
    rate: 4,
    reviews: 150
  },
  {
    id: "659318ffdkq27",
    name: "Смартфон Apple iPhone 13 Pro Max",
    price: 129999,
    isFavourite: false,
    description: " 128Gb, фиолетовый",
    img: "//img.mvideo.ru/Big/30063590bb.jpg",
    rate: 3,
    reviews: 25,
    formerPrice: 159999
  },
  {
    id: "659318ffdkq28",
    name: "Смартфон Samsung Galaxy S20 FE",
    price: 42352,
    isFavourite: false,
    description: "512GB",
    img: "//img.mvideo.ru/Pdb/30064010b.jpg",
    rate: 4.5,
    reviews: 150,
    formerPrice: 51240
  },
  {
    id: "659318ffdkq29",
    name: "Смартфон Samsung Galaxy S22 Ultra 5G",
    price: 89352,
    isFavourite: false,
    description: "256GB Phantom White",
    img: "//img.mvideo.ru/Big/30063286bb.jpg",
    rate: 5,
    reviews: 35,
    formerPrice: 95670
  },
  {
    id: "659318ffdkq30",
    name: "Телевизор Samsung QE55QN87AAU",
    price: 146352,
    isFavourite: false,
    description: "55 дюймов 3840х2160 Пикс",
    img: "//img.mvideo.ru/Big/10026266bb.jpg",
    rate: 3.5,
    reviews: 45,
    formerPrice: 151670
  },
  {
    id: "659318ffdkq31",
    name: "Ноутбук игровой MSI Katana MSI 245",
    price: 109352,
    isFavourite: false,
    description: "55 дюймов 3840х2160 Пикс",
    img: "//img.mvideo.ru/Big/30061606bb.jpg",
    rate: 3.5,
    reviews: 45,
    formerPrice: 151670
  }
];

if (!localStorage.getItem("allDevices")) {
  localStorage.setItem("allDevices", JSON.stringify(allDevices));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("allDevices")));
    }, 2000);
  });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("allDevices")).find(
          (allDevices) => allDevices.id === id
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getById
};
