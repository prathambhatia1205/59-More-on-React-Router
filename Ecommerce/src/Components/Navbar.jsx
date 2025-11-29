import { Link } from "react-router-dom";

function Navbar({ setQuery }) {
  return (
    <div className="h-[70px] w-full bg-white flex items-center justify-between px-6 fixed top-0 left-0 shadow-md z-50">
      
      <img
        className="h-[60px]"
        src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
        alt="logo"
      />

      <input
        placeholder="Search Products..."
        className="w-[40%] border h-[45px] rounded-3xl pl-4 bg-[#ebebeb]"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Link to="/cart" className="font-semibold text-[1.2rem]">Cart</Link>
    </div>
  );
}

export default Navbar;
