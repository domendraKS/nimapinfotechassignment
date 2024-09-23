import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(
    useLocation().search.split("=")[1]
  );
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-[#33393f] p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-bold">
          MovieDb
        </Link>

        {/* Hamburger Menu for mobile */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Links for desktop */}
        <div
          className={`md:flex space-x-4 text-white ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="hover:text-gray-400">
            Popular
          </Link>
          <Link to="/top-rated" className="hover:text-gray-400">
            Top Rated
          </Link>
          <Link to="/upcoming" className="hover:text-gray-400">
            Upcoming
          </Link>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Movie Name"
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-l bg-gray-700 text-white w-32 sm:w-48 md:w-64"
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-r text-white hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
