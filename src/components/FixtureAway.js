import React from 'react'


export default class FixtureAway extends React.Component {

    render() {
        const { fixture } = this.props
        const astat = this.props.fixture.away_club.clubStat
        if (!fixture) return <div></div>
        return (
            <div className="card-team">
            <h3 className="card-title">Away</h3>
            <img className="card-img-top" src={fixture.away_club.image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{fixture.away_club.name}</h5>
                <p className="card-text">{}</p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                League Position
                <span className="badge badge-primary badge-pill">{astat.table_pos}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Games Played
        <span className="badge badge-primary badge-pill">{astat.played_overall}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Wins 
                <span className="badge badge-primary badge-pill">{astat.win_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Draws 
                <span className="badge badge-primary badge-pill">{astat.draw_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Loss 
                <span className="badge badge-primary badge-pill">{astat.loss_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Average Points Away
                <span className="badge badge-primary badge-pill">{astat.ppg_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Scored Away
                <span className="badge badge-primary badge-pill">{astat.goals_away} / {astat.goals_away + astat.goals_away}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Conceded Away
                <span className="badge badge-primary badge-pill">{astat.concede_away} / {astat.concede_away + astat.concede_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Overall Average Possession
                <span className="badge badge-primary badge-pill">{astat.possessionAVG_overall} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                CleanSheets Away
                <span className="badge badge-primary badge-pill">{astat.cs_away} / {astat.cs_away + astat.cs_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Failed to Score Away
                <span className="badge badge-primary badge-pill">{astat.fts_away} / {astat.fts_away + astat.fts_away} </span>
            </li>
            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                Both Teams Scoring Away
                <span className="badge badge-primary badge-pill">{Math.floor((astat.btts_away / astat.played_overall) * 100)}% </span>
            </li> */}
           <li class="list-group-item list-group-item-success">Simulator
                <span className="badge badge-primary badge-pill">{this.props.avgAwayGoal}</span>
            </li>
            </ul>
            </div>
        )
    }
}