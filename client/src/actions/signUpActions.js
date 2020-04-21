export  const userPostAction = data => {
    return dispatch => {

    return fetch('http://localhost:5000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        if(data.message) {

        } else {
            localStorage.setItem('token', data.jwt)
            dispatch(loginUser(data.user))
        }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
