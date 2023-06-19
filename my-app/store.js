import { Store, registerInDevtools } from "pullstate";

export const AuthStore = new Store({
  isLoggedIn: false,
});

export const MenuStore = new Store({
  isShown: "flex",
  setToogle: false,
});

export const ProtectedRoute = new Store({
  isLoggedIn: true,
});

registerInDevtools({ AuthStore, MenuStore, ProtectedRoute });
