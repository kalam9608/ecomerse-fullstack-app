export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application-json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function getCartItemsById(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateToCart(updateItem) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/cart/" + updateItem.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateItem),
        headers: { "content-type": "application-json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItem(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application-json" },
    });
    const data = await response.json();
    resolve({ data: data.id });
  });
}

export async function resetCart(userId) {
  return new Promise(async (resolve) => {
    const response = await getCartItemsById(userId);
    const items = await response.data;

    for (const item of items) {
      await deleteItem(item.id);
    }
    resolve({ status: "success" });
  });
}
