function Card({ user, handleRemoveData }) {
  return (
    <div className="flex justify-center items-center flex-col gap-3 bg-sky-400 rounded-xl px-10 py-4 w-60 h-auto">
      <div className="rounded-full bg-yellow-400 w-16 h-16 overflow-hidden">
        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-white font-bold text-lg">{user.name}</h1>
      <h3 className="opacity-50 text-xs font-semibold text-purple-800">
        {user.singer}
      </h3>
      <button onClick={handleRemoveData} className="px-5 py-3 rounded-2xl text-xs bg-purple-500 text-white font-semibold hover:bg-purple-400 border hover:border-purple-500 transition-all duration-300">
        Remove
      </button>
    </div>
  );
}

export default Card;
