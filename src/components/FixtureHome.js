import React from 'react'


export default class FixtureHome extends React.Component {

    render() {
        const { fixture } = this.props
        const   hstat   = this.props.fixture.home_club.clubStat
        console.log(fixture)
        if (!fixture) return <div></div>
        return (
            <div className="card-team">
                <h3 className="card-title">Home</h3>
            <img className="card-img-top" src={fixture.home_club.image} alt="cad thing"/>
            <div className="card-body">
                <h5 className="card-title">{fixture.home_club.name}</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                League Position
                <span className="badge badge-primary badge-pill">{hstat.table_pos}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Games Played
        <span className="badge badge-primary badge-pill">{hstat.played_overall}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Wins 
                <span className="badge badge-primary badge-pill">{hstat.win_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Draws 
                <span className="badge badge-primary badge-pill">{hstat.draw_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Loss 
                <span className="badge badge-primary badge-pill">{hstat.loss_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Average Points At Home
                <span className="badge badge-primary badge-pill">{hstat.ppg_home} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Scored at Home
                <span className="badge badge-primary badge-pill">{hstat.goals_home} / {hstat.goals_home + hstat.goals_away}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Conceded at Home
                <span className="badge badge-primary badge-pill">{hstat.concede_home} / {hstat.concede_home + hstat.concede_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Overall Average Possession
                <span className="badge badge-primary badge-pill">{hstat.possessionAVG_overall} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                CleanSheets at Home
                <span className="badge badge-primary badge-pill">{hstat.cs_home} / {hstat.cs_home + hstat.cs_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Failed to Score at Home
                <span className="badge badge-primary badge-pill">{hstat.fts_home} / {hstat.fts_home + hstat.fts_away} </span>
            </li>
            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                Both Teams Scoring at Home
                <span className="badge badge-primary badge-pill">{Math.floor((hstat.btts_home / hstat.played_overall) * 100)}% </span>
            </li> */}
            <li class="list-group-item list-group-item-success">Simulator
                <span className="badge badge-primary badge-pill">{this.props.avgHomeGoal}</span>
            </li>
            </ul>
            </div>

        )
    }

}