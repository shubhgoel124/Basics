import { memo } from 'react'
import PropTypes from 'prop-types'

const Card = memo(({ image, logo, hotWheelsLogo, title, description, subtitle, alt, categories }) => {
  const getLearnMoreLink = () => {
    if (title.includes('Formula 1')) {
      return 'https://hotwheels.mattel.com/shop/en-us/hw/hot-wheels-formula-1';
    } else if (title.includes('Monster Trucks')) {
      return 'https://hotwheels.mattel.com/shop/en-us/hw/monster-trucks';
    }
    return 'https://hotwheels.mattel.com';
  };

  return (
    <div className="card" role="article">
      <div className="card-image-container">
        <img 
          src={image} 
          alt={alt} 
          loading="lazy"
          className="card-main-image"
        />
      </div>
      <div className="card-content">
        {categories?.map((category, index) => (
          <span key={index} className={`category-tag ${category.className}`}>
            {category.name}
          </span>
        ))}
        {logo && <img src={logo} alt={`${title} logo`} className="card-logo" />}
        {hotWheelsLogo && (
          <>
            <img src={hotWheelsLogo} alt="Hot Wheels Logo" className="hot-wheels-logo" />
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </>
        )}
        <h2>{title}</h2>
        <p>{description}</p>
        <a 
          href={getLearnMoreLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="learn-more"
        >
          Learn More
          <span className="arrow">›</span>
        </a>
      </div>
    </div>
  )
})

Card.propTypes = {
  image: PropTypes.string.isRequired,
  logo: PropTypes.string,
  hotWheelsLogo: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  alt: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired
    })
  )
}

Card.displayName = 'Card'

export default Card 