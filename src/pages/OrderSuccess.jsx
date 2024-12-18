import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { selectedUser } from "../components/features/auth/authSlice";
import { resetCartAsync } from "../components/features/cart/cartListSlice";
import { resetOrder } from "../components/features/order/orderSlice";

export default function OrderSuccessPage({ order }) {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectedUser);

  // console.log("params=====>",params);

  useEffect(() => {
    // reset cart
    dispatch(resetCartAsync(user.id));

    // reset current order
    dispatch(resetOrder());
  }, [dispatch, user]);

  return (
    <>
      {!params && <Navigate to="/" replace={true}></Navigate>}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            order successfully done
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            order number {params.id}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
