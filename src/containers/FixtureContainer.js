import React from 'react'
import FixtureCard from '../components/Fixtures/FixtureCard'
import FullFixture from '../components/Fixtures/FullFixture'

const FIXTURE_ENDPOINT = 'http://localhost:3000/matches?game_week=26'



export default class FixtureContainer extends React.Component {

state =  {
  fixtures: [],
  fullFixture: null,
  searchedClub: null,
  searchValue: ""
}

filterSearchResults = () => {
  let searchResult = this.state.fixtures.filter(fixture => 
    fixture.home_club.name.toLowerCase() || fixture.away_club.name.toLowerCase().includes(this.state.searchValue) )[0]
    console.log(searchResult)
    this.setState({ searchedClub: searchResult })
    // if (this.state.searchedClub) this.setState({ fullFixture: searchResult})
}

handleSearchChange = e => {
  this.setState({ searchValue: e.target.value})
  this.filterSearchResults()
}

checkLeagueItem = () => {
this.setState({ simLeagueItem: true})
}

checkAvgPointsItem = () => {
  this.setState({ simAvgPoints: true})
  }

showFixture = fixture => {
  this.setState({ fullFixture: fixture })

}

unshowFixture = () => {
  this.setState({ fullFixture: null })
}

componentDidMount = () => {
	this.getFixtures()
}

getFixtures = () => {
    fetch(FIXTURE_ENDPOINT)
    .then(response => response.json())
    .then(data => {this.setState({ fixtures: data})})
  }

// renderFixture = () => {
//   if (this.state.searchedClub) return < FullFixture unshowFixture={unshowFixture} fixture={fullFixture} showClub={showClub} unshowClub={unshowClub} 
//   checkAvgPointsItem={checkAvgPointsItem} checkLeagueItem={checkLeagueItem}
// }

	render() {
        const { showClub, unshowClub, displayClub } = this.props
        const { showFixture, unshowFixture, checkLeagueItem, checkAvgPointsItem } = this
        const { fullFixture, fixtures, searchedClub } = this.state
        return (
            <div className="fixture-container">
              {/* <label>Search for a Team </label>
              <input value={this.state.searchValue} onChange={ (e) => this.handleSearchChange(e)} /> */}
          { !fullFixture ? (
    		  fixtures.map(fixture => {
          return <FixtureCard fixture={fixture} key={fixture.id} showClub={showClub} unshowClub={unshowClub}
           showFixture={showFixture} unshowFixture={unshowFixture} displayClub={displayClub} />
          }) ) : (
           < FullFixture unshowFixture={unshowFixture} fixture={fullFixture} showClub={showClub} unshowClub={unshowClub} 
            checkAvgPointsItem={checkAvgPointsItem} checkLeagueItem={checkLeagueItem}
           />
          ) }
  	  </div>
        )
    }    
}

