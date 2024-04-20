import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link
            href="/posts"
            className="text-gray-100 text-xl hover:text-gray-200 active:text-gray-200 md:text-2xl"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-100 text-xl hover:text-gray-200 active:text-gray-200 md:text-2xl"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
