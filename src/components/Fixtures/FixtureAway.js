import React from 'react'


export default class FixtureAway extends React.Component {

    render() {
        const { fixture, showClub, unshowClub, avgAwayGoal } = this.props
        const club = this.props.fixture.away_club
        if (!fixture) return <div></div>
        return (
            <div className="card-team" onClick={ () => showClub(club)} >
            <h3 className="card-title">Away</h3>
            <img className="card-img-top" src={club.image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text">{}</p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                League Position
                <span className="badge badge-primary badge-pill">{club.table_pos}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Games Played
        <span className="badge badge-primary badge-pill">{club.played_overall}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Wins %
                <span className="badge badge-primary badge-pill">{club.win_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Draws %
                <span className="badge badge-primary badge-pill">{club.draw_away}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Away Losses %
                <span className="badge badge-primary badge-pill">{club.loss_away}%</span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Average Points Away
                <span className="badge badge-primary badge-pill">{club.ppg_away} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Clean Sheets Away
                <span className="badge badge-primary badge-pill">{club.cs_away} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Failed to Score Away
                <span className="badge badge-primary badge-pill">{club.fts_away} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Scored Away
                <span className="badge badge-primary badge-pill">{club.goals_away} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Conceded Away
                <span className="badge badge-primary badge-pill">{club.concede_away} </span>
            </li>
            <li class="list-group-item list-group-item-success">
                <span className="badge badge-primary badge-pill">{avgAwayGoal}</span>
            </li>
            </ul>
            </div>
        )
    }
}