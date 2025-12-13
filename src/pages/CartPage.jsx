import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^\d]/g, ""))
        : Number(item.price);

    return sum + price * item.qty;
  }, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex gap-4 border p-4 mb-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-24 h-24 object-cover"
          />

          <div className="flex-1">
            <h3 className="font-medium">{item.title}</h3>
            <p>₹{priceDisplay(item.price)}</p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="border px-2"
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="border px-2"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold">Total: ₹{total}</h2>

        <button
          onClick={() => navigate("/checkout")}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

const priceDisplay = (price) =>
  typeof price === "string" ? price : price;

export default CartPage;
