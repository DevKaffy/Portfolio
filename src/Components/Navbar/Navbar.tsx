import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-[3.75rem]">
      <Link to="/" className="text-[#2978b5] text-[1.5rem] font-extrabold">
        KA.
      </Link>
      <ul className="flex items-center justify-end mt-[1.68rem] gap-[2.06rem] font-medium text-[1.25rem] list-none">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
