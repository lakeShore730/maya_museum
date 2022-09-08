const TOKEN_KEY = "token";
const USER_DATA_KEY = "user";
const THEME_KEY = "theme";

export function getToken() {
  const localStorageToken = localStorage.getItem(TOKEN_KEY);
  const sessionStorageToken = sessionStorage.getItem(TOKEN_KEY);

  if (localStorageToken) return localStorageToken;
  if (sessionStorageToken) return sessionStorageToken;
  return null;
}

export function setUserLogin(props) {
  const { isRememberMe = false, userData, token } = props;

  if (isRememberMe) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    localStorage.setItem(TOKEN_KEY, token);
    return;
  }

  sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function getUserData() {
  const localStorageData = localStorage.getItem(USER_DATA_KEY);
  const sessionStorageData = sessionStorage.getItem(USER_DATA_KEY);

  try {
    if (localStorageData) return JSON.parse(localStorageData);
    if (sessionStorageData) return JSON.parse(sessionStorageData);
  } catch {
    return {};
  }
}

export function isUserLogin() {
  const localStorageToken = localStorage.getItem(TOKEN_KEY);
  const sessionStorageToken = sessionStorage.getItem(TOKEN_KEY);
  const userData = getUserData();

  if ((localStorageToken || sessionStorageToken) && userData) return true;
  return false;
}

export function restLoginData() {
  localStorage.clear();
  sessionStorage.clear();
}

export function setUserData(userData) {
  if (!userData) return;

  const localStorageUserData = localStorage.getItem(USER_DATA_KEY);
  const sessionStorageUserData = sessionStorage.getItem(USER_DATA_KEY);

  if (localStorageUserData) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    return;
  }
  if (sessionStorageUserData) {
    sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
  }
}

export function getTheme() {
  const currentTheme = localStorage.getItem(THEME_KEY) || "light";
  const root = window.document.documentElement;
  root.classList.add(currentTheme);
  return currentTheme;
}

export function setTheme(value) {
  const root = window.document.documentElement;
  if (getTheme()) root.classList.remove(getTheme());
  root.classList.add(value);
  localStorage.setItem(THEME_KEY, value === "light" ? "light" : "dark");
}
