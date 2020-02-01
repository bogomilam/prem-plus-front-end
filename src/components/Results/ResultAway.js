import React from 'react'


export default class ResultAway extends React.Component {

    render() {
        const { result, showClub, unshowClub } = this.props
        if (!result) return <div></div>
        return (
            <div className="card-result" onClick={ () => showClub(result.away_club)}>
            <img className="card-img-top" src={result.away_club.image} alt="cad thing"/>
            <div className="card-body">
                <h1 className="card-title">{result.away_goal_count}</h1>
                <p className="card-text"></p>
                <h5 className="card-title">{result.away_club.name}</h5>
            </div>
            </div>

        )
    }

}