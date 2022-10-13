import React from "react";
import './Folder.css'
import { Link } from 'react-router-dom';

function Folder({title,img,body,link,target}){
  return(
    
    <div className='folder-container'>
      <Link to={link}>

      <img src={img} class="folder_img"/>
        <div className="folder-content">
            <h3>{title}</h3>
        </div>
        
        <div className="fbtn">
          <button>
            <span>{body}</span>
          </button>
        </div>

      </Link>
    </div>

  )
}

export default Folder