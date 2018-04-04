import React from 'react'

const Footer = props => (
  <div>
    <footer className="footer section--m section--grey" id="kontakt">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 footer__item">
            <h2
              className="footer__item--title"
              dangerouslySetInnerHTML={{ __html: 'Kontakt' }}
            />
            <div className="row">
              <div className="footer__item--content col-sm-6">
                FLEX BOGFØRING ApS
                <div className="company-info name">Birgitte Bjerg Justesen</div>
                <div className="company-info phone">
                  <i className="ion-ios-telephone" />
                  <a href="tel:22947766" data-unsp-sanitized="clean">
                    22 94 77 66
                  </a>
                </div>
                <div className="company-info mail">
                  <i className="ion-at" />
                  <a
                    href="mailto:info@flexbogforing.dk"
                    data-unsp-sanitized="clean"
                  >
                    info@flexbogforing.dk
                  </a>
                </div>
              </div>
              <div className="footer__item--content col-sm-6">
                <div className="company-info address">
                  <i className="ion-android-pin" />
                  <p>Kongehøj 13 6600 Vejen</p>
                </div>
                <small className="company-info cvr">
                  <i className="ion-briefcase" />CVR: 33588704
                </small>
              </div>
              <div className="col-sm-12 footer__logos" />
            </div>
          </div>
          <div className="col-sm-6 footer__item">
            <h2
              className="footer__item--title"
              dangerouslySetInnerHTML={{ __html: 'Skriv <span>til os</span>' }}
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
