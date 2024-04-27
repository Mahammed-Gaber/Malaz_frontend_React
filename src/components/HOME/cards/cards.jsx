import './cards.css'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../axios/instance'
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Card () {
  // const nav = useNavigate();
  // const dispatch = useDispatch();
  // function go() {
  //     dispatch(addToFav(data));
  //     nav()
  // }
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    const getAllPlaces = async (queryObj = {}) => {
      try {
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])

        // Advanced filtering (optional)
        if (Object.keys(queryObj).length > 0) {
          let queryString = JSON.stringify(queryObj)
          queryString = queryString.replace(
            /\b(gt|gte|lt|lte)\b/g,
            match => `$${match}`
          )
          queryObj = JSON.parse(queryString)
        }

        const response = await axiosInstance.get(
          '/place/getAllPlaces?limit=4&page=1',
          {
            params: queryObj
          }
        )
        setData(response.data.places)
        // return response.data
      } catch (error) {
        console.error('Error fetching places:', error.message)
        // throw error // Re-throw for error handling in the calling component
        setError(error.message);
      }
    }
    getAllPlaces()
  }, [])

  function go (card) {
    nav(`/Accomodation/Mydeatails/${card._id}`, { state: card })
  }


  return (
    <>
      {/*
        // nav(`/moviedet/${data.id}`, { state: data });
    } */}
      {/* <!--================ Accomodation Area  =================--> */}
      {error && (
          <Stack sx={{ width: '50%'}} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
      )}

      <section className='accomodation_area section_gap'>
        <div className='container'>
          <div className='section_title text-center'>
            <h2 className='title_color'>Hotel Accomodation</h2>
            <p>
              Your Dream Getaway Starts Here: Plan Your Perfect Trip with an
              Unforgettable Hotel Stay
            </p>
          </div>
          <div className='row mb_30'>
            {data.map(card => {return <>
                <div key={data._id} className='col-lg-3 col-sm-6'>
                  <div className='accomodation_item text-center'>
                    <div className='hotel_img'>
                      <img src={card.imageCover} style={{width: '100%', height: '100%'}}  alt='' />
                      <button
                        to='Mydeatails'
                        className='btn theme_btn button_hover'
                        onClick={() => {
                          go(card)
                        }}
                      >
                        explore
                      </button>
                    </div>
                    <a href='#'>
                      <h4 className='sec_h4'>{card.place_name}</h4>
                    </a>
                    <h5>
                      ${card.price}<small>/night</small>
                    </h5>
                  </div>
                </div>
              </>
              })}
          </div>
        </div>
      </section>
      {/* <!--================ Accomodation Area  =================--> */}
    </>
  )
}

export default Card
/////////////////////////////////////////
// function Card({ data }) {

//     return (
//         <div className="card" style={{ width: "18rem" }}>

//             <div className="card-body">
//                 <h5 className="card-title">{data.name}</h5>
//                 <p className="card-text">
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary" style={{ backgroundColor: data.color }}>
//                     {data.age}
//                 </a>
//             </div>
//         </div>
//     )
// }

// // export default Card
