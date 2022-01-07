import api from "./api";

export function signIn(data) {
  console.log('Usuário submetido no login: ', data)
  return api.post("login/", data);
}

export function signOut() {
  return api.get("logout/");
}
