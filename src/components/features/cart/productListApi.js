export function productListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    resolve({ data });
  });
}
