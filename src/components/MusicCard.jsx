function MusicCard({ musicData, handleClick, id }) {
  const { title, album, artist, image, added } = musicData;

  return (
    <div className="bg-violet-300 w-60 p-4 pb-8 border rounded-md shadow-lg  mt-10 flex flex-col gap-2 hover:scale-95 transition-all duration-500">
      <div className="w-full h-20 bg-violet-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="music-details mt-4 flex flex-col items-start gap-1">
        <h2 className="text-white text-xl  font-semibold">{title}</h2>
        <p className="text-white text-sm font-light">{album}</p>
        <p className="text-white text-xs font-bold italic">{artist}</p>
      </div>
      <button
        onClick={() => handleClick(id)}
        className={` ${
          added === false ? "bg-violet-600" : "bg-green-600"
        } px-4 py-3 whitespace-nowrap border-2 transition-all duration-300 ease-in-out  
         ${
          added === false ? "border-violet-600" : "border-green-600"
        } hover:bg-white text-white text-xs rounded-full align-self-center

        ${added === false ? "hover:bg-violet-500" : "hover:bg-green-500"} ${
          added === false ? "hover:text-violet-600" : "hover:text-green-600"
        } hover:scale-95 transition-all duration-300`}
      >
        {added === false ? "Add to favourite" : "Remove "}
      </button>
    </div>
  );
}

export default MusicCard;
