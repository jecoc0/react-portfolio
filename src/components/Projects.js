import React from 'react'
import styled from 'styled-components'
import runBuddy from '../assets/images/run-buddy.png'
import budgetTracker from '../assets/images/budget-tracker.png'
import psychicGame from '../assets/images/psychic-game.png'
import personalLibrary from '../assets/images/personal-library.png'
import movieLibrary from '../assets/images/movie-library.png'
import facilitiesManagement from '../assets/images/facility-management.png'
import Card from 'react-bootstrap'


const personalProjects = [

  {
    title: 'Facility Manager',
    githubLink: 'https://github.com/jecoc0/building-maintenance',
    liveLink: 'https://sf-facilities-app.herokuapp.com/',
    image: facilitiesManagement,
    technologiesUsed: ['JavaScript', 'Node.js', 'IndexedDB', 'PWA', 'Service Worker', 'MongoDB Atlas']
  },
  {
    title: 'My Movie Library',
    githubLink: 'https://github.com/jecoc0/my-movie-library',
    liveLink: 'https://my-movie-library-1.herokuapp.com/',
    image: movieLibrary,
    technologiesUsed: ['JavaScript', 'Node.js', 'IndexedDB', 'PWA', 'Service Worker', 'MongoDB Atlas']

  },
  {
    title: 'Personal Library Tracker',
    githubLink: 'https://github.com/jecoc0/personal-library-tracker',
    liveLink: 'https://jecoc0.github.io/personal-library-tracker/',
    image: personalLibrary,
    technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Public APIs']
  },
  {
    title: 'Budget Tracker',
    githubLink: 'https://github.com/jecoc0/budget-tracker',
    liveLink: 'https://peaceful-temple-57059.herokuapp.com/',
    image: budgetTracker,
    technologiesUsed: ['JavaScript', 'Node.js', 'IndexedDB', 'PWA', 'Service Worker', 'MongoDB Atlas']
  },
  {
    title: 'Psychic Game',
    githubLink: 'https://github.com/jecoc0/Psychic-Game',
    liveLink: 'https://jecoc0.github.io/Psychic-Game/',
    image: psychicGame,
    technologiesUsed: ['HTML', 'JavaScript']
  },
  {
    title: 'Run Buddy',
    githubLink: 'https://github.com/jecoc0/run-buddy',
    liveLink: 'https://jecoc0.github.io/run-buddy/',
    image: runBuddy,
    technologiesUsed: ['HTML', 'CSS']
  }
]

const Container = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-gap: 8px;
`

const ProjectContainer = styled.div`
border-radius: 1px;
border-color: black;

`

const ProjectImage = styled.img`
  width: 90%;
`

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
`

const Projects = () => {
  return (
    <Container className="p-5">
      {personalProjects.map(project => (
        <ProjectContainer className="p-3">
          <h3>{project.title}</h3>
          <ProjectImage src={project.image} />
          <p>Technologies Used: {project.technologiesUsed.join(", ")}</p>
          <LinkContainer>
            <a href={project.githubLink}>GitHub</a>
            <a href={project.liveLink}>Live Site</a>
          </LinkContainer>

        </ProjectContainer>
      ))}
    </Container>
  )
}

export default Projects