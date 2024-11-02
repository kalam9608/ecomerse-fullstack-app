import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAsync,
  fetchProductByIdAsync,
  selectBrand,
  selectCategory,
  updateProductAsync,
} from "../products/productListSlice";
import { useParams } from "react-router-dom";
import { selectProduct } from "../products/productListSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const brands = useSelector(selectBrand);
  const param = useParams();

  const selectProductDetails = useSelector(selectProduct);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(param.id));
  }, [dispatch, param.id]);

  useEffect(() => {
    if (selectProductDetails && param.id) {
      setValue("title", selectProductDetails.title);
      setValue("description", selectProductDetails.description);
      setValue("thumbnail", selectProductDetails.thumbnail);
      setValue("image1", selectProductDetails.images[0]);
      setValue("image2", selectProductDetails.images[1]);
      setValue("brand", selectProductDetails.brand);
      setValue("category", selectProductDetails.category);
      setValue("price", selectProductDetails.price);
      setValue("discount", selectProductDetails.discountPercentage);
      setValue("stock", selectProductDetails.stock);
    }
  }, [dispatch, selectProductDetails]);

  const handleDelete = () => {
    const product = { ...selectProductDetails };
    product.delete = true;
    dispatch(updateProductAsync(product));
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        // console.log(data)
        const product = { ...data };
        product.images = [product.image1, product.image2];
        delete product.image1;
        delete product.image2;
        product.price = +product.price;
        // console.log(product);
        if (param.id) {
          product.id = param.id;
          dispatch(updateProductAsync(product));
          reset();
        } else {
          dispatch(createProductAsync(product));
          reset();
        }
      })}
      className="bg-white px-5 py-12 mt-12"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            product edit form
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                product name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("title", {
                    required: "product name  is required",
                  })}
                  id="title-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                descriptions
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  {...register("description", {
                    required: "description is required",
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  {...register("price", {
                    required: "price is required",
                    min: 1,
                    max: 100000,
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="stock"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                stock
              </label>
              <div className="mt-2">
                <input
                  id="stock"
                  {...register("stock", {
                    required: "stock is required",
                    min: 0,
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="discount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                discount
              </label>
              <div className="mt-2">
                <input
                  id="discount"
                  {...register("discount", {
                    required: "discount is required",
                    min: 0,
                  })}
                  type="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="thumbnail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                thumbnail
              </label>
              <div className="mt-2">
                <input
                  id="thumbnail"
                  {...register("thumbnail", {
                    required: "thumbnail is required",
                    min: 0,
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="image1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                image1
              </label>
              <div className="mt-2">
                <input
                  id="image1"
                  {...register("image1", {
                    required: "image1 is required",
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="image2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                image2
              </label>
              <div className="mt-2">
                <input
                  id="image2"
                  {...register("image2", {
                    required: "image2 is required",
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  {...register("category", {
                    required: "category is required",
                  })}
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">....select category....</option>
                  {categories.map((category) => (
                    <option value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                brand
              </label>
              <div className="mt-2">
                <select
                  id="brand"
                  {...register("brand", {
                    required: "brand is required",
                  })}
                  autoComplete="brand-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">....select brand....</option>
                  {brands.map((brand) => (
                    <option value={brand.value}>{brand.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reset
          </button>

          {selectProductDetails && (
            <button
              onClick={handleDelete}
              className="text-sm bg-red-600   font-semibold leading-6 text-gray-900 p-2 rounded-md text-white"
            >
              delete product
            </button>
          )}
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Address
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
