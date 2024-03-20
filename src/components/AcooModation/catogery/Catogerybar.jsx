import React, { useEffect, useState } from 'react'
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

const cards1 = [
  { id: 'card1', content: 'Card 1 content' },
  { id: 'card2', content: 'Card 2 content' },
  { id: 'card3', content: 'Card 3 content' },
  { id: 'card4', content: 'Card 4 content' },
  { id: 'card5', content: 'Card 5 content' },
  { id: 'card6', content: 'Card 6 content' }
]

function Catogerybar () {
  const [activeCardId, setActiveCardId] = useState(null)
  const [cards, setCards] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/place/getAllPlaces')
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
    // new = cards.filter(item=>item.cat)
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
