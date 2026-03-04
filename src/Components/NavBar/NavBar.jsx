
const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar-start mt-8 mb-4">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
            <li><a className="hover:bg-transparent text-purple-700">Home</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">FAQ</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Changelog</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Blog</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Download</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Contact</a></li>
          </ul>
        </div>
        <a className="text-sm md:text-xl font-bold">
          CS — Ticket System
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal space-x-1 font-bold">
            <li><a className="hover:bg-transparent text-purple-700">Home</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">FAQ</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Changelog</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Blog</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Download</a></li>
            <li><a className="hover:bg-transparent hover:text-purple-700">Contact</a></li>
          </ul>
        </div>
        <button className='btn bg-linear-to-bl from-[#632EE3] to-[#9F62F2] 
          px-4 py-2 rounded text-sm md:text-lg font-semibold text-white cursor-pointer 
          transition-opacity duration-300 hover:opacity-80 '>
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default NavBar;