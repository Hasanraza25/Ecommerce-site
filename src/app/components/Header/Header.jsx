import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 pt-8 border-b-2 mytext">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            width={120}
            height={30}
          />
        </div>
        <div className="nav-items">
          <nav>
            <ul className="flex">
              <Link href="#">
                <li className="mx-5 tracking-wider border-b-2 border-b-[#808080] font-medium">Home</li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider">Contact</li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider ">About</li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider">Sign Up</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row">
          <div className="input-field relative w-72">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 px-4 rounded-md bg-[#f5f5f5] text-gray-700 focus:outline-none tracking-wider"
            />
            <div className="absolute top-0 right-4 flex items-center justify-center h-full text-gray-500">
              <Image
                src="/images/search.svg"
                alt="Search Logo"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="header-icons flex justify-between px-5">
            <Image
              src="/images/wishlist.svg"
              alt="Wishlist logo"
              width={35}
              height={30}
              className="mx-3"
            />

            <Image
              src="/images/cart.svg"
              alt="Cart Logo"
              width={35}
              height={30}
              className="mx-3"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
