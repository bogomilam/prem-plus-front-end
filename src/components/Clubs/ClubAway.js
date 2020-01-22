import React from 'react'


export default class CluAway extends React.Component {

    render() {

        const club   = this.props.club
        if (!club) return <div></div>
        return (
            <div className="card-team">
                {/* <h3 className="card-title">Away Stats</h3> */}
            <div className="card-body">
                <h5 className="card-title">Away Record</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Wins 
                <span className="badge badge-primary badge-pill">{club.win_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Draws 
                <span className="badge badge-primary badge-pill">{club.draw_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Loss 
                <span className="badge badge-primary badge-pill">{club.loss_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Average Points At Away
                <span className="badge badge-primary badge-pill">{club.ppg_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Scored at Away
                <span className="badge badge-primary badge-pill">{club.goals_away} / {club.goals_away + club.goals_away}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Conceded at Away
                <span className="badge badge-primary badge-pill">{club.concede_away} / {club.concede_away + club.concede_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                CleanSheets at Away
                <span className="badge badge-primary badge-pill">{club.cs_away} / {club.cs_away + club.cs_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Failed to Score at Away
                <span className="badge badge-primary badge-pill">{club.fts_away} / {club.fts_away + club.fts_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Both Teams Scoring at Away
                <span className="badge badge-primary badge-pill">{Math.floor((club.btts_away / club.played_overall) * 100)}% </span>
            </li>
            </ul>
            </div>

        )
    }

}