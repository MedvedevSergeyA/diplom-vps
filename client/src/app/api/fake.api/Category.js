export const categoryObject = {
  mobilePhone: { id: 5, name: "Мобильные телефон" },
  laptop: { id: 6, name: "Ноутбук" },
  tablet: { id: 7, name: "Планшет" },
  musicalColumn: { id: 8, name: "Музыкальная колонка" },
  tv: { id: 9, name: "Телевизор" }
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categoryObject);
    }, 2000);
  });

export default {
  fetchAll
};
