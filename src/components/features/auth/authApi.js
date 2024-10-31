export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application-json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(logeInfo) {
  return new Promise(async (resolve, reject) => {
    const email = logeInfo.email;
    const password = logeInfo.password;

    const response = await fetch("http://localhost:3000/users?email=" + email);
    const data = await response.json();
    if (data.length) {
      if (password == data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "password is wrong" });
      }
    } else {
      resolve({ message: "user not found" });
    }
  });
}

// export function updateUser(updateUser) {
//   return new Promise(async (resolve) => {
//     const response = await fetch(
//       "http://localhost:3000/users/" + updateUser.id,
//       {
//         method: "PATCH",
//         body: JSON.stringify(updateUser),
//         headers: { "content-type": "application-json" },
//       }
//     );
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function logoutUser(updateUser) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
