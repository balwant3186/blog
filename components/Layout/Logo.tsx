import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="uppercase text-xl font-bold font-['Oswald'] text-gray-50 md:text-3xl"
    >
      Balwant{`'`} Blog
    </Link>
  );
};
export default Logo;
