import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/1.svg').default,
    description: (
      <>
        A unique, minimalist and simple home design
      </>
    ),
  },
  {
    title: 'Simple but powerful Webinterface',
    Svg: require('../../static/img/2.svg').default,
    description: (
      <>
Easy to use configuration system with a variety of systems and configurations according to what you are looking for in a great Dashboard
      </>
    ),
  },
  {
    title: 'Customizable and feature-packed',
    Svg: require('../../static/img/3.svg').default,
    description: (
      <>
         Your best option according to what you have always been looking for in a Dashboard, in addition to a catalog of extensive accessories for it
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
