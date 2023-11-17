const Header = () => {
  return (
    <header className=" mb-7 bg-gray-800 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://tailwindcss.com/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          <a
            href="#"
            className="text-xl font-semibold leading-6 text-white  hover:text-red-600	"
          >
            Product
          </a>
          
          <a
            href="/profile"
            className="text-xl font-semibold leading-6 text-white  hover:text-red-600"
          >
            Profile
          </a>
          
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className=" hover:bg-blue-800 px-5 py-2.5 rounded-lg bg-blue-700 border-2 scroll-p-0.5 border-blue-700 text-2xl text-white font-semibold leading-6"
          >
            Sign In <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
