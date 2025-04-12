import { memo } from 'react'
import PropTypes from 'prop-types'
import { SecureIcon, ShippingIcon, SupportIcon } from './Icons'

const iconMap = {
  secure: SecureIcon,
  shipping: ShippingIcon,
  support: SupportIcon
}

const Features = memo(({ features }) => {
  return (
    <div className="features">
      {features.map(({ id, title, icon }) => {
        const Icon = iconMap[icon]
        return (
          <div key={id} className="feature">
            <Icon />
            <h3>{title}</h3>
          </div>
        )
      })}
    </div>
  )
})

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
}

Features.displayName = 'Features'

export default Features 