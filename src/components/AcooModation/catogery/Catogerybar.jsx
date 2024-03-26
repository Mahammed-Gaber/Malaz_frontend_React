import { useEffect, useState } from 'react'
import './Catogerybar.css'
import axios from 'axios'

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
  useEffect(() => {
    axios.get('http://localhost:3000/places/getAllPlaces')
      .then(response => {
        console.log('Form data sent successfully:', response.data.Places)
        setCards(response.data.Places)
      })
      .catch(error => {
        console.error('Error sending form data:', error)
      })
  }, [])

  const handleClick = cardId => {
    setActiveCardId(cardId)
    console.log(activeCardId);
  }

  return (
    <>
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
