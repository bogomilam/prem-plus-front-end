import React from 'react'
import ResultCard from '../components/Results/ResultCard'

const RESULT_ENDPOINT = 'http://localhost:3000/matches?game_week=24'

export default class ResultContainer extends React.Component{

    state = {
        results: []
    }

    componentDidMount = () => {
        this.getResults()
    }

 getResults = () => {
        fetch(RESULT_ENDPOINT)
        .then(response => response.json())
        .then(data => this.setState({ results: data }) )
      }

    render(){
        const { results } = this.state
        const { showClub, unshowClub } = this.props
        return(
            <div className="card-profile">
            {results.map(result => {
                return <ResultCard result={result} key={result.id} showClub={showClub} unshowClub={unshowClub} />
             }) }
      </div>
        )
    }
}