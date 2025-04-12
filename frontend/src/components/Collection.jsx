import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const Collection = memo(() => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cars', name: 'Cars' },
    { id: 'trucks', name: 'Trucks' },
    { id: 'tracks', name: 'Tracks' }
  ]

  const collectionItems = [
    { id: 1, image: '/src/assets/card1.png', category: 'cars' },
    { id: 2, image: '/src/assets/card2.png', category: 'cars' },
    { id: 3, image: '/src/assets/card3.png', category: 'cars' },
    { id: 4, image: '/src/assets/card4.png', category: 'trucks' },
    { id: 5, image: '/src/assets/card5.png', category: 'cars' },
    { id: 6, image: '/src/assets/card6.png', category: 'cars' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === activeCategory)

  return (
    <>
      <section className="collection-section">
        <div className="collection-container">
          <h1>Our Impressive Collection of hot wheels</h1>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="collection-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="collection-card">
                <img src={item.image} alt={`Hot Wheels Car ${item.id}`} />
                <button className="buy-now">Buy now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="design-element">
        <img 
          src="/src/assets/design element.png" 
          alt="Child playing with Hot Wheels"
          className="design-card-image"
        />
      </section>
    </>
  )
})

Collection.displayName = 'Collection'

export default Collection 