import { useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "./components/features/auth/authSlice";
import { getCartItemsAsyncById } from "./components/features/cart/cartListSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectedUser);
  useEffect(() => {
    if (user) {
      dispatch(getCartItemsAsyncById(user.id));
    }
  }, [dispatch,user.id]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
