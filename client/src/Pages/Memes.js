import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
// import memeImage from "../path/to/your/image"; // Import your image here

const Memes = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-3/4 h-screen'>
        <Navbar pagename={"Мемы"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        {/* <img src={memeImage} alt='Meme' /> Insert your image here */}
      </div>
    </div>
  );
};

export default Memes;
