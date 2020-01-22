import React from 'react'
import FollowersProfile from './FollowersProfile'


export default class Profile extends React.Component {


    render() {
        const { followedClub, unfollowClub, unshowSearch } = this.props
        if (!followedClub) return <div></div>
        return (
            <div>
             { !followedClub ? (
              <div class="alert alert-info" role="alert">
                You are not following any clubs!
             </div>   
             ) : (
                 < FollowersProfile followedClub={followedClub} unfollowClub={unfollowClub} unshowSearch={unshowSearch} />
             )}   
            </div>
        )
    }
}