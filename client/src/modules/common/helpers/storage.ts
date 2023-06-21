const KEY = "TOY.APP.TOKEN";

export const storage = {
  getToken() {
    return window.localStorage.getItem(KEY);
  },
  setToken(v: string) {
    window.localStorage.setItem(KEY, v);
  },
  removeToken() {
    window.localStorage.removeItem(KEY);
  },
};
