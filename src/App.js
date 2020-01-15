import React from 'react';
import './App.css';
import FixtureContainer from './containers/FixtureContainer'
import Navbar from './components/Navbar'
import ClubsContainer from './containers/ClubsContainer';

const CLUB_ENDPOINT = 'http://localhost:3000/clubs'


export default class App extends React.Component {

  state = {
    clubs: [],
    Nav: null,
    // fixtures: [],
    searchValue: ""
  }

  // getFixtures = () => {
  //   fetch(MATCH_ENDPOINT)
  //   .then(response => response.json())
  //   .then(data => {this.setState({ fixtures: data})})
  // }

// getResults = () => {
//   // console.log("we get results")
//   const fulltime = this.state.matches.filter(m => m.game_week === 22)
//   // console.log(fulltime)
//   this.setState({ results: fulltime })
// }

// getFixtures = () => {
//   // console.log("fixtures")
//   const fixtures = this.state.matches.filter(m => m.game_week === 23)
//   // console.log(fixtures)
//   this.setState({ fixtures: fixtures })
// }

handleNav = (e) => {
  this.setState({ Nav: e.target.innerHTML })
}

navHandler = () => {
  const {fixtures, clubs} = this.state
  if (this.state.Nav === "Home") return <FixtureContainer fixtures={fixtures} getFixtures={this.getFixtures} />
  if (this.state.Nav === "Clubs") return < ClubsContainer clubs={clubs} getClubs={this.getClubs} />
}

componentDidMount(){
  // this.getFixtures()
  this.fetchClubs();
  // this.fetchMatches();
}

// fetchMatches = () => {
//   fetch(MATCH_ENDPOINT).then(response => response.json()).then(data => {
//     this.setState({ matches: data})
//     return data
//   }).then( this.getFixtures )
//   .then( this.getResults)
// }


  
fetchClubs = () => {
  fetch(CLUB_ENDPOINT).then(response => response.json()).then(data => this.setState({ clubs: data}) )
}

  // fetchAPI = (url) => {
  //   fetch(url)
  //   .then(response => response.json())
  // }



  render() {
    return (
      <div >
        < Navbar handleNav={this.handleNav} />
        {this.navHandler()}
        <FixtureContainer />
        {/* < ClubCollection clubs={clubs} /> */}
      </div>
    )
  }
}


