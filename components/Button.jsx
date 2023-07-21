import Link from "next/link";

const Button = ({ title, to }) => {
  return (
    <Link
      href={to ? to : "/"}
      className=" bg-[#0c5c75] hover:bg-[#0c5c75] text-white font-bold py-2 px-4 rounded">
      {title}
    </Link>
  );
};

export default Button;
