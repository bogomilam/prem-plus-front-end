import React from 'react'
import FollowersProfile from './FollowersProfile'
import API from '../../adapters/API'


export default class Profile extends React.Component {
    
    
// logHandler = (props) => {
// props.unsetUser() 
// API.clearToken()
// console.log(props)
// }

    render() {
        const { followedClub, unfollowClub, unshowSearch, user, logHandler} = this.props
        // if (!followedClub) return <div></div>
        return (
            <div className="fixture-container">
            <div className="card-profile">
                <div className="row">
                { !followedClub ? (
              <div className="alert alert-info" role="alert">
                You are not following any clubs!
             </div>   
             ) : (
                 < FollowersProfile followedClub={followedClub} unfollowClub={unfollowClub} unshowSearch={unshowSearch} user={user} />
             )} 
                </div>
            
             <div className="row">
             <button type="button" class="btn btn-warning" onClick={logHandler}>Log {user.email} out</button>
             </div>
             </div>
            </div>
        )
    }
}