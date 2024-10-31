import { useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "./components/features/auth/authSlice";
import { getCartItemsAsyncById } from "./components/features/cart/cartListSlice";
import { fetchLogedInUserAsync } from "./components/features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectedUser);
  useEffect(() => {
    if (user) {
      dispatch(getCartItemsAsyncById(user.id));
      dispatch(fetchLogedInUserAsync(user.id));

    }
  }, [dispatch,user.id]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
