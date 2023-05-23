import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ability to chose crypto type at chain initialization: ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        - GOST 34.10 (any 256 bit curve) + 34.11 SteebogHash (compatible with CryptoPro provider) <br/>
        - NIST Secp256k1 + SHA3 <br/>
        - NIST PostQuantum (work in progress) <br/>
        <br/><br/>
        TestNet GOST 34.10 + 34.11 SteebogHash is up and running. Nodes at http://194.87.80.101:3000/
      </>
    ),
  },
  {
    title: 'Ability to chose consensus:',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Proof-of-Work <br/>
      Proof-of-Authority <br/>
      Raft <br/>
      iBFT <br/>
      QBFT  <br/>
      DPOS* <br/>
      POS* <br/>
      Tendermint* <br/> 
      </>
    ),
  },
  {
    title: 'UI for network and node management',
    description: (
      <>
      - Easy to use UI for node management <br/> 
      - Ability to configure a new custom genesis from UI 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
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
