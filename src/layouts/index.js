import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Cta from './cta'
import './index.css'

const TemplateWrapper = ({ children, data }) => {
  const menu = data.wordpressWpApiMenusMenusItems.items
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header menu={menu} options={data.wordpressAcfOptions} />
      <div>{children()}</div>
      <Cta data={data.wordpressAcfOptions.cta} />
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const menuQuery = graphql`
  query menuQuery {
    wordpressWpApiMenusMenusItems(slug: { eq: "primaer-menu" }) {
      slug
      items {
        object_slug
        title
        wordpress_children {
          object_slug
          title
        }
      }
    }
    wordpressAcfOptions {
      phone
      mail
      logo_text
      cta {
        title
        content
        background {
          id
          source_url
        }
        buttons {
          style
          link_type
          link {
            title
            url
            target
          }
          file
          link_text
        }
      }
    }
  }
`
