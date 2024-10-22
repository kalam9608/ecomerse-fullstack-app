import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../../auth/authSlice";
import { fetchLogedInUserOrderAsync, selectOrders } from "../userSlice";

const UserOrder = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectedUser);
  const orders = useSelector(selectOrders);
  useEffect(() => {
    dispatch(fetchLogedInUserOrderAsync(user?.id));
  }, [dispatch, user]);

  return (
    <>
      {/* {!orders && <h1 className="text-xl mt-8">Nothing</h1>} */}

      {orders.map((order) => (
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 bg-white shadow">
          <h1 className="text-xl font-bold ml-4 mt-4">Order #{order.id}</h1>
          <h1 className="text-xl text-green-800 font-bold ml-4 mt-4">
            status-{order.status}
          </h1>
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((product, index) => (
                    <li key={index} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={product.title}
                          src={product.images[0]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.title}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            Qty:{product.quantity}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${Math.round(order.total)}</p>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Shipping addresses
              </p>
              <ul role="list">
                <li className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {order.selectedAddress.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserOrder;
