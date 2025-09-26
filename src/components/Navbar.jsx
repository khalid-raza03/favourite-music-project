
import styles from "./style.module.css"; // import styles from custom css
// music card navbar
function Navbar({ musicData }) {
  
  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 py-3  flex-wrap  items-center border-b-2 border-b-purple-400 flex justify-between gap-y-2">
      <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-md  font-bold text-violet-300 ">
        Favourite Songs
      </h1>
      {/* search */}

      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Your Favourite"
        className="rounded-2xl px-3 py-4 border border-purple-400 text-white font-bold text-sm w-auto   transition-all duration-500 ease-in-out focus-within:bg-white focus-within:text-purple-700 md:block hidden"
      />

      <div className="flex p-2 px-4 bg-violet-600 rounded-lg text-white text-sm gap-3 ">
        {/* adding custom css classes  */}
        <h3 className={styles.fonts}>Favourites</h3>
        {/* adding multiple custom css classes */}
        <h4 className={`${styles.fonts} ${styles.favouritesCount}`}>
          {musicData.filter((item) => item.added).length}
        </h4>
      </div>

      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Your Favourite"
        className="rounded-2xl px-3 py-4 border border-purple-400 text-white font-bold text-sm w-auto   transition-all duration-500 ease-in-out focus-within:bg-white focus-within:text-purple-700 md:hidden basis-full block my-4"
      />
    </div>
  );
}

export default Navbar;
