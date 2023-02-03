import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="border-2 flex justify-between items-center p-8">
      <h1 className="text-3xl font-bold">Logo</h1>
      <NavBar />
    </header>
  );
};

export default Header;
