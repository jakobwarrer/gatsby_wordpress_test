import React from 'react'

const Cta = props => {
  const sectionStyle = {
    backgroundImage: `url(${props.data.background.source_url})`,
  }
  return (
    <section
      className="cta section--m section--grey-dark section--image"
      style={sectionStyle}
    >
      <div className="container">
        <div className="cta_title">
          <h2 dangerouslySetInnerHTML={{ __html: props.data.title }} />
        </div>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 entry">
            <div dangerouslySetInnerHTML={{ __html: props.data.content }} />

            <div className="links__wrapper">
              {props.data.buttons.map((button, index) => (
                <a
                  key={index}
                  className={`btn btn__${button.style} ${button.link_type}`}
                  href={button.link.url}
                  target={button.link.taret}
                >
                  {button.link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
