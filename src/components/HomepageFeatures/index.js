import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Возможность выбора базовой криптографии используемой при инициализации сети: ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GOST 34.10 (any 256 bit curve) + 34.11 SteebogHash <br/>
        CyptoProGOST + 34.11 SteebogHash <br/>
        NIST Secp256k1 + SHA3 <br/>
        NIST PostQuantum (work in progress) <br/>
      </>
    ),
  },
  {
    title: 'Возможность выбора различных типов консенсуса:',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Proof-of-Work <br/>
      Proof-of-Authority <br/>
      Raft <br/>
      iBFT <br/>
      QBFT  <br/>
      </>
    ),
  },
  {
    title: 'Полная совместимость с цифровой подписью Криптопро',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Мэйннет и тестнет сети используют криптографию ГОСТ 34.10 + 34.11 совместимую с КриптпоПро и другими сертифицированными провайдерами
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
