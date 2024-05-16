import CardLinksItems from "./CardLinks";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center ">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-row justify-between items-center">
          <Logo />
          <Auth />
        </div>
        <div className="w-full ">
          <CardLinksItems />
        </div>

        <SearchBar placeholder={"Buscar evento..."} />
      </div>
    </header>
  );
};

export default Header;
