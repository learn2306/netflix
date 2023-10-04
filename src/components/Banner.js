import React from 'react';

const Banner = ({ movie }) => {
	//console.log(movie)
  return (
	<div style={{		
		backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.poster_path}` + ")"
	}} className='banner'>

		<div className='banner-info'>
			<h1>{movie.title}</h1>
			<p>{movie.overview}</p>
		</div>
	
	</div>
  )
}

export default Banner