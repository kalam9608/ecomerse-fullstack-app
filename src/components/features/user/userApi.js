export function fetchLogedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/orders/?user.id=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(updateUser) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/users/" + updateUser.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateUser),
        headers: { "content-type": "application-json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
