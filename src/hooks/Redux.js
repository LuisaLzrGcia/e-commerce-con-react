import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: initialCart,
};
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const storeSlice = createSlice({
  name: "store-redux",
  initialState,
  reducers: {
    addToCart(state, action) {
      const currentProduct = action.payload;

      const isExistIndex = state.cart.findIndex(
        (product) => product.id === currentProduct.id
      );

      if (isExistIndex !== -1) {
        state.cart[isExistIndex].cantidad += 1;
        state.cart[isExistIndex].subtotal =
          state.cart[isExistIndex].cantidad * state.cart[isExistIndex].price;
      } else {
        const newProduct = {
          ...currentProduct,
          cantidad: 1,
        };
        state.cart = state.cart.concat({
          ...newProduct,
          subtotal: newProduct.cantidad * currentProduct.price,
        });
      }
      saveCartToLocalStorage(state.cart);
    },
    removeToCart(state, action) {
      const currentProuct = action.payload;
      state.cart = state.cart.filter(
        (producto) => producto.id !== currentProuct.id
      );
      saveCartToLocalStorage(state.cart);
    },
    addItemToProduct(state, action) {
      const currentProduct = action.payload;

      const isExistIndex = state.cart.findIndex(
        (product) => product.id === currentProduct.id
      );

      if (isExistIndex !== -1) {
        state.cart[isExistIndex].cantidad = currentProduct.cantidad;
        state.cart[isExistIndex].subtotal =
          state.cart[isExistIndex].cantidad * state.cart[isExistIndex].price;
      }
      saveCartToLocalStorage(state.cart);
    },
  },
});

const store = configureStore({
  reducer: storeSlice.reducer,
});

const useStoreReduxContext = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(storeSlice.actions.addToCart(item));
  };

  const removeToCart = (item) => {
    dispatch(storeSlice.actions.removeToCart(item));
  };

  const addItemToProduct = (item) => {
    dispatch(storeSlice.actions.addItemToProduct(item));
  };

  const products = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.length);

  return {
    addToCart,
    products,
    cartItems,
    removeToCart,
    addItemToProduct,
  };
};

export { store as default, useStoreReduxContext };
