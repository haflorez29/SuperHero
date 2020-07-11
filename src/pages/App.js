import React, {useState, useEffect} from 'react';
import Grid from '../components/Grid'
import axios from 'axios'

const App = ()=> {
  const [Super,setSuper] = useState("");

  useEffect( () => {   
    for(let i=1; i<4; i++){
      axios.get(`https://superheroapi.com/api.php/3340656869279895/${i}`).then((res) =>{
        const supers = res.data
        return (
          setSuper(supers)
          )
        })
      }
    },[])

          console.log(Super)
const data=Super
  return (
    <div className="App container-fluid"> 
      <Grid
      data={data}>
      </Grid>        
    </div>
  );
}

export default App;
