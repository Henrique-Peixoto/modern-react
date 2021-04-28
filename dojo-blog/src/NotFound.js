import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="nf-wrapper">
      <div className="nf-title-message">
        <div className="nf-title">
          <span className="nf-number">404</span>
          <span className="nf-subtitle">not found</span>
        </div>
        <div className="nf-message">Sorry, the page you were looking for could not be found!</div>
      </div>
      <div className="nf-homepage">
        <Link to="/">Back to the homepage</Link>
      </div>
    </div>
  )
}

export default NotFound
