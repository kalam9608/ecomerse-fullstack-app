export function fetchLogedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/users" + userId);
    const data = await response.json();
    resolve({ data });
  });
}
