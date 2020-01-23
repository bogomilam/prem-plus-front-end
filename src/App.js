import React, { useState, useEffect } from 'react';
import './App.css';
import FixtureContainer from './containers/FixtureContainer';
import Navbar from './components/Navbar';
import ResultsContainer from './containers/ResultsContainer';
// import SignupForm from './components/user/SignupForm'
import LogInForm from './components/user/LogInForm'
import API from './adapters/API'
import Profile from './components/user/Profile'
import ClubProfile from './components/Clubs/ClubProfile'
import FullFixture from './components/Fixtures/FullFixture'

import LoginForm from './components/user/LogInForm';


const CLUB_ENDPOINT = 'http://localhost:3000/clubs'


function App(){
  
  const [ user, setUser ] = useState(null)
  const [ displayClub, setDisplayClub ] = useState(null)  
  const [ searchedClub, setSearchedClub ] = useState(null)  
  const [ nav, setNav ] = useState("Home")
  const [ followedClub, setFollowedClub ] = useState(null)
  const [ allClubs, setAllClubs ] = useState(null)
  const [ searchValue, setSearchValue ] = useState("")
  
const filterSearchResults = () => {
  let searchResult = allClubs.filter(club => 
    club.name.toLowerCase().includes(searchValue))
    setSearchedClub(searchResult)
    // if (searchResult === "") setNav("Home")
    console.log(searchResult)
}

  const handleSearchChange = e => {
    setSearchValue(e.target.value) 
    filterSearchResults()
    // console.log(filterSearchResults())
  }

  const getSupport = () => {
    // console.log(user, "USER")
    API.getFollowing(user.club_id).then(club => setFollowedClub(club) )
  }

  const unfollowClub = () => {
    API.deleteFollowing(user.club_id)
setFollowedClub(null)
  }

  const followClub = club => {
    // console.log(club.id, user.id)
    API.postFollowing(club.id, user.id).then(setFollowedClub(club))
  }

  const resetFollowing = club => {
    API.updateFollowing(club.id, user.id).then(setFollowedClub(club) )
    // console.log(followedClub, "FOLLOWED CLUB")
  }

  const unshowClub = () => {
    setDisplayClub(null)
  }

  const unshowSearch = () => {
    setNav("Home")
  }

  const showClub = club => {
    setDisplayClub(club)
  }

  const handleNav = (e) => {
    setNav(e.target.innerText)
}



useEffect(() => {
  fetchClubs();
  API.validateUser().then(user => setUser(user))
  .catch(console.error)

}, []);

useEffect(() => {
  if (user) getSupport() 
}, [user]);

const fetchClubs = () => {
  fetch(CLUB_ENDPOINT).then(response => response.json()).then(data => setAllClubs( data ) )
}

const handleLogin = (loginData) => {
  API.login(loginData).then(user => setUser(user))
}

const handleSignUp = (signupData) => {
  API.signup(signupData).then(user => setUser(user))
}

const renderFixtureContainer = () => {
  if (searchedClub) return < ClubProfile showClub={showClub} unshowClub={unshowClub} user={user} club={searchedClub} 
  followedClub={followedClub} followClub={followClub} unfollowClub={unfollowClub}
  resetFollowing={resetFollowing} />
  // if (searchedResult === "") return < FixtureContainer showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
  if (nav === "Home") return  < FixtureContainer showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
  if (nav === "Results") return < ResultsContainer showClub={showClub} unshowClub={unshowClub} />
  if (nav === "Profile") return < Profile followedClub={followedClub} unfollowClub={unfollowClub} unshowSearch={unshowSearch} />
  return  < FixtureContainer showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
}


return (
      <div>
        {!user && (< LoginForm login={handleLogin} signup={handleSignUp} />)}
          {user && (<div>< Navbar handleNav={handleNav}  user={user} handleSearchChange={handleSearchChange} searchValue={searchValue} >
          </Navbar>
          { !displayClub ? (
            renderFixtureContainer()
          ) : (
            < ClubProfile  showClub={showClub} unshowClub={unshowClub} user={user} club={displayClub} 
            followedClub={followedClub} followClub={followClub} unfollowClub={unfollowClub}
            resetFollowing={resetFollowing} />
          )
          }</div>) }
      </div>
    )
  }

export default App