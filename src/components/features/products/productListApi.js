export function productListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    resolve({ data });
  });
}

export function productListBrandApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/brands");
    const data = response.json();
    resolve({ data });
  });
}

export function productListCategoryApi() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/categaries");
    const data = response.json();
    resolve({ data });
  });
}

export function productListApiByFilter(filter, sort, pagination) {
  let querystring = "";

  for (const key in filter) {
    let categoryValue = filter[key];
    if (categoryValue.length > 0) {
      let lastCat = categoryValue[categoryValue.length - 1];
      // console.log("lastCat=====>", lastCat);
      querystring += `${[key]}=${lastCat}&`;
      // console.log("query=====>", querystring);
    }
  }

  for (const key in sort) {
    querystring += `${[key]}=${sort[key]}&`;
  }

  for (const key in pagination) {
    querystring += `${[key]}=${pagination[key]}&`;
  }

  // console.log("qur====>",querystring)
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/products?" + querystring
    );
    const data = await response.json();
    resolve({ data });
  });
}
