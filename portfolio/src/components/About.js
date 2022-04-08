import React from 'react';
import styled from 'styled-components'
import JG from '../assets/images/JG.jpg'

const AboutBlock = styled.p`
  margin: 20px;
  margin-top: 100px;
`

const AboutPhoto = styled.img`
  margin: 50px;
  width: 200px;
`

const AboutDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`


function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <AboutDiv>
        <AboutPhoto src={JG}></AboutPhoto>
        <AboutBlock>My Name is Jessica
          <br />
          I am a web developer with a background in finance
          <br />
          My hobbies include quilting, powerlifting, and running
          <br />
          Currently, I am obsessed with the Netflix show, Bridgerton
        </AboutBlock>
      </AboutDiv>
    </section>
  )
}

export default About;