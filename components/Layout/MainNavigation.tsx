import Logo from "./Logo";
import Navbar from "./Navbar";

const MainNavigation = () => {
  return (
    <header className="w-full h-24 flex items-center justify-between px-[10%] bg-gray-800">
      <Logo />

      <Navbar />
    </header>
  );
};
export default MainNavigation;
