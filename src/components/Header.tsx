import MenuHambuger from "../assets/icons/MenuHambuger";
import Logo from "../assets/Logo";

export default function Header() {
  return (
    <>
      <header className="w-100 p-6  flex justify-between">
        <Logo />
        <MenuHambuger />
      </header>
    </>
  );
}