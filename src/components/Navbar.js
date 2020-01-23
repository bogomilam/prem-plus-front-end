import React from 'react'



export default class Navbar extends React.Component {


    render() {
    const { handleNav, searchValue, handleSearchChange, user }  = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">SlimSim
            </a>
            <div className='b'></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" onClick={(e) => handleNav(e)}>
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item" key="profile" onClick={(e) => handleNav(e)}>
                <a class="nav-link" id="pills-results-tab" data-toggle="pill" href="#pills-results" role="tab" aria-controls="pills-results" aria-selected="false">Results</a>
                </li>
                <li className="nav-item" key="profile" onClick={(e) => handleNav(e)}>
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                </li>
                {/* <input placeholder="Search for a team" value={searchValue} onChange={ (e) => handleSearchChange(e)}/> */}
              </ul>
            </div>
         </nav>
       
        )
    }
}

