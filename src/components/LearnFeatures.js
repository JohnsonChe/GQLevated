import React from 'react'
import { Spacer } from '@nextui-org/react'

import styles from '../styles/Learn.module.css'
import Features from './Features'
import content from '../content/en.json'

function LearnFeatures() {
  const tutorial = content.tutorial
  const features = tutorial.features.map((feature, index) => (
    <Features key={index} index={index} title={feature.title} description={feature.description} />
  ))

  return (
    <div className={styles.learn} id='learn'>
      <Spacer y={3} />
      <div className={styles.overview}>
        <br></br>
        <h1 className={styles.headers}>{tutorial.title}</h1>
        <br></br>
        <p className={styles.paragraphs}>
          <div className={styles.textPrompt}>{tutorial.prompt}</div>
          <br></br>
          <p className={styles.text}>{tutorial.freePrompt}</p>
        </p>
      </div>

      <div className={styles.allFeatures}>{features}</div>
    </div>
  )
}
export default LearnFeatures
