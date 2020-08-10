import React from 'react'

const Description = (state) =>{
  // console.log(state.location.state.state)
  const oneSuper = state.location.state.state
  return(
    <div class="flex justify-center bg-indigo-100 ">
    <div class="max-w-sm rounded overflow-hidden shadow-2xl">
      <img src={oneSuper.images.md} class="w-full"></img>
      <div class="font-bold text-xl text-center mb-2">{oneSuper.name}</div>
      <ul class="px-6 py-4">
        <li class="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{oneSuper.biography.fullName}</li>
        <li class="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Gender: {oneSuper.appearance.gender}</li>
        <li class="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Occupation: {oneSuper.work.occupation}</li>
        <li class="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Alignment: {oneSuper.biography.alignment}</li>
        <li class="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Race: {oneSuper.appearance.race}</li>        
      </ul>
    </div>
    </div>
  )
}

export default Description