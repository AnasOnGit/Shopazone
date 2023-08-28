"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
  toggleCartDrawer,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Lottie from "lottie-react";
import emptyCart from "@/lottieFiles/emptyCart.json";

import {
  TbSquareRoundedMinus,
  TbSquareRoundedPlus,
  TbSquareRoundedX,
} from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  productId: string;
  name: string;
  price: number;
  limitPerUser: number;
  image: string;
}

function AddToCartProductPage({
  productId,
  name,
  price,
  image,
  limitPerUser,
}: Props): ReactElement {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          add({
            id: productId,
            quantity: parseInt(e.target.quantity.value),
            limitPerUser,
            price,
            name,
            image,
          })
        );
        dispatch(toggleCartDrawer());
      }}
      className=" flex flex-row md:flex-row-reverse items-center justify-center md:justify-around  md:border-none border  md:m-4 md:mt-0 p-2 rounded md:shadow-none shadow-md md:items-end self-center md:relative fixed bottom-0 bg-white z-40 md:w-[250px] w-[100%] gap-2 h-24  justify-self-center left-0 "
    >
      <span className="flex flex-col h-[60px] justify-center items-center">
        <label className="md:flex hidden" htmlFor="qty">
          Quantity
        </label>
        <label className="md:hidden flex " htmlFor="qty">
          QTY
        </label>
        {/* <input type="number" value="1" placeholder='Quantity'/> */}
        <select
          title="Quantity"
          name="quantity"
          className="w-[60px] border p-1 cursor-pointer h-full"
          id="Quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </span>
      <button
        type="submit"
        className="bg-orange-600 text-white p-2 rounded hover:shadow w-[95%] h-16 md:h-[40px] md:w-[100px] text-2xl md:text-sm hover:bg-orange-400"
      >
        Add to cart
      </button>
    </form>
  );
}

export function CartHeader() {
  const count = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleCartDrawer(false))}
      attr-cart-total={count}
      className={`relative cursor-pointer flex flex-row text-[#ea580c]  after:content-[attr(attr-cart-total)] after:absolute after:-right-2  after:-top-1 after:text-[10px] after:text-white mr-3 after:w-[18px] after:h-[18px] after:p-2 after:flex after:items-center after:justify-center after:bg-[#ea580c] after:rounded-full after:text-center`}
    >
      <CiShoppingCart size={32} />
      {/* <div className=" ml-2  text-lg cursor-pointer hover:text-white-400">
        Cart
      </div> */}
    </div>
  );
}

export function CartDrawer() {
  const isVisible = useSelector((state: any) => state.cart.cartDrawer);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartItems);

  // if (!isVisible) null;

  return (
    // slide in menu if visible is true
    <div className={` flex-row w-full flex`}>
      <div
        className={`left-0 top-0 fixed h-screen bg-[rgba(0,0,0,0.5)] w-full  transform transition-all duration-500
      z-50 ${isVisible ? "block" : "hidden"}
      `}
        onClick={() => dispatch(toggleCartDrawer(false))}
      />
      <div
        className={`fixed top-0 right-0 h-screen md:w-[400px] w-[90vw] bg-white shadow-md z-50 transform transition-all duration-500 
    ${isVisible ? "translate-x-0" : "translate-x-full"} overflow-y-scroll
     `}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="font-bold text-3xl">Cart</h1>
          <button
            onClick={() => dispatch(toggleCartDrawer(false))}
            className="bg-green-600 text-white p-2 rounded hover:shadow   "
          >
            Continue Shopping
          </button>
          {/* <button  onClick={() => dispatch(toggleCartDrawer(false))} className="bg-green-600 text-white p-2 rounded hover:shadow w-[95%] h-16 text-2xl md:text-xl flex-1 w-full">Continue Shopping</button> */}
          {/* <div
            className="cursor-pointer 
        hover:text-red-500"
          >
            <TbSquareRoundedX
              title={"Close"}
              size={42}
              onClick={() => dispatch(toggleCartDrawer(false))}
            />
          </div> */}
          {/* <button onClick={() => dispatch(toggleCartDrawer())}>X</button> */}
        </div>
        <hr />
        <CartItems />
        {/* section below */}
        {/* // calculate cart total here */}
        {cart.length === 0 ? null : (
          <div className="flex flex-row items-center sticky bottom-0 left-0 w-full bg-white p-2 text-center ">
            <div className="flex flex-col flex-1">
              <p className="font-bold">Cart Total</p>
              <p className="text-green-500 font-bold">
                SAR{" "}
                {cart
                  .reduce((acc: number, item: any) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            {/* show checkout and contuine shopping btn */}
            <div className="flex flex-col gap-2 w-[60%]">
              <Link
                href="/checkout"
                onClick={() => dispatch(toggleCartDrawer())}
                className="bg-blue-800 text-white p-2 rounded hover:shadow text-2xl md:text-xl "
              >
                Checkout
              </Link>
              {/* <button className="bg-green-600 text-white p-2 rounded hover:shadow w-[95%] h-16 text-2xl md:text-xl flex-1 w-full">Continue Shopping</button> */}
            </div>
          </div>
        )}
      </div>
      <div className="h-12" />
    </div>
  );
}

export const AddToCartProductPreview = ({
  productId,
  name,
  price,
  image,
  limitPerUser,
}: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <button
        onClick={() => {
          dispatch(
            add({
              id: productId,
              quantity: 1,
              limitPerUser,
              price,
              name,
              image,
            })
          );
          dispatch(toggleCartDrawer(false));
        }}
        className=" border rounded-2xl mt-2 border-[#ea580c] text-[#ea580c] p-1  flex flex-row justify-center items-center flex-1 
                hover:shadow hover:bg-[#ea580c] hover:border-none hover:text-white"
      >
        Add to cart
        <FiShoppingCart size={15} className="ml-2" />
      </button>
    </div>
  );
};

export function SingleCartItemCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="flex flex-row justify-between items-start p-4 pt-0 border-b mx-2 "
    >
      <div className="flex flex-row gap-2 items-center flex-1">
        <Image
          width={50}
          height={50}
          src={item.image}
          alt={item.name}
          className="w-[50px] h-[50px] object-contain object-center"
        />
        <div className="flex flex-col flex-1">
          <Link
            onClick={() => dispatch(toggleCartDrawer())}
            href={`/product/${item.id}`}
            className="font-bold w-full"
          >
            {item.name}
          </Link>

          <div className="flex flex-row gap-2 items-center">
            <TbSquareRoundedMinus
              size={22}
              className="cursor-pointer"
              color="red"
              onClick={() =>
                dispatch(
                  remove({
                    id: item.id,
                    quantity: -1,
                    limitPerUser: 10,
                    price: item.price,
                    name: item.name,
                    image: item.image,
                  })
                )
              }
              title={`Decrease  Quantity - Current Quantity (${item.quantity})`}
              alt={`Decrease  Quantity - Current Quantity (${item.quantity})`}
            />
            {/* <button onClick={() => dispatch(add({ id: item.id, quantity: 1, limitPerUser: 10, price: item.price, name: item.name, image: item.image }))}>+</button> */}
            <p className="border p-1 w-[40px] text-center rounded">
              {item.quantity}
            </p>
            <TbSquareRoundedPlus
              size={22}
              className="cursor-pointer"
              color="green"
              onClick={() =>
                dispatch(
                  add({
                    id: item.id,
                    quantity: 1,
                    limitPerUser: 10,
                    price: item.price,
                    name: item.name,
                    image: item.image,
                  })
                )
              }
              title={`Increase Quantity - Current Quantity (${item.quantity})`}
              alt={`Increase Quantity - Current Quantity (${item.quantity})`}
            />

            <p className="text-gray-500" title="Unit Price" alt="Unit Price">
              X SAR {item.price}
            </p>
            {/* <button onClick={() => dispatch(remove({ id: item.id, quantity: -1, limitPerUser: 10, price: item.price, name: item.name, image: item.image }))}>-</button> */}
          </div>
        </div>
      </div>
      <p
        className="text-sm text-green-500 font-bold "
        title={`Total price - SAR ${item.price * item.quantity}`}
        alt={`Total price - SAR ${item.price * item.quantity}`}
      >
        SAR {item.price * item.quantity}
      </p>
    </div>
  );
}
const EmptyCart = () => {
  return (
    <div className="h-full flex flex-col w-full items-center justify-center flex-1">
      <Lottie animationData={emptyCart} />
      <p className="text-center text-2xl font-bold">Your cart is empty</p>
    </div>
  );
};

export function CartItems() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartItems);
  return (
    <div className="flex flex-col gap-2 min-h-[82%]">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <p
            className="text-right text-red-500 cursor-pointer hover:underline hover:text-red-700 mr-3 mt-3"
            onClick={() => {
              // show a promot to ask user if they want to clear the cart or not
              if (
                confirm(
                  "You are about to remove everything from the cart. Are you sure you want to proceed?"
                )
              ) {
                dispatch(clearCart());
              }
            }}
          >
            Clear Cart
          </p>
          {cart.map((item: any) => {
            return <SingleCartItemCard key={item.key} item={item} />;
          })}
        </>
      )}
    </div>
  );
}

export function CartTotalCalculation() {
  const cart = useSelector((state: any) => state.cart.cartItems);
  const [cartTotal, setCartTotal] = React.useState(0);
  const calculateCartTotal = () => {
    return cart
      .reduce((acc: number, item: any) => {
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };
  React.useEffect(() => {
    setCartTotal(calculateCartTotal);
  }, [cart]);

  return (
    <div className="flex flex-col ">
      {/* list 1 */}
      <div className="flex flex-row justify-between border-b mb-2 pb-2">
        <p className=" text-gray-500">Subtotal {`(${cart.length} items)`}</p> <span> </span>
        <p className="text-black-500">
          SAR<span> </span>
          {cartTotal}
        </p>
      </div>
      {/* list 2 */}
      <div className="flex flex-row justify-between">
        <p className=" text-gray-500">Shipping</p> <span> </span>
        <p className="text-black-500 font-bold">
          FREE
        </p>
      </div>
      {/* list 3 */}
      <div className="flex flex-row justify-between border-t mt-2 pt-2">
        <p className=" font-bold text-black-500">Total</p> <span> </span>
        <p className="text-black-500 font-bold">
          SAR<span> </span>
          {cartTotal}
        </p>
      </div>
    </div>
  );
}
// // create a component that will slide from right on desktop and slide from botton on mobile when user click on cart icon and it will show items in cart and ask if they want to checkout or continue shopping it will also have a button to close the cart it will take a prop to open it or close it also show cart total and total items in cart
// // this is next js so use next image and next link and make sure to use table and display total below
// const CartMenu = ({ open }) => {
//   const cart = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   return (
//     <div
//       className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-md z-50 transform transition-all duration-500 ${
//         open ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex flex-row justify-between items-center p-4">
//         <h1 className="font-bold text-2xl">Cart</h1>
//         <button
//           onClick={() => {
//             dispatch({ type: "cart/toggleCart" });
//           }}
//         >
//           X
//         </button>
//       </div>
//       <div className="flex flex-col gap-2">
//         {cart.map((item) => {
//           return (
//             <div key={item.id} className="flex flex-row justify-between items-center p-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-[50px] h-[50px] object-contain object-center"
//                 />
//                 <div className="flex flex-col">
//                   <p className="font-bold">{item.name}</p>
//                   <p className="text-sm text-gray-500">{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex flex-row gap-2 items-center">
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/increment", payload: item.id });
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/decrement", payload: item.id });
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// const CartMenu = ({ open }) => {
//   const cart = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   return (
//     <div
//       className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-md z-50 transform transition-all duration-500 ${
//         open ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex flex-row justify-between items-center p-4">
//         <h1 className="font-bold text-2xl">Cart</h1>
//         <button
//           onClick={() => {
//             dispatch({ type: "cart/toggleCart" });
//           }}
//         >
//           X
//         </button>
//       </div>
//       <div className="flex flex-col gap-2">
//         {cart.map((item) => {
//           return (
//             <div key={item.id} className="flex flex-row justify-between items-center p-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-[50px] h-[50px] object-contain object-center"
//                 />
//                 <div className="flex flex-col">
//                   <p className="font-bold">{item.name}</p>
//                   <p className="text-sm text-gray-500">{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex flex-row gap-2 items-center">
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/increment", payload: item.id });
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/decrement", payload: item.id });
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const CartMenu = () => {
//   const cart = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   return (
//     <div className="fixed top-0 right-0 h-screen w-[400px] bg-white shadow-md z-50">
//       <div className="flex flex-row justify-between items-center p-4">
//         <h1 className="font-bold text-2xl">Cart</h1>
//         <button
//           onClick={() => {
//             dispatch({ type: "cart/toggleCart" });
//           }}
//         >
//           X
//         </button>
//       </div>
//       <div className="flex flex-col gap-2">
//         {cart.map((item) => {
//           return (
//             <div key={item.id} className="flex flex-row justify-between items-center p-4">
//               <div className="flex flex-row gap-2 items-center">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-[50px] h-[50px] object-contain object-center"
//                 />
//                 <div className="flex flex-col">
//                   <p className="font-bold">{item.name}</p>
//                   <p className="text-sm text-gray-500">{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex flex-row gap-2 items-center">
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/increment", payload: item.id });
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => {
//                     dispatch({ type: "cart/decrement", payload: item.id });
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default AddToCartProductPage;
