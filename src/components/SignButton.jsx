import { Link } from "react-router-dom";

const SignButton = () => {
  return (
    <>
      <Link to={'/discretion'}>
        <button className=" text-black border border-[#000000] text-[12px] bg-transparent px-4 py-2 rounded hover:text-white  hover:bg-[#FF4500] hover:border-[white] duration-300">
          Sign in
        </button>
      </Link>
    </>
  );
};

export default SignButton;
