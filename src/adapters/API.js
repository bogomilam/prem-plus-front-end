const API_ENDPOINT = 'http://localhost:3000/api/v1'
const USERS_ENDPOINT = 'http://localhost:3000/api/v1/users'
const LOGIN_URL = `${USERS_ENDPOINT}/login`
const SIGNUP_URL = `${USERS_ENDPOINT}/signup`
const VALIDATE_URL = `${USERS_ENDPOINT}/validate_user`
const CLUBS_URL = "http://localhost:3000/clubs"


const jsonify = res => res.json()

const login = (loginData) => {
 return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({user: loginData})
}).then(jsonify).then(data => {
    if (data.token)
        localStorage.setItem("token", data.token);
    return data.user;
})
}

const signup = (signupData) => fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({user: signupData})
}).then(jsonify).then(data => {
    if (data.token)
        localStorage.setItem("token", data.token);
    return data.user;
})

const validateUser = () => {
    if (localStorage.token) {
    return fetch(VALIDATE_URL, {
    headers: {
        'Authorization': localStorage.token
    }
}).then(jsonify).then(data => {
    if (data.token)
        localStorage.setItem("token", data.token);
    return data.user;
 }) 
} else {
    return Promise.reject({ error: 'no token'} )
}
}

const updateFollowing = (club_id, user_id)  => {
    return fetch(`${USERS_ENDPOINT}/${user_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
             Accept: "application/json",
             Authorization: localStorage.token
        },
        body: JSON.stringify({ club_id: club_id,
        user_id: user_id })
    }).then(jsonify)
}


const postFollowing = (club_id, user_id)  => {
   return fetch(`${USERS_ENDPOINT}/${user_id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
             Accept: "application/json",
             Authorization: localStorage.token
        },
        body: JSON.stringify({ club_id: club_id,
        user_id: user_id })
    }).then(jsonify)
}


const getFollowing = (club_id) => {
    return fetch(`${CLUBS_URL}/${club_id}`).then(jsonify)
}

const deleteFollowing = (club_id, user_id) => {
    return fetch(`${USERS_ENDPOINT}/${user_id}`, {
        method: "DELETE",
        body: JSON.stringify({ user_id: user_id, 
            club_id: null})
    }).then(jsonify)
}

export default {
    login,
    signup,
    validateUser,
    updateFollowing,
    getFollowing,
    postFollowing,
    deleteFollowing
}