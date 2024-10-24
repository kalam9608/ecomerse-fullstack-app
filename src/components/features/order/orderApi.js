export function createOrder(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application-json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
