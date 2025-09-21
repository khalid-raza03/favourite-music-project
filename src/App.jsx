import { useState } from "react";
import MusicCard from "./components/MusicCard";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Form from "./components/Form";
//function for filling data in components
function App() {
  const musicData = [
    {
      title: "Song One",
      album: "Album One",
      artist: "Artist One",
      image:
        "https://images.unsplash.com/photo-1755128368298-198903712688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Two",
      album: "Album Two",
      artist: "Artist Two",
      image:
        "https://images.unsplash.com/photo-1754338785265-487bdaf99827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Song Three",
      album: "Album Three",
      artist: "Artist Three",
      image:
        "https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(musicData);
  // to add or remove from favourites
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, idx) => {
        if (idx === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  // state for form data
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveData = (index) => {
    setUsers(users.filter((user, idx) => idx !== index));
  };

  return (
    <div className="w-full min-h-screen p-2 sm:p-5 lg:p-10 font-sans bg-custom">
      <Navbar musicData={songData} />
      <div className="px-10 flex flex-wrap justify-center gap-5">
        {songData.map((music, index) => (
          <MusicCard
            key={index}
            musicData={music}
            handleClick={handleClick}
            id={index}
          />
        ))}
      </div>
      <div className="container mx-auto py-3">
        <h1 className="text-purple-700 font-bold  text-2xl md:text-3xl lg:text-4xl mb-4 text-center mt-5">
          Custom Song Wishlist
        </h1>
        <Cards users={users} handleRemoveData={handleRemoveData} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
