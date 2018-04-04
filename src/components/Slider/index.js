import React from 'react'

const Slider = props => {
  const sectionStyle = {
    backgroundImage: `url(${props.slider.slides[0].background.source_url})`,
  }
  return (
    <section className="slider" style={sectionStyle}>
      <div className="container slider__inner entry">
        <div className="slider__caption">
          <h2 dangerouslySetInnerHTML={{ __html: props.slider.caption }} />
        </div>
      </div>
    </section>
  )
}
export default Slider
