import api from "./api";

// export function signIn(data) {
//   console.log('Usuário submetido no login: ', data)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         token: '24cd94b7d9c4f271766346dc32cb804b70857562',
//         user: {
//           name: 'lucas',
//           email: 'lucasvinicius@gmail.com'
//         }
//       })
//     }, 2000)
//   });
// }

export function signIn(data) {
  console.log('Usuário submetido no login: ', data)
  return api.post("login/", data);
}
