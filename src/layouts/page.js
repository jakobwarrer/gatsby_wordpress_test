import React from 'react'
import Link from 'gatsby-link'
import Columns from '../components/Columns'
import Links from '../components/Links'
import Slider from '../components/Slider'
import Hero from '../components/Hero'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderSwitch(type, layout) {
    switch (type) {
      case 'WordPressAcf_columns':
        return <Columns layout={layout} />
      case 'WordPressAcf_layout_links':
        return <Links layout={layout} />
      default:
        return 'foo'
    }
  }
  render() {
    const post = this.props.data.wordpressPage
    const layouts = post.acf ? post.acf.layout_page : null
    const slider = post.acf ? post.acf.slider : null
    return (
      <div className="main">
        {slider != null ? <Slider slider={slider} /> : null}
        {post.slug != 'forside' ? (
          <Hero
            acf={post}
            hero={this.props.data.wordpressAcfOptions.page_hero.source_url}
          />
        ) : null}
        <div>
          <div>
            {layouts != null
              ? layouts.map((layout, index) => {
                  //classes
                  const type = layout.internal.type
                  return (
                    <div key={index}>{this.renderSwitch(type, layout)}</div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query pageQuery($slug: String) {
    wordpressAcfOptions {
      page_hero {
        source_url
      }
    }
    wordpressPage(slug: { eq: $slug }) {
      slug
      title
      acf {
        page_title
        add_hero
        page_hero
        slider {
          pause
          speed
          animation
          caption
          buttons
          slides {
            background {
              source_url
            }
          }
        }
        layout_page {
          ... on WordPressAcf_columns {
            id
            columns
            add_title
            settings_padding_type
            settings_padding_size
            settings_id
            settings_class
            settings_background
            settings_background_image_check
            settings_background_fixed
            settings_background_image
            title_text
            title_class
            column_1 {
              width
              breakpoint
              offset
              wordpress_id
              class
              title
              content
              buttons
            }
            column_2 {
              wordpress_id
              class
              title
              content
              buttons
            }
            column_3 {
              wordpress_id
              class
              title
              content
              buttons
            }
            column_4 {
              wordpress_id
              class
              title
              content
              buttons
            }
            internal {
              type
            }
          }
          ... on WordPressAcf_layout_links {
            id
            parent {
              id
            }
            children {
              id
            }
            add_title
            settings_padding_type
            settings_padding_size
            settings_id
            settings_class
            settings_background
            settings_background_image_check
            settings_background_fixed
            settings_background_image
            title_text
            title_type
            title_class
            links_text
            links_links {
              icon {
                wordpress_id
                title
                filename
                url
                alt
                author
                description
                caption
                name
                date
                modified
                mime_type
                type
                icon
                width
                height
              }
              link {
                title
                url
                target
              }
            }
            internal {
              type
              contentDigest
              owner
            }
          }
        }
      }
    }
  }
`
