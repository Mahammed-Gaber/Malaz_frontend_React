// import React, { useEffect, useState } from 'react'
// import Card from './MovieCard';
// import { axiosInstance } from '../axios/instance';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMovie } from '../Redux/slices/Cardlice';
// import Card from '../../components/HOME/cards/cards';

// function Movie() {
//     // const [Card, setCard] = useState([]);
//     const dispatch = useDispatch();
//     const Card = useSelector(state => state.movieReducer.Card);
//     const flag = useSelector(state => state.movieReducer.loading);


//     useEffect(() => {
//         // axiosInstance.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c").then(data => {
//         //     console.log(data.data.results)
//         //     setCard([...data.data.results]);
//         // })
//         dispatch(getMovie());
//     }, [])
//     return (<>
//         {
//             flag ? <h1>Loading</h1> : <div className='row'>
//                 {
//                     Card.map((item) => {
//                         return <div key={item.id} className='col-3 mt-1'> <MovieCard data={item} /></div>
//                     })
//                 }
//             </div>
//         }
//     </>

//     )
// }

// export default Card