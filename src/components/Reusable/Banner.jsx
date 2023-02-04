const Banner = ({ text }) => {
  return (
    <div className="h-48 w-screen bg-gradient-to-r from-red-400 to-red-300 flex items-center justify-center">
      <h2 className="text-6xl font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        {text}
      </h2>
    </div>
  );
};

export default Banner;
