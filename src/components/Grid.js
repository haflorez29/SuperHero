import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import "../styles/Grid.css";

const Grid = ( data ) => {
  console.log(data)
  return (
    <div className="card col-6 m-3" id="card">
      <img src="..." className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
      </div>
      <ul className="list-group list-group-flush d-flex flex-row justify-content-between ">
        <li className="list-group-item ">
          <button>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </button>
        </li>
        <li className="list-group-item">
          <button>
            <FontAwesomeIcon icon={faHeartBroken}></FontAwesomeIcon>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Grid;
