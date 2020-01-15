import React from 'react'
import FixtureCard from '../components/FixtureCard'

const MATCH_ENDPOINT = 'http://localhost:3000/matches?game_week=23'


export default class FixtureContainer extends React.Component {

state =  {
	fixtures: []
}

componentDidMount = () => {
	this.getFixtures()
}

getFixtures = () => {
    fetch(MATCH_ENDPOINT)
    .then(response => response.json())
    .then(data => {this.setState({ fixtures: data})})
  }

	render() {
        return (
            <div>
    		  {this.state.fixtures.map(fixture => {
				  return <FixtureCard fixture={fixture} key={fixture.id} />
 			  }) }
  	  </div>
        )
    }

    
}

