import { memo } from 'react'

const footerData = {
  about: {
    title: 'ABOUT',
    links: ['Contact Us', 'About Us', 'Corporate Information']
  },
  consumerPolicy: {
    title: 'CONSUMER POLICY',
    links: [
      'Cancellation & Returns',
      'Terms of Use',
      'Security',
      'Privacy',
      'Sitemap',
      'Grievance Redressal',
      'EPR Compliance'
    ]
  },
  help: {
    title: 'HELP',
    links: ['Payments', 'Shipping', 'Cancellation & Returns']
  },
  usefulLinks: {
    title: 'USEFUL LINK',
    links: [
      'Privacy Policy',
      'Terms & Conditions',
      'Return & Cancellation',
      'Shipping Policy & Charges'
    ]
  },
  address: {
    title: 'REGISTERD OFFICE ADDRESS',
    lines: [
      'Survey No. 140 - 141/1,',
      'Off. Mandava - Nagpur',
      'Rd, Waranga',
      'Maharashtra',
      '441108 Contact Us'
    ]
  }
}

const Footer = memo(() => {
  const renderLinks = (links) => (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-section">
        <h4>{footerData.about.title}</h4>
        {renderLinks(footerData.about.links)}
      </div>
      
      <div className="footer-section">
        <h4>{footerData.consumerPolicy.title}</h4>
        {renderLinks(footerData.consumerPolicy.links)}
      </div>
      
      <div className="footer-section">
        <h4>{footerData.help.title}</h4>
        {renderLinks(footerData.help.links)}
      </div>
      
      <div className="footer-section">
        <h4>{footerData.usefulLinks.title}</h4>
        {renderLinks(footerData.usefulLinks.links)}
      </div>
      
      <div className="footer-section">
        <h4>{footerData.address.title}</h4>
        {footerData.address.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} FHotwheel.com</p>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer 