import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center z-50">
        <ClipLoader color="#db4444" size={100} />
      </div>
    </>
  );
};

export default Loading;
