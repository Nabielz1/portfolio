import "../App.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div className="w-16 h-16 border-5 border-t-5 border-black border-t-gray-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
