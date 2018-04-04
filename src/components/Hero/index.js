import React from 'react'

const Hero = props => {
  const sectionStyle = {
    backgroundImage: `url(${props.hero})`,
  }
  return (
    <header className="page__header" role="banner">
      <div className="page__hero section--l" style={sectionStyle}>
        <div className="container">
          <h1 className="page__title" data-unsp-sanitized="clean">
            {props.acf.title}
          </h1>
        </div>
      </div>
    </header>
  )
}
export default Hero
