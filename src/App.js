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
    setFollowedClub(null)
    API.deleteFollowing(user.club_id)
  }

  const followClub = id => {
    setFollowedClub(id)
    API.postFollowing(id, user.id)
  }

  const resetFollowing = id => {
    setFollowedClub(id)
    // console.log(followedClub, "FOLLOWED CLUB")
    API.updateFollowing(id, user.id)
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
  if (searchedClub) return < Profile followedClub={searchedClub} unshowSearch={unshowSearch} /> 
  // if (searchedResult === "") return < FixtureContainer showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
  if (nav === "Home") return  < FixtureContainer showClub={showClub} unshowClub={unshowClub} displayClub={displayClub} />
  if (nav === "Results") return < ResultsContainer showClub={showClub} unshowClub={unshowClub} />
  if (nav === "Profile") return < Profile followedClub={followedClub} unfollowClub={unfollowClub} unshowSearch={unshowSearch} />
}

return (
      <div > 
        < Navbar handleNav={handleNav}  user={user} handleSearchChange={handleSearchChange} searchValue={searchValue} >
        {/* {user && <span>Hello, {user.email}!</span>} */}
         </Navbar>
         { !user ? (
         < LogInForm login={handleLogin} signup={handleSignUp} /> 
         ) : ( 
           < FixtureContainer /> 
         )}
          { !displayClub ? (
            renderFixtureContainer()
          ) : (
            < ClubProfile  showClub={showClub} unshowClub={unshowClub} club={displayClub} 
            followedClub={followedClub} followClub={followClub} unfollowClub={unfollowClub}
            resetFollowing={resetFollowing} />
          )
          }
      </div>
    )
  }

export default App