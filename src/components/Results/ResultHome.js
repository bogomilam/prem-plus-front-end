import React from 'react'


export default class ResultHome extends React.Component {

    render() {
        const { result, showClub } = this.props
        if (!result) return <div></div>
        return (
            <div className="card-result" onClick={ () => showClub(result.home_club)}>
            <img className="card-img-top" src={result.home_club.image} alt="cad thing"/>
            <div className="card-body">
                <h1 className="card-title">{result.home_goal_count}</h1>
                <p className="card-text"></p>
                <h5 className="card-title">{result.home_club.name}</h5>
            </div>
            </div>

        )
    }

}