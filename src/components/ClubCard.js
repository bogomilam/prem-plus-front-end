import React from 'react'

export default class ClubCard extends React.Component {

    render() {
      const { club } = this.props
            return (
              <div className="card" >
                <img className="card-img-top" src={club.image} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">{club.name}</p>
                  
                </div>
              </div>
              );
    }

    
}
