import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MovieAction } from '../redux/actions/MovieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
	const dispatch = useDispatch();
	const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie);
	//console.log("home", popularMovies)
	
	/* const {popularMovies, topRatedMovies, upcomingMovies} = useSelector((state)=> state.movie) */

	useEffect(() => {
		dispatch(MovieAction.getMovies())
	}, []);

	if (loading) {
		return (
			<Loading />
		)
	}

		return (
			<div>	
				{/* <Loading />	 */}
				<Banner movie={popularMovies.results[12]} />
				<div className='contents'>		
					<h2>What's Popular</h2>
					<MovieSlide movie={popularMovies} />
					<h2>Top Rated Movies</h2>
					<MovieSlide movie={topRatedMovies} />
					<h2>Upcoming Movies</h2>		
					<MovieSlide movie={upcomingMovies} />
				</div>
			</div>
			)
	} 


export default Home