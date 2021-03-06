import React from 'react'
import ClubHome from './ClubHome'
import ClubAway from './ClubAway'


export default class ClubProfile extends React.Component {

    // followHandler = (props) => {
    //     props.followedClub === props.club.id ? props.unfollowClub(props.club.id) : props.resetFollowing(props.club.id)
    //     // console.log(props)
    // }

    showHandler = props => {
        console.log(props, "FIXA")
        if (!props.displayClub) props.showClub(props.fixture.home_club)
        else props.unshowClub()
    }

    followButtonHandler = (club, props) => {
        // console.log(club, props, "HEYEY")
        if (props.followedClub && club.id === props.followedClub.id) return <button type="button" class="btn btn-danger" onClick={()=> props.unfollowClub(props.user)}>Unfollow {club.name}</button>
        else return <button type="button" class="btn btn-primary" onClick={() => props.resetFollowing(props.club)}>Follow {club.name}</button>
    }

    render() {
        
        const { unshowClub, followClub, followedClub, unfollowClub } = this.props
        const club   = this.props.club
        if (!club) return <div></div>
        return (
            <div className="fixture-container">
            <div className="card-profile" onClick={() =>unshowClub()}>
            <img className="card-img-top"  src={club.image} alt="cad thing"/>
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
                Overall Average Possession
                <span className="badge badge-primary badge-pill">{club.possessionAVG_overall} </span>
            </li>
            </ul>
            < ClubHome club={club} />
            < ClubAway club={club} />
            </div>
            <div>
            {this.followButtonHandler(club, this.props)}
            {/* <button type="button" class="btn btn-primary" onClick={() => this.followHandler(this.props)}>Follow {club.name}</button>
            followedClub, followClub, unfollowClub, club */}
            {/* <button type="button" class="btn btn-primary" onClick={() => followClub(club.id)}>Follow {club.name}</button> */}
            </div>
            <div>
            <button type="button" class="btn btn-secondary" onClick={ () => unshowClub()}>Go Back</button>
            </div>
            </div>
        )
    }

}