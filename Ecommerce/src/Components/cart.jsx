function CartMain({ cart }) {
  return (
    <div className="pt-[80px] p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item, i) => (
          <div
            key={i}
            className="w-full p-4 border rounded-xl bg-white shadow mb-4 flex gap-4"
          >

            <img src={item.img} className="h-[80px]" />

            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}


function CartList({ items, updateItems }) {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <div className="h-[50px] w-[925px] bg-[#f7f7f7] flex items-center border border-b-0 border-[#c0c0c0]">
        <div className="w-[60%] flex justify-center">
          <span>Product</span>
        </div>
        <div className="w-[35%] flex justify-between px-5">
          <span>Price</span>
          <span>Qty</span>
          <span>Total</span>
        </div>
      </div>

      {/* EACH ITEM */}
      {items.map((product, index) => (
        <CartRow
          key={index}
          product={product}
          items={items}
          updateItems={updateItems}
        />
      ))}

      {/* FOOTER ACTIONS */}
      <div className="h-[50px] w-[925px] flex items-center justify-between border border-[#c0c0c0] px-2">
        <div className="flex items-center gap-2">
          <input
            className="w-[200px] h-[80%] border border-[#c0c0c0] p-2"
            placeholder="Coupon Code"
          />
          <button className="w-[200px] h-[80%] bg-[#ff4848] text-white flex items-center justify-center">
            Apply Coupon
          </button>
        </div>

        <button className="w-[200px] h-[80%] bg-[#ff4848] text-white flex items-center justify-center">
          Update Cart
        </button>
      </div>
    </div>
  );
}

function CartRow({ product, items, updateItems }) {
  const removeItem = (id) =>
    updateItems(items.filter((p) => p.id !== id));

  return (
    <div className="h-[60px] w-[925px] flex items-center border border-b-0 border-[#c0c0c0]">
      {/* LEFT */}
      <div className="w-[60%] flex items-center justify-between px-5">
        <button
          onClick={() => removeItem(product.id)}
          className="rounded-full border border-[#c0c0c0] px-2 py-1 text-[0.6rem] cursor-pointer"
        >
          X
        </button>

        <div className="flex items-center gap-10">
          <img src={product.img} className="h-[75%] w-[50px]" />
          <span className="text-[#ff4848] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[35%] flex justify-between items-center px-5">
        <span className="font-semibold">${product.price}</span>

        <div className="h-[50%] w-[40px] border rounded-xl border-[#d2d2d2] flex items-center justify-center text-[0.8rem]">
          {product.quantity}
        </div>

        <span className="font-semibold">
          ${product.price * product.quantity}
        </span>
      </div>
    </div>
  );
}

function CartSummary({ items }) {
  const grandTotal = items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="h-[250px] w-[460px] mt-5 border border-[#c0c0c0] flex flex-col items-center">
      <div className="h-[20%] w-full bg-[#f7f7f7] border-b border-[#c0c0c0] flex items-center pl-3">
        <span className="text-[1.2rem]">Cart Totals</span>
      </div>

      <div className="h-[50%] w-[75%]">
        <div className="h-[40%] border-b border-[#c0c0c0] flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">${grandTotal}</span>
        </div>

        <div className="h-[40%] border-b border-[#c0c0c0] flex items-center justify-between">
          <span>Total</span>
          <span className="font-semibold">${grandTotal}</span>
        </div>
      </div>

      <button className="h-[25%] w-[85%] bg-[#ff4848] rounded-md text-white">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartMain;
