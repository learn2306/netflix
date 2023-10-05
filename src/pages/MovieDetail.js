import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
//import Video from '../components/Video';

const MovieDetail = () => {
	let [showDetail, setShowDetail] = useState({});
	const API_KEY = process.env.REACT_APP_API_KEY;
	let {id} = useParams();

	const detail = async() => {
		let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
		let response = await fetch(url);
		let data = await response.json();
		//console.log(data);
		setShowDetail(data);
	}

	useEffect(()=> {
		detail();
	}, [showDetail])	

  return (
  	<Container>
		<Row>
			<Col lg={6} className='detail-section'>
				<div
					className="detail-img"
					style={{
					backgroundImage:
						"url(" +
						`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${showDetail?.poster_path}` +
						")",						
				}}
				></div>
			</Col>

			<Col lg={6} className="detail-info-group">
				<div className='detail-title'>{showDetail?.name}</div>		
				<div className='detail-info2'>
					<div>
						<Badge bg="danger" text="light">First Air Date</Badge>
						{showDetail?.first_air_date}
					</div>		
					<div>
						<Badge bg="danger" text="light">Origin Country / Original Language</Badge>
						{showDetail?.origin_country} / {showDetail?.origin_country}						
					</div>						
					<div>
						<Badge bg="danger" text="light">Popularity</Badge>
						{showDetail?.popularity}	
					</div>
					<div>
						<Badge bg="danger" text="light">Vote Average</Badge>
						{showDetail?.vote_average}	
					</div>
					<div>
						<Badge bg="danger" text="light">Original Title</Badge>
						{showDetail?.original_name}
					</div>
					<div className='detail-adult'>
						<Badge bg="danger" text="light">Age</Badge>
						{showDetail?.adult? "19+":"Under 18"}
					</div>										
				</div>
				<div className="movpicture">
					<div className="detail-backdrop"
						style={{
						backgroundImage:
							"url(" +
							`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${showDetail?.backdrop_path}` +
							")",				
						}}
						></div>
					{/* <div className="vid"><Video /></div> */}									
				</div>
			</Col>
			<Col lg={12} className="detail-info-group">							
				<div className='detail-tagline'>{showDetail?.tagline}</div>
				<div className='detail-overview'>{showDetail?.overview}</div>				
			</Col>
		</Row>
	</Container>

  )
}

export default MovieDetail