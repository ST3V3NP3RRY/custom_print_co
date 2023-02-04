const Banner = ({ text }) => {
  return (
    <div className="h-48 w-screen bg-gradient-to-r from-red-400 to-red-300 flex items-center justify-center">
      <h2 className="text-5xl">{text}</h2>
    </div>
  );
};

export default Banner;
