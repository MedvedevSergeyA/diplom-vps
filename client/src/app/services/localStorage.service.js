import { calcTotalPrice } from "../utils/calkTotalPrice";

const FAVOURITE = "favourite";
const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

export const addDeviceToFavourite = (data) => {
  const devices = JSON.parse(localStorage.getItem(FAVOURITE));
  if (devices) {
    devices.push(data);
    localStorage.setItem(FAVOURITE, JSON.stringify(devices));
    window.alert("Товар добавлен в избранное");
  } else {
    localStorage.setItem(FAVOURITE, JSON.stringify([data]));
  }
};
export const getStatusFavouriteDeviceById = (id) => {
  const devices = JSON.parse(localStorage.getItem(FAVOURITE));

  if (devices) {
    return devices.find((item) => item === id);
  }
  return false;
};
export const getFavouriteDevice = () => {
  const devices = JSON.parse(localStorage.getItem(FAVOURITE));
  if (devices) {
    return devices;
  }
  return [];
};
export const delStatusFavouriteDeviceById = (id) => {
  const devices = JSON.parse(localStorage.getItem(FAVOURITE));
  const filteredDevices = devices.filter((item) => item !== id);
  localStorage.setItem(FAVOURITE, JSON.stringify(filteredDevices));
  window.alert("Товар удален из избранного");
};

export function setTokens({
  refreshToken,
  accessToken,
  userId,
  expiresIn = 3600
}) {
  const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(USERID_KEY, userId);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}
export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}

export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice
  };
};

const localStorageService = {
  getAccessToken,
  getRefreshToken,
  setTokens,
  removeAuthData,
  getTokenExpiresDate,
  getUserId,
  getStatusFavouriteDeviceById,
  addDeviceToFavourite,
  getFavouriteDevice,
  delStatusFavouriteDeviceById,
  getCartFromLocalStorage
};

export default localStorageService;
