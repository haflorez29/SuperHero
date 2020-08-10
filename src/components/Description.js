import React from 'react'

const Description = (state) =>{
  // console.log(state.location.state.state)
  const oneSuper = state.location.state.state
  return(
    <div>
      <img src={oneSuper.images.md}></img>
      <div>{oneSuper.name}</div>
      <ul>
        <li>{oneSuper.biography.fullName}</li>
        <li>Gender: {oneSuper.appearance.gender}</li>
        <li>Occupation: {oneSuper.work.occupation}</li>
        <li>Alignment: {oneSuper.biography.alignment}</li>
        <li>Race: {oneSuper.appearance.race}</li>
        
      </ul>
    </div>
  )
}

export default Description