import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store:", store.getState());

//subscribe
store.subscribe(() => {
  console.log("STORE CHANGE:", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login());
