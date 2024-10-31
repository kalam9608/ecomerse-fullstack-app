import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedUser } from "../../auth/authSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { selectLogedInUserInfo, updateUserAsync } from "../userSlice";

const UserProfile = () => {
  const user = useSelector(selectLogedInUserInfo);
  const [addressEdit, setAddressEdit] = useState(false);
  const [addressEditIndex, setAddressEditIndex] = useState(-1);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleEdit = (updateAddress, index) => {
    const newUser = { ...user, address: [...user.address] };
    newUser.address.splice(index, 1, updateAddress);
    dispatch(updateUserAsync(newUser));
    setAddressEditIndex(-1);
  };

  const handleRemove = (index) => {
    const newUser = { ...user, address: [...user.address] };
    newUser.address.splice(index, 1);
    dispatch(updateUserAsync(newUser));
    setAddressEditIndex(-1);
  };

  const handleEditForm = (index) => {
    setAddressEditIndex(index);
    setValue("name", user.address[index].name);
    setValue("email", user.address[index].email);
    setValue("country", user.address[index].country);
    setValue("city", user.address[index].city);
    setValue("phone", user.address[index].phone);
    setValue("street", user.address[index].street);
    // setValue("postal-code", user.address[index].postal-code);
  };

  return (
    <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <div className="mt-2 p-6">
        {user && (
          <div>
            <h1 className="text-xl font-medium">my profile</h1>

            <p className="text-md font-sm">Name :{user.name ?? "New User"}</p>
            <p className="text-md font-sm text-red-300">email:{user.email}</p>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Addresses
            </h2>
          </div>
        )}

        <div>
          <div className="border-b border-gray-900/10 pb-12 m-2">
            <ul role="list">
              {user &&
                user.address.map((address, index) => (
                  <li
                    key={index}
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    {addressEditIndex == index && (
                      <div className="lg:col-span-3">
                        <form
                          noValidate
                          onSubmit={handleSubmit((data) => {
                            handleEdit(data, index);
                          })}
                          className="bg-white px-5 py-12 mt-12"
                        >
                          <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                Personal Information
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    First name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      {...register("name", {
                                        required: "name is required",
                                      })}
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Email address
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="email"
                                      {...register("email", {
                                        required: "password is required",
                                      })}
                                      type="email"
                                      autoComplete="email"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Country
                                  </label>
                                  <div className="mt-2">
                                    <select
                                      id="country"
                                      {...register("country", {
                                        required: "country is required",
                                      })}
                                      autoComplete="country-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Street address
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      {...register("street")}
                                      id="street"
                                      autoComplete="street-address"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    phone no
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="tel"
                                      {...register("phone")}
                                      id="street"
                                      autoComplete="phone"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    City
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      {...register("city")}
                                      id="city"
                                      autoComplete="address-level2"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-2">
                                  <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    ZIP / Postal code
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      {...register("postal-code", {
                                        required: true,
                                      })}
                                      id="postal-code"
                                      autoComplete="postal-code"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                              <button
                                type="button"
                                onClick={() => setAddressEditIndex(index)}
                                className="text-sm font-semibold leading-6 text-gray-900"
                              >
                                Reset
                              </button>
                              <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Add Address
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.pinCode}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {address.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {address.city}
                      </p>
                    </div>

                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <button
                        className="text-blue-700 font-bold"
                        onClick={() => handleEditForm(index)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-blue-700 font-bold"
                      >
                        remove
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
