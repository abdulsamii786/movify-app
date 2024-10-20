const Header = () => {
  return (
    <div className="flex items-center justify-between bg-cyan-950 px-[10%]">
      <div className="">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-900 text-5xl font-extrabold py-3">
          MOVIFY<span className="text-cyan-200">.</span>
        </h2>
      </div>
      <div className="flex gap-10 text-white font-normal  ">
        <p className="cursor-pointer">Movies</p>
        <p className="cursor-pointer">TV Shows</p>
        <p className="cursor-pointer">People</p>
        <p className="cursor-pointer">More</p>
      </div>
    </div>
  );
};

export default Header;
