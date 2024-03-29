import { useEffect, useState } from 'react'
import './Catogerybar.css'
import axios from '../../../axios/instance';
import Accomodation from '../AccomodationArea/Accomodation';

const items = [
  { id: 'card1', icon: 'fa-solid fa-house-medical-flag' },
  { id: 'card2', icon: 'fa-solid fa-wheat-awn' },
  { id: 'card3', icon: 'fa-solid fa-umbrella-beach' },
  { id: 'card4', icon: 'fa-solid fa-person-shelter' },
  { id: 'card5', icon: 'fa-solid fa-arrow-up-from-water-pump' },
  { id: 'card6', icon: 'fa-solid fa-person-drowning' }
]


function Catogerybar () {
  const [activeCardId, setActiveCardId] = useState(null)
  const [cards, setCards] = useState([])

  function generateQuery(bedsGt, priceLte, sort, fields, limit, page) {
    const queryParams = new URLSearchParams();
    if (bedsGt) queryParams.append('beds[gt]', bedsGt);
    if (priceLte) queryParams.append('price[gte]', priceLte);
    if (sort) queryParams.append('sort', sort);
    if (fields) queryParams.append('fields', fields);
    if (limit) queryParams.append('limit', limit);
    if (page) queryParams.append('page', page);
    return queryParams.toString();
  }

<<<<<<< HEAD
  // console.log(generateQuery(2, 250))
=======
  console.log(generateQuery(2, 250))
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d

  useEffect(() => {
    if (activeCardId !== null)
    // axios.get(`http://localhost:3000/places/getAllPlaces?${activeCardId ? 'activeCardId=' + activeCardId : ''}${filter2 ? '&filter2=' + filter2 : ''}${filter3 ? '&filter3=' + filter3 : ''}`)

<<<<<<< HEAD
    axios.get(`/place/getAllPlaces?${generateQuery(2, 90)}`)
      .then(response => {
=======
    axios.get(`http://localhost:3000/place/getAllPlaces?${generateQuery(2, 90)}`)
      .then(response => {
        console.log(response)
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
        setCards(response.data.Places)
      })
      .catch(error => {
        console.error('Error sending form data:', error)
      })
<<<<<<< HEAD
    }, [activeCardId])

    const handleClick = cardId => {
      setActiveCardId(cardId)
    }
    
    return (
      <>
=======
  }, [activeCardId])

  const handleClick = cardId => {
    setActiveCardId(cardId)
  }

  return (
    <>
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
      <div className='all'>
        <div className='section_title text-center'>
          <div className='wrapper'>
            {items.map(item => (
              <div
                key={item.id}
                className={`item ${activeCardId === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                <i className={item.icon}></i>
              </div>
            ))}
          </div>
        </div>
        {cards?.map(card => (
          <div
            key={card.id}
            className={`card ${activeCardId === card.id ? '' : 'd-none'}`}
          >
            {card.content}
          </div>
        ))}
      </div>
    </>
  )
}

export default Catogerybar
