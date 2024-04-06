import React, { useState } from 'react'
import { Button, Spacer } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import content from '../content/en.json'

import {
  setQueries,
  showDemo,
  setIsError,
  setShowDBInfo,
  setShowFlowModal
} from '../features/demoSlice'
import styles from '../styles/DbInfo.module.css'

function DbInfo({ dbData, hidePanel, setDbData }) {
  const [dbName, setDBName] = useState(!dbData ? 'Sample Database' : dbData.name)
  const [dbType, setDBType] = useState(!dbData ? content.demo.postgreSQL : dbData.type)

  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h2 className={styles.type}>{dbType}</h2>
      <p className={styles.paragraphs}>{content.demo.databaseName}:</p>
      <p className={styles.paragraphs}>{dbName}</p>
      <Spacer y={1.0} />
      <Button onClick={() => dispatch(setShowFlowModal(true))}>
        {content.Button.visualizeSchema}
      </Button>
      <Spacer y={1.5} />
      <Button
        onClick={() => {
          dispatch(setQueries(''))
          dispatch(showDemo(false))
          dispatch(setIsError(false))
          dispatch(setShowDBInfo(false))
          setDbData(null)
        }}>
        Reset
      </Button>
    </div>
  )
}

export default DbInfo
