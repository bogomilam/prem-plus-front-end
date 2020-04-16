import React from 'react'
import FixtureHome from './FixtureHome'
import FixtureAway from './FixtureAway'
import FixtureFactor from './FixtureFactor'


export default class FixtureCard extends React.Component {

  state = {
    simLeaguePos: false,
    simAvgPoints: false,
    simCSRec: false,
    simFTSRec: false,
    simScored: false,
    simConcede: false,
    avgHomeGoal: null,
    avgAwayGoal: null
  }


  simHandler = (id) => {
    this.GoalSim(id)
    .then(() => {
      if (this.state.simAvgPoints) {
        this.ppgSim()
      }
      if (this.state.simCSRec) {
        this.CSSim()
      } 
      if (this.state.simFTSRec) {
        this.FTSSim()
      }
      if (this.state.simScored) {
        this.ScoreSim()
      } 
      if (this.state.simConcede) {
        this.concedeSim()
      } 
      if (this.state.avgHomeGoal) {
      this.roundSim()
      }
      if (this.state.avgAwayGoal) {
        this.checkAwayGoals()
      }
      if (this.state.avgAwayGoal) {
        this.checkHomeGoals()
      }
      if (this.state.avgHomeGoal && this.state.avgAwayGoal) {
        this.showNoDiff(id)
      }
  })
    }

  showNoDiff = (id) => {
    console.log(id, "differ")
    // if (this.state.avgHomeGoal === this.state.avgHomeGoal) {
    //   return    <li class="list-group-item list-group-item-success">
    //               <span className="badge badge-primary badge-pill">No Diff</span>
    //             </li>
    }



  checkAwayGoals = () => {
    if (this.state.avgAwayGoal < 0 ) {
      this.setState({ avgAwayGoal: 0 })
    }
  }

  checkHomeGoals = () => {
    if (this.state.avgHomeGoal < 0 ) {
      this.setState({ avgHomeGoal: 0 })
    }
  }

  ScoreSim = () => {
    const { fixture } = this.props
    let homeScored = ( fixture.home_club.goals_home / (fixture.home_club.played_overall / 2) )
    let awayScored = ( fixture.away_club.goals_away / (fixture.away_club.played_overall / 2) )

    let scoredDiff = (homeScored - awayScored)
    console.log(scoredDiff)
    if (scoredDiff < 0 ) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal + scoredDiff),
      avgAwayGoal: Math.round(this.state.avgAwayGoal - scoredDiff) })
       }
    if (scoredDiff > 0 ) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal + scoredDiff),
    avgAwayGoal: Math.round(this.state.avgAwayGoal - scoredDiff) })
    }
  }

  concedeSim = () => {
    const { fixture } = this.props
    let homeConcede = ( fixture.home_club.concede_home / (fixture.home_club.played_overall / 2) )
    let awayConcede = ( fixture.away_club.concede_away / (fixture.away_club.played_overall / 2) )
    // this.setState({ avgHomeGoal: (this.state.avgHomeGoal - homeConcede),
      // avgAwayGoal: (this.state.avgAwayGoal - awayConcede) })
    let concedeDiff = (homeConcede - awayConcede)
    console.log(concedeDiff)
    if (concedeDiff < 0 ) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal - concedeDiff),
        avgAwayGoal: Math.round(this.state.avgAwayGoal + concedeDiff) })
         }
    if (concedeDiff > 0 ) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal - concedeDiff),
      avgAwayGoal: Math.round(this.state.avgAwayGoal + concedeDiff) })
       }
  }

  FTSSim = () => {
    const { fixture } = this.props
    let awayFTS = (fixture.away_club.fts_away / (fixture.away_club.played_overall / 2) )
    let homeFTS = (fixture.home_club.fts_home / (fixture.home_club.played_overall / 2) )
    // console.log("AWAY", awayFTS)
    // console.log("HOME", homeFTS)
   this.setState({ avgHomeGoal: (this.state.avgHomeGoal - homeFTS),
  avgAwayGoal: (this.state.avgAwayGoal - awayFTS) })
  }

  CSSim = () => {
    const { fixture } = this.props
    // console.log(fixture.home_club.cs_home)
    let homeCS = (fixture.home_club.cs_home / fixture.home_club.played_overall) 
    let awayCS = (fixture.away_club.cs_away / fixture.away_club.played_overall) 
    this.setState({ avgHomeGoal: (this.state.avgHomeGoal + homeCS),
    avgAwayGoal: (this.state.avgAwayGoal + awayCS)})
    console.log("fix", fixture)
    // console.log("AWAY", awayCS)
  }

  ppgSim = () => {
    const { fixture } = this.props
    let ppgDiff = fixture.home_club.ppg_home - fixture.away_club.ppg_away
     if (ppgDiff < 0) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal + ppgDiff),
    avgAwayGoal: Math.round(this.state.avgAwayGoal - ppgDiff) })
     }
    if (ppgDiff > 0) {this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal + ppgDiff),
      avgAwayGoal: Math.round(this.state.avgAwayGoal - ppgDiff) })
    }
  }


  GoalSim = id => {
    return fetch(`http://localhost:3000/matches/${id}/simulate`)
        .then(response => response.json())
        .then(data => this.setState({ avgHomeGoal: data.result.mean.home,
        avgAwayGoal: data.result.mean.away}))
      }

  realSim = () => {
    if (this.state.avgHomeGoal || this.state.avgAwayGoal < 0) {
      this.setState({ avgHomeGoal: 0,
      avgAwayGoal: 0})
    }
  }

roundSim = () => {
  this.setState({ avgHomeGoal: Math.round(this.state.avgHomeGoal),
    avgAwayGoal: Math.round(this.state.avgAwayGoal ) })
    // this.realSim()
}


  checkCSItem = () => {
    this.setState({ simCSRec: !this.state.simCSRec})
    console.log(this.state.simCSRec)
  }
  
  checkAvgPointsItem = () => {
    this.setState({ simAvgPoints: !this.state.simAvgPoints})
    console.log(this.state.simAvgPoints)
    }

    checkFTSItem = () => {
      this.setState({ simFTSRec: !this.state.simFTSRec })
      console.log(this.state.simFTSRec)
    }

    checkConcedeItem = () => {
      this.setState({ simConcede: !this.state.simConcede})
      console.log(this.state.simConcede)
    }

    checkScoredItem = () => {
      this.setState({ simScored: !this.state.simScored})
      console.log(this.state.simScored)
    }


  render() {
    const { fixture, showClub, unshowFixture } = this.props
    const { checkAvgPointsItem, checkCSItem, checkFTSItem, checkConcedeItem, checkScoredItem, showNoDiff   } = this
    const  { avgAwayGoal, avgHomeGoal }  = this.state

    return (
              <div className="card" >
              <div className="card-body">
                <h5 class="card-title"></h5>
                <h1> GameWeek: {fixture.game_week}</h1>
                < FixtureHome fixture={fixture} avgHomeGoal={avgHomeGoal} showClub={showClub} showNoDiff={showNoDiff} /> 
                < FixtureAway fixture={fixture} avgAwayGoal={avgAwayGoal} showClub={showClub}/>
                < FixtureFactor fixture={fixture} checkAvgPointsItem={checkAvgPointsItem} checkCSItem={checkCSItem} checkFTSItem={checkFTSItem} checkConcedeItem={checkConcedeItem} checkScoredItem={checkScoredItem} /> 
              </div>
              <button type="button" class="btn btn-success" onClick={() => this.simHandler(fixture.id)}>Simulate Fixture</button>
              <button type="button" class="btn btn-secondary" onClick={() => unshowFixture()} >Go Back</button>
            </div>
              );
    }
}