import axios from 'axios'

axios.defaults.baseURL  = "http://localhost:5000/"

export const login = user => {
    return axios
    .post('users/login',{
        uemail: user.uemail,
        upass: user.upass
    })
    .then(res => {
        localStorage.setItem('usertoken',res.data.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}