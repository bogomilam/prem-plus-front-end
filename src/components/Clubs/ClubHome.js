import React from 'react'


export default class ClubHome extends React.Component {


    
    render() {
        const { showClub, unshowClub } = this.props
        const club   = this.props.club
        if (!club) return <div></div>
        return (
            <div className="card-team">
                {/* <h3 className="card-title">Home Stats</h3> */}
            <div className="card-body">
                <h5 className="card-title">Home Record</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Wins 
                <span className="badge badge-primary badge-pill">{club.win_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Draws 
                <span className="badge badge-primary badge-pill">{club.draw_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Loss 
                <span className="badge badge-primary badge-pill">{club.loss_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Average Points At Home
                <span className="badge badge-primary badge-pill">{club.ppg_home} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Scored at Home
                <span className="badge badge-primary badge-pill">{club.goals_home} / {club.goals_home + club.goals_away}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Goals Conceded at Home
                <span className="badge badge-primary badge-pill">{club.concede_home} / {club.concede_home + club.concede_away} </span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
                CleanSheets at Home
                <span className="badge badge-primary badge-pill">{club.cs_home} / {club.cs_home + club.cs_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Failed to Score at Home
                <span className="badge badge-primary badge-pill">{club.fts_home} / {club.fts_home + club.fts_away} </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Both Teams Scoring at Home
                <span className="badge badge-primary badge-pill">{Math.floor((club.btts_home / club.played_overall) * 100)}% </span>
            </li>
            </ul>
            </div>

        )
    }

}