import React from "react";
import './File.css'
import { Link } from 'react-router-dom';

function Folder({title,img,body,link,target}){
  return(
    
    <div className='card-container'>
      <Link to={link}>

      <img src={img} class="card_img"/>
        <div className="card-content">
            <h3>{title}</h3>
        </div>
        <div className="btn">
          <button>
            <span>{body}</span>
          </button>
        </div>

      </Link>
    </div>

  )
}

export default Folder