import Avatar from "../../components/avatar";
import Input from "../../components/input";
import Link from "../../components/link";
import Select from "../../components/select";

const Header = () => {
  return (
    <header className="flex items-center gap-4 p-3 m-auto max-w-8xl">
      <Select>
        <div className="rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200 size-4"></div>
        <p className="ml-7 mr-9">Alicia Koch</p>
      </Select>
      <Link href="#" isCurrent>
        Overview
      </Link>
      <Link href="#">Customers</Link>
      <Link href="#">Products</Link>
      <Link href="#">Settings</Link>

      <div className="flex gap-3 ml-auto">
        <Input placeholder="Shearch..." />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
