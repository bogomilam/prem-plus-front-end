import React from 'react'
import ResultHome from './ResultHome'
import ResultAway from './ResultAway'

export default class ResultCard extends React.Component {

    render() {
      const { result, showClub, unshowClub } = this.props
            return (
              <div className="card" >
                <h5 className="card-img-top">Full Time at {result.stadium_name}</h5>
                <div className="card-body">
                 
                < ResultHome result={result} showClub={showClub} unshowClub={unshowClub}/>
                < ResultAway result={result} showClub={showClub} unshowClub={unshowClub}/>  
                </div>
              </div>
              );
    }

    
}
