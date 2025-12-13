import React from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^\d]/g, ""))
        : Number(item.price);

    return sum + price * item.qty;
  }, 0);

  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const res = await fetch("http://localhost:5000/api/payment/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });

    const order = await res.json();

    const options = {
      key: "rzp_test_Rqz6mQTZRldpAy", // ✅ REAL TEST KEY
      amount: order.amount,
      currency: "INR",
      name: "H&M Clone",
      description: "Order Payment",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);
      },
      theme: { color: "#000000" },
    };

    new window.Razorpay(options).open();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-10">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <p>Total Amount: ₹{total}</p>

      <button
        onClick={handlePayment}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default CheckoutPage;
