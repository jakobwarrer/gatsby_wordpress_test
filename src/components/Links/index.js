import React from 'react'
import SVG from 'react-inlinesvg'

const Links = props => {
  const paddingType = `padding--${props.layout.settings_padding_type}`
  const paddingSize = `section--${props.layout.settings_padding_size}`
  const backgroundColor = `section--${props.layout.settings_background}`
  // all classes
  const classData = `${paddingType} ${paddingSize} ${backgroundColor}`
  // id
  const id = props.layout.settings_id ? props.layout.settings_id : null
  // title
  const title = props.layout.add_title ? props.layout.title_text : null
  const text = props.layout.links_text
  return (
    <section id={id} className={classData}>
      <div className="container">
        <h2
          className="section__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="links__list">
            {props.layout.links_links.map((link, index) => {
              let thisLink = link.link.url.split('/')
              thisLink.pop()

              return (
                <a
                  key={index}
                  target={link.link.target}
                  href={thisLink.pop()}
                  className="links__item"
                >
                  <div className="links__item--image svg">
                    <SVG src={link.icon.url} />
                  </div>
                  <h3>{link.link.title}</h3>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Links
