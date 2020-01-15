import React from 'react'


export default class FixtureFactor extends React.Component {

    render() {
        const { fixture } = this.props
        // const  rops.fixture.home_club.clubStat
        // console.log(fixture)
        if (!fixture) return <div></div>
        return (
            // <div className="card-sim">
            <div class="float-none">
             <h3 className="card-title">Weight Factor</h3>
            <img className="card-img-top" src="https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Lovello-Simply-Stylish-Mechanical-Kitchen-Scales~33J817FRSP_COL_BLACK.jpg" alt="cad thing"/>
            <div className="card-body">
                <h5 className="card-title">Weight Factor</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                League Position: 
                <select id="league-factor" ref="leaguef">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </li>
            </ul>
            </div>
        )
    }

}