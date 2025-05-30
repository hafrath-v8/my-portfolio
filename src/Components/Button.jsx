import { FiMenu, FiX } from "react-icons/fi";

const Button = ({ toggleMenu, isOpen }) => {
  return (
    <div className="z-[100] lg:hidden block cursor-pointer" onClick={toggleMenu}>
      {isOpen ? <FiX size={26} strokeWidth={0.8} /> : <FiMenu size={26} strokeWidth={0.8} />}
    </div>
  );
};

export default Button;

