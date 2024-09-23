export function productListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    resolve({ data });
  });
}

export function productListApiByFilter(filter, sort) {
  console.log("filer===>", filter);
  return new Promise(async (resolve) => {
    let querystring = "";

    for (const key in filter) {
      querystring += `${[key]}=${filter[key]}&`;
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
