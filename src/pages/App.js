import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Heroes from "../components/Heroes"
import Pagination from "../components/Pagination"
import "../styles/Grid.css";

const App = () => {
  const [Super, setSuper] = useState([]);
  const [currentPage, setCurrentPage] = useState (1);
  const [heroPerPage] = useState (9);

  useEffect(() => {
    let superT = "";
    axios
      .get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((res) => {
        // console.log(res.data[3])
        superT = res.data;
        console.log(superT);
        setSuper(superT);
      });
  }, [setSuper]);

  const indexOfLastHeroes = currentPage * heroPerPage;
  const indexOfFirsPost = indexOfLastHeroes - heroPerPage;
  const currentPosts =  Super.slice(indexOfFirsPost, indexOfLastHeroes);
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App ">
      <Header></Header>
      <Pagination
       heroPerPage={heroPerPage} 
       totalHero={Super.length} 
      paginate={paginate}></Pagination>
      <Heroes Super={currentPosts}></Heroes>
    </div>
  );
};

export default App;
