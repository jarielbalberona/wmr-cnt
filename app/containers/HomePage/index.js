/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import brandLogo from '@images/wmr-cnt-logo.png';

import reducer from './reducer';
import saga from './saga';

import './styles.scss';

const key = 'home';

export default function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WMR - CNT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="Homepage" className="hero is-success is-fullheight">
        <div className="hero-body has-background-danger">
          <div className="container is-flex">
            <figure className="image is-96x96">
              <img src={brandLogo} alt="wmr-cnt logo" />
              <figcaption className="has-text-centered">
                <p>Landing soon!</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </article>
  );
}
