let initialState = {
	airingMovies: [],
	popularMovies: [],
	topRatedMovies: [],
	upcomingMovies: [],
	genreList: [],
	loading: true
}

const movieReducer = (state=initialState, action) => {
	let {type, payload} = action;

	switch(type) {
		case "GET_MOVIES_REQUEST":
			return {...state, loading: true}

		case "GET_MOVIE_SUCCESS":
			return {
				...state,
				airingMovies: payload.airingMovies,
				popularMovies: payload.popularMovies,
				topRatedMovies: payload.topRatedMovies,
				upcomingMovies: payload.upcomingMovies,
				genreList: payload.genreList,
				loading: false,
			};
			
		case "GET_MOVIES_FAILURE":
			return {...state, loading: false}

			default:
				return {...state}
	} 
}

export default movieReducer