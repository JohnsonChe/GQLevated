import React from 'react'
import { Row, Grid, Card, Text, Divider, Spacer } from '@nextui-org/react'
import Image from 'next/image'

import styles from '../styles/Team.module.css'
import GitHubLogo from '../../public/GitHub-Mark-Light-64px.png'
import LinkedInLogo from '../../public/Linkedin-logo-on-transparent-Background-PNG-.png'
import content from '../content/en.json'

function Team() {
  const teamContent = content.about.team
  const teamList = Object.keys(content.about.team)

  return (
    <div className={styles.team} id='team'>
      <Spacer y={1} />
      <h1>{content.about.meetTheTeam}</h1>
      <Spacer y={1} />
      <Grid.Container css={{ w: '75%' }} gap={2} justify='space-around'>
        {teamList.map((member, index) => (
          <Grid gap={5} xs={12} sm={6} key={index} css={{ border: '$space$1 solid white' }}>
            <Card css={{ w: '35%', borderRadius: '0' }}>
              <Card.Header>
                <Text b size={20}>
                  {teamContent[member].name}
                </Text>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Image
                  layout='responsive'
                  src={`/${member}.png`}
                  alt='logo-gif'
                  height='100%'
                  width='100%'
                />
              </Card.Body>
              <Card.Footer>
                <Row justify='center'>
                  <a href={teamContent[member].github} target='_blank' rel='noreferrer noopener'>
                    <Image
                      src={GitHubLogo}
                      className={styles.scaleDown}
                      width={40}
                      height={40}
                      alt='logo-gif'
                    />
                  </a>
                  <a href={teamContent[member].linkedIn} target='_blank' rel='noreferrer noopener'>
                    <Image src={LinkedInLogo} width={40} height={40} alt='logo-gif' />
                  </a>
                </Row>
              </Card.Footer>
            </Card>
            <Card css={{ w: '65%', borderRadius: '0' }}>
              <Spacer y={2.6} />

              <Card.Body css={{ py: '$10' }}>
                <Text>{teamContent[member].bio}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}

export default Team
