import React from 'react'
import FixtureHome from './FixtureHome'
import FixtureAway from './FixtureAway'
import FullFixture from './FullFixture'
// import FullFixture from './components/Fixtures/FullFixture'



export default class FixtureCard extends React.Component {


  render() {

    const { fixture, clubs, showClub, unshowClub, showFixture, unshowFixture, displayClub } = this.props
    
    return (
              <div className="card" >
              <div className="card-body">
                <h5 class="card-title"></h5>
                <h1> GameWeek: {fixture.game_week}</h1>
                  < FixtureHome fixture={fixture} showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} /> 
                  < FixtureAway fixture={fixture} showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
              </div>
              <button type="button" class="btn btn-success" onClick={() => showFixture(fixture) }>Simulate Fixture</button>
            </div>
              );
    }
}

