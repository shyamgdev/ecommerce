import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader() {
  return (
    <div className="w-fit text-2xl animate-spin">
      <AiOutlineLoading3Quarters className="w-24 m-auto" />
    </div>
  );
}

export default Loader;
