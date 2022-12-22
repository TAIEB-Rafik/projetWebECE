import React, { Component } from "react";
import axios from 'axios';
import { BASE_URL } from '../../Constant';

class GoogleAuth extends Component {
    async componentDidMount() {
        const data = (new URL(window.location)).searchParams;
        const cd = data.get('code');
        console.log(cd);
        await axios.post(BASE_URL + "/users/googleLogin", {
            cd: cd
        }).then(res => {
            console.log("ok ", res.data.token)
            localStorage.setItem("token", res.data.token);
            window.location.pathname='/dash'
        }).catch(err => {
            console.log(err)
            window.location.pathname='/'
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default GoogleAuth