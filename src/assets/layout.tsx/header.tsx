import Avatar from "../../components/avatar";
import Input from "../../components/input";
import Link from "../../components/link";
import Select from "../../components/select";

const Header = () => {
  return (
    <div className="flex items-center gap-9 p-7">
      <Select />
      <Link />
      <div className="ml-auto flex gap-3">
        <Input />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
