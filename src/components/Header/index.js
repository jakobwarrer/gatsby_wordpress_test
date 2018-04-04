import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/logo.png'

const Header = props => {
  const logoStyle = {
    backgroundImage: `url(${logo})`,
  }
  return (
    <div className="header section--grey">
      <div className="container--flex flex--justify flex--v-center">
        <div className="header__logo--wrapper">
          <a
            className="header__logo"
            href="/forside"
            title="FLEX BOGFØRING ApS"
            rel="home"
            data-unsp-sanitized="clean"
            style={logoStyle}
          >
            <h1 className="ir" data-unsp-sanitized="clean">
              FLEX BOGFØRING ApS
            </h1>
          </a>
          <p className="header__logo--text">Din personlige bogholder</p>
        </div>
        <div className="nav-toggle visible-xs">
          <span className="nav-toggle__label">Menu</span>
          <span className="nav-toggle__icon" />
        </div>
        <nav className="nav">
          <div className="nav--mobile">
            <ul className="nav__list">
              {props.menu.map((menuItem, index) => (
                <li
                  key={index}
                  className={`nav__item nav__item--/${menuItem.object_slug} ${
                    menuItem.wordpress_children ? 'has-dropdown' : ''
                  }`}
                >
                  <Link
                    className={`nav__link ${
                      menuItem.wordpress_children ? 'nav__dropdown-toggle' : ''
                    }`}
                    activeClassName="is-active"
                    to={`/${menuItem.object_slug}`}
                  >
                    {menuItem.title}
                    {menuItem.wordpress_children ? (
                      <i className="nav__link-caret" />
                    ) : (
                      ''
                    )}
                  </Link>
                  {menuItem.wordpress_children ? (
                    <ul className="nav__dropdown">
                      {menuItem.wordpress_children.map((menuSubItem, index) => (
                        <li
                          key={index}
                          className={`nav__item nav__item--/${
                            menuItem.object_slug
                          }`}
                        >
                          <Link
                            className="nav__link"
                            activeClassName="is-active"
                            to={`/${menuSubItem.object_slug}`}
                          >
                            {menuSubItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>

            <a href={`mailto:${props.options.mail}`} className="btn btn__blue">
              <i className="ion ion-at" /> <span>{props.options.mail}</span>
            </a>
            <a
              href={`mailto:${props.options.phone}`}
              className="btn btn__white"
            >
              <i className="ion ion-ios-telephone" />
              <span>{props.options.phone}</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
