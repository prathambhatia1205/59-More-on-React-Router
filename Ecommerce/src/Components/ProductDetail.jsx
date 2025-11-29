import { useState } from "react";

function Details({ cart, setCart }) {
  const [quant, setQuant] = useState(1);

  const addToCart = () => {
    const product = {
      name: "Meow",
      price: 30,
      qty: quant,
      img: "https://i.pinimg.com/736x/af/3b/31/af3b311c6cf2851fe8c147537e3a6a61.jpg",
    };

    setCart([...cart, product]);
  };

  return (
    <div className="pt-[80px] h-[95vh] w-full flex items-center justify-center bg-[#e0e0e0]">
      <div className="h-[600px] w-[350px] sm:w-[450px] md:w-[600px] md:h-[700px] lg:h-[450px] lg:w-[1000px] border-2 border-black rounded-xl p-5 flex justify-around bg-white flex-col lg:flex-row gap-1">
        
        <img
          className="lg:w-[45%] lg:h-full h-[55%] md:h-[60%]"
          src="https://i.pinimg.com/736x/af/3b/31/af3b311c6cf2851fe8c147537e3a6a61.jpg"
          alt="product"
        />

        <div className="lg:w-[50%] w-full">
          <h1 className="text-[2rem] font-medium">Meow</h1>
          <h1 className="text-[1.6rem] font-semibold">$30.00</h1>

          <p className="text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="mt-6 flex gap-2">
            <div className="flex w-[18%] justify-between border border-black p-1 items-center rounded-md">
              <h1 className="w-[50%] text-center">{quant}</h1>

              <h1
                className="border border-[#d2d2d2] w-[50%] h-6 flex justify-center items-center hover:cursor-pointer rounded-md"
                onClick={() => setQuant(quant + 1)}
              >
                +
              </h1>
            </div>

            <button
              className="p-1 h-[45px] bg-[#ff4848] w-[170px] text-center rounded-md text-white"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
