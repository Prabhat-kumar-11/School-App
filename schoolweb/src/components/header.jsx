import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 flex justify-around items-center flex-wrap">
      <Link href="/">
        <button
          type="button"
          className="mt-4 mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Home
        </button>
      </Link>
      <Link href="/addschool">
        <button
          type="button"
          className="mt-4 mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Add School
        </button>
      </Link>
      <Link href="/showschool">
        <button
          type="button"
          className="mt-4 mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Show Schools
        </button>
      </Link>
    </nav>
  );
};

export default Header;
