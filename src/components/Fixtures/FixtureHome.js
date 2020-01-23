import React from 'react'

export default class FixtureHome extends React.Component {
    
// clickHandler = props => {
//     props.displayClub === null ? props.showClub(props.fixture.home_club) : props.unshowClub()
//     console.log(props)
// }
    render() {
        const { fixture, showClub, unshowClub, avgHomeGoal } = this.props
        const   club   = this.props.fixture.home_club
        if (!fixture) return <div></div>
        return (
            <div className="card-team" onClick={() => showClub(club) }>
                <h3 className="card-title">Home</h3>
            <img className="card-img-top" src={club.image} alt="cad thing"/>
            <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text"></p>
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
                Home Wins %
                <span className="badge badge-primary badge-pill">{club.win_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Draws %
                <span className="badge badge-primary badge-pill">{club.draw_home}%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Home Losses % 
                <span className="badge badge-primary badge-pill">{club.loss_home}%</span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Average Points at Home
                <span className="badge badge-primary badge-pill">{club.ppg_home} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Clean Sheets at Home
                <span className="badge badge-primary badge-pill">{club.cs_home} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Failed to Score at Home
                <span className="badge badge-primary badge-pill">{club.fts_home} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Score at Home
                <span className="badge badge-primary badge-pill">{club.goals_home} </span>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Conceded at Home
                <span className="badge badge-primary badge-pill">{club.concede_home} </span>
            </li>
            <li class="list-group-item list-group-item-success">
                <span className="badge badge-primary badge-pill">{avgHomeGoal}</span>
            </li>
            </ul>
            </div>
        )
    }

}