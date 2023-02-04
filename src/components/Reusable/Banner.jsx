const Banner = ({ text }) => {
  return (
    <div className="h-48 w-screen bg-red-200 flex items-center justify-center">
      <h2 className="text-5xl">{text}</h2>
    </div>
  );
};

export default Banner;
