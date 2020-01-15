import React from 'react'
import FixtureHome from './FixtureHome'
import FixtureAway from './FixtureAway'
import FixtureFactor from './FixtureFactor'


export default class FixtureCard extends React.Component {

  state = {
    avgHomeGoal: null,
    avgAwayGoal: null
  }

  componentDidMount = () => {
    this.GoalSim(this.props.fixture.id)
  }
  
  GoalSim = id => {
    fetch(`http://localhost:3000/matches/${id}/simulate`)
        .then(response => response.json())
        .then(data => this.setState({ avgHomeGoal: Math.round(data.result.mean.home),
        avgAwayGoal: Math.round(data.result.mean.away) }))
      }
  
  render() {
    const { fixture } = this.props
    const  { avgAwayGoal, avgHomeGoal }  = this.state

    return (
              <div className="card" >
              <div className="card-body">
                <h5 class="card-title"></h5>
                <h1> GameWeek: {fixture.game_week}</h1>
                < FixtureHome fixture={fixture} avgHomeGoal={avgHomeGoal} /> 
                < FixtureAway fixture={fixture} avgAwayGoal={avgAwayGoal} />
                {/* < FixtureFactor fixture={fixture} clickFactor={this.clickFactor(fixture.id)}/>  */}
              </div>
            </div>
              );
    }

    
}

