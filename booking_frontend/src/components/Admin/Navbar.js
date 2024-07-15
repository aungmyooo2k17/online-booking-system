const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <button className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"></span>
                  <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"></span>
                  <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"></span>
                  <span className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;