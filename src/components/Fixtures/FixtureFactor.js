import React from 'react'


export default class FixtureFactor extends React.Component {

    render() {
        const { fixture, checkAvgPointsItem, checkCSItem, checkFTSItem, checkConcedeItem, checkScoredItem } = this.props
        // const  rops.fixture.home_club.clubStat
        // console.log(fixture)
        if (!fixture) return <div></div>
        return (
            // <div className="card-sim">
            <div class="float-none">
             <h3 className="card-title">Scale Factor</h3>
            <img className="card-img-top" src="https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Lovello-Simply-Stylish-Mechanical-Kitchen-Scales~33J817FRSP_COL_BLACK.jpg" alt="cad thing"/>
            <div className="card-body">
                <h5 className="card-title">Simulation Factors</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex list-group-item-secondary justify-content-between align-items-center">   
                Slim Sim
            </li>
            <li className="list-group-item d-flex list-group-item-secondary justify-content-between align-items-center">
                Slim Sim
            </li>
            <li className="list-group-item d-flex list-group-item-secondary justify-content-between align-items-center">
                Slim Sim
            </li>
            <li className="list-group-item d-flex list-group-item-secondary justify-content-between align-items-center">
                Slim Sim
            </li>
            <li className="list-group-item d-flex list-group-item-secondary justify-content-between align-items-center">
                Slim Sim
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">   
               Include Average Points ?
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                <label class="custom-control-label" for="customCheck2" onClick={ () => checkAvgPointsItem()}></label>
                </div>
            </li>
            <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-left">   
               Include Clean Sheets ?
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                <label class="custom-control-label" for="customCheck3" onClick={ () => checkCSItem()}></label>
                </div>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Include Failed to Score ?
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck4"/>
                <label class="custom-control-label" for="customCheck4" onClick={ () => checkFTSItem()}></label>
                </div>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Include Scored Goals ?
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck5"/>
                <label class="custom-control-label" for="customCheck5" onClick={ () => checkScoredItem()}></label>
                </div>
            </li>
            <li className="list-group-item d-flex list-group-item-info justify-content-between align-items-center">
                Include Conceded Goals ?
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck6"/>
                <label class="custom-control-label" for="customCheck6" onClick={ () => checkConcedeItem()}></label>
                </div>
            </li>
            <li class="list-group-item list-group-item-success">
                <span className="badge badge-primary badge-pill">Sim Prediction</span>
            </li>
            </ul>
            </div>
        )
    }

}