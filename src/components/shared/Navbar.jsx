import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between py-6 px-24 ">
      <div>
        <Link to={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>
      <ul>
        <li className="flex gap-4">
          <Link to={"mohinur"}>Mohibur</Link>
          <Link to={"ibrohim"}>Ibrohim</Link>
          <Link to={"ismoyil"}>Ismoyil</Link>
          <Link to={"hamidullox"}>Hamidullox</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
