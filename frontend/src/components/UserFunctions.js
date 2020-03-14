import axios from 'axios'

axios.defaults.baseURL  = "http://localhost:5000/"

export const register = newUser => {
    return axios
    .post('users/register',{
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        uemail: newUser.uemail,
        upass: newUser.upass
    })
    .then(res => {
        console.log("Registered")
        console.log(res)
        return res.data
    })
}

export const login = user => {
    return axios
    .post('users/login',{
        uemail: user.uemail,
        upass: user.upass
    })
    .then(res => {
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}