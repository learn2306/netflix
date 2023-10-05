import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MovieAction } from '../redux/actions/MovieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
	const dispatch = useDispatch();
	const {airingMovies, popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie);
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
				<Banner movie={popularMovies.results[3]} />
				<div className='contents'>	
					<h2>Airing Today</h2>	
					<div className="items">
						<MovieSlide movie={airingMovies} />
					</div>					
					<h2>What's Popular</h2>
					<div className="items">
						<MovieSlide movie={popularMovies} />
					</div>
					<h2>Top Rated TV</h2>
					<div className="items">
						<MovieSlide movie={topRatedMovies} />
					</div>	
					<h2>On The Air TV</h2>
					<div className="items">						
						<MovieSlide movie={upcomingMovies} />
					</div>				
				</div>
			</div>
			)
	} 


export default Home