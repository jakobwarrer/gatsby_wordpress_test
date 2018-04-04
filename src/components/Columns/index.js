import React from 'react'

const Columns = props => {
  const paddingType = `padding--${props.layout.settings_padding_type}`
  const paddingSize = `section--${props.layout.settings_padding_size}`
  const backgroundColor = `section--${props.layout.settings_background}`
  // all classes
  const classData = `${paddingType} ${paddingSize} ${backgroundColor}`
  // id
  const id = props.layout.settings_id ? props.layout.settings_id : null
  // title
  const title = props.layout.add_title ? props.layout.title_text : null
  const columns = props.layout.columns
  const allColumns = [
    props.layout.column_1,
    props.layout.column_2,
    props.layout.column_3,
    props.layout.column_4,
  ]
  return (
    <section id={id} className={classData}>
      <div className="container">
        <h2
          className="section__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="row">
          {allColumns.map((thisColumn, index) => {
            if (index + 1 <= columns) {
              const breakpoint = thisColumn.breakpoint
              const width = `col-${breakpoint}-${thisColumn.width}`
              const offset = `col-${breakpoint}-offset-${thisColumn.offset}`
              const columnClass = `${width} ${offset}`

              const content = thisColumn.content

              return (
                <div
                  key={index}
                  className={columnClass}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}
export default Columns
