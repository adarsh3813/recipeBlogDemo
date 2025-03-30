import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../assets/userImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { updateRecipes } from "./utils/recipeListSlice";
import { updateSearchOnce } from "./utils/searchOnceSlice";

/*
Navbar is responsive and has search feature.
*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const recipeList = useSelector((store) => store.recipeList);
  const [recipesOriginal, setReceipesOriginal] = useState();
  const once = useSelector((store) => store.searchOnce);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  const handleSearch = () => {
    if (search === "") {
      dispatch(updateRecipes(recipesOriginal));
      return;
    }
    if (once) {
      setReceipesOriginal(recipeList);
      dispatch(updateSearchOnce(false));
    }
    const newList = filterRecipes();
    dispatch(updateRecipes(newList));
  };

  function filterRecipes() {
    return recipesOriginal.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">
          MyBlog
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6 text-white flex items-center">
          {user ? (
            <>
              <li className="flex">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search recipe here"
                  className="focus:text-black w-full px-4 py-2 border border-white  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white pr-10"
                />
                <button
                  className="border border-white px-2 hover:text-blue-800 hover:bg-white cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </li>
              <li>
                <Link className="hover:text-gray-200" to={"/"}>
                  Home
                </Link>
              </li>

              <li
                className="hover:text-gray-200 cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </li>
              <li>
                <img
                  className="w-10 rounded-full"
                  alt="user-image"
                  src={userImage}
                ></img>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 pt-2 bg-blue-900 text-white">
          <li className="hover:bg-blue-800 px-4">
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li
                className="hover:bg-blue-800 px-4 py-1 cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </li>
              <li className="hover:bg-blue-800 px-4 py-1">
                <div className="flex">
                  <img
                    className="w-10 rounded-full mr-3"
                    alt="user-image"
                    src={userImage}
                  ></img>
                  {user.firstName} {user.lastName}
                </div>
              </li>
            </>
          ) : (
            <li className="hover:bg-blue-800 px-4 py-1">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
