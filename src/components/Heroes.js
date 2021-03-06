import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import "../styles/Heroes.css";

const Heroes = ({ Super }) => {
  const [Sup, setSup] = useState({id:""});
  const [votesLike, setVotesLike] = useState("");

  let like = ""
  let dislike = ""
  console.log(Sup.id)
  // console.log(votesLike);

  localStorage.setItem(`${Sup.name}`, votesLike);
  const storage = window.localStorage.getItem(`${Sup.name}`);
  console.log(storage)

  if (storage ==  0) {
    like = "like";
    dislike = "clear"
  } else if (storage == 1) {
    dislike = "dislike";
    like = "clear"
  }


  const addCount = (valor) =>{
    // console.log(valor)
    setVotesLike(valor)

  }

  // console.log(votesLike);

  return (
    <div className="flex  flex-wrap m-4 justify-center">
      {Super.map((e) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6"
          key={e.id}>
            <Link
              to={{
                pathname: "/Description",
                state: { state: e },
              }}
           
            >
              <div className="" id="card">
                <img src={e.images.sm} className="w-full" alt="image" />
                <div className="px-6 py-4">
                  <h5 className="font-bold text-xl mb-2">{e.name}</h5>
                </div>
              </div>
            </Link>
            <ul className="px-6 py-4">
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <button
                  onClick={() => {
                    setSup(e);
                    addCount(0)
                    }}
                  className={like}
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </button>
              </li>
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <button
                  onClick={() => 
                  { setSup(e);
                    addCount(1)                  
                  }}
                  className={dislike}
                >
                  <FontAwesomeIcon icon={faHeartBroken}></FontAwesomeIcon>
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Heroes;
