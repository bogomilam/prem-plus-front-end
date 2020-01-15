import React from 'react'
import ClubCard from '../components/ClubCard'


export default class ClubContainer extends React.Component{

    render(){
        const { clubs } = this.props
        return(
            <div>
            {clubs.map(club => {
                return <ClubCard club={club} key={club.id} />
             }) }
      </div>
        )
    }
}