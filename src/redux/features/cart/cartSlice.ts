import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  cartItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    limitPerUser: number;
    image: string;
  }[];
  totalItems: number;
  cartTotal: number;
  cartDrawer: boolean;
} = {
  cartItems: [],
  totalItems: 0,
  cartTotal: 0,
  cartDrawer: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  check if item is already in cart, if yes then increase quantity by 1 make sure if qty limit is 5 on product and if the qty is already 1 and user insert 5 more then it should be 5 not 6
    //  if item is not in cart then add it to cart and increase totalItems by 1, make sure to add qyt and check qty from the payload
    add: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (
          state.cartItems[itemIndex].quantity <
          state.cartItems[itemIndex].limitPerUser
        ) {
          // here check if qyt provided will be more than limit per user then make it equal to limit per user
          if (
            state.cartItems[itemIndex].quantity + action.payload.quantity >
            state.cartItems[itemIndex].limitPerUser
          ) {
            state.cartItems[itemIndex].quantity =
              state.cartItems[itemIndex].limitPerUser;
            alert(
              `You can only add ${state.cartItems[itemIndex].limitPerUser} items of ${state.cartItems[itemIndex].name}`
            );
          } else {
            state.cartItems[itemIndex].quantity += action.payload.quantity;
          }
        } else {
          alert(
            `You can only add ${state.cartItems[itemIndex].limitPerUser} items of ${state.cartItems[itemIndex].name}`
          );
        }
      } else {
        state.cartItems.push(action.payload);
        state.totalItems += action.payload.quantity;
      }
    },

    remove: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1;
        if (state.cartItems[itemIndex].quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
          state.totalItems -= 1;
        }
      }
    },
    // clear cart
    clearCart: (state)=>{
        state.cartItems = []
    },
    // toggle cart drawer
    toggleCartDrawer: (state,payload) => {
        // if payload is given than use it else just toggle it
        if(payload.payload){
            state.cartDrawer = payload.payload;
        }else{
            state.cartDrawer = !state.cartDrawer;
        }

        
    },

    calculateCartTotal: (state) => {
      let total = 0;
      state.cartItems.reduce((acc, item) => {
        total += item.price * item.quantity;
        return total;
      }, 0);
      state.cartTotal = total;
    },
  },
});

// // caluate cart total
// export const calculateTotal = (state) => {
//     let total = 0;
//     state.cartItems.reduce((acc, item) => {
//         total += item.price * item.quantity;
//         return total;
//     }, 0);
//     return total;
// };
// Action creators are generated for each case reducer function
export const { add, remove, calculateCartTotal,toggleCartDrawer,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
