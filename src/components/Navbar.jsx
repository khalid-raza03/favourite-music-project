import React from "react";
import styles from "./style.module.css" // import styles from custom css
// music card navbar
function Navbar({ musicData }) {
    return (
        <div className="w-full px-5 sm:px-10 lg:px-20 py-3 flex justify-between items-center border-b-2 border-b-orange-500">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg  font-bold text-violet-300">Favourite Songs</h1>
            <div className="flex p-2 px-4 bg-violet-600 rounded-lg text-white text-sm gap-3 ">
                     {/* adding custom css classes  */}
                    <h3 className={styles.fonts}>Favourites</h3>
                    {/* adding multiple custom css classes */}
                    <h4 className={`${styles.fonts} ${styles.favouritesCount}`}>{musicData.filter(item => item.added).length}</h4>
                </div >
            </div>
        
    );
}

export default Navbar;

   