import React from 'react'
import {close, menu,logo} from "../assets";
import SearchBar from './SearchBar';
import Data from "../assets/Data.json";

const MenuBar = () => {
  return (
    <div>
        <div className="flex-row py-2 justify-between w-9/12 float-left">
            <img src={logo} alt="WorksheetWizz" className="w-[100px] h-[90px] relative bottom-2 right-3" />
            <br/>
            <p className="flex-1 font-poppins font-semibold px-2 text-white relative right-3 bottom-3">Welcome!</p>
            <p className="flex-1 font-poppins font-semibold px-2 text-white relative right-3 bottom-3">Use the search bar to locate specific files. Alternatively you may navigate through the folders and browse all of our resources.</p>
        </div>

        <div className="flex w-3/12 justify-center float-right relative right-8">
            <SearchBar placeholder="Enter a File Name..." data={Data}/>
        </div>

    </div>
  )
}

export default MenuBar;
