export function productListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    resolve({ data });
  });
}

export function productListApiByFilter(filter, sort) {
  return new Promise(async (resolve) => {
    let querystring = "";

    for (const key in filter) {
      let categoryValue = filter[key];
      if (categoryValue.length > 1) {
        let lastCat = categoryValue[categoryValue.length - 1];
        // console.log("lastCat=====>", lastCat);
        querystring += `${[key]}=${lastCat}&`;
        // console.log("query=====>", querystring);
      }
    }

    for (const key in sort) {
      querystring += `${[key]}=${sort[key]}&`;
    }

    // console.log("qur====>",querystring)

    const response = await fetch(
      "http://localhost:3000/products?" + querystring
    );
    const data = response.json();
    resolve({ data });
  });
}
