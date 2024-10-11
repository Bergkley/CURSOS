import api from "../utils/api";

import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


export default function UserAuth() {
    async function register(user) {
        try {
            const data = await api.post('/users/register',user).then((response)=>{
                return response.data;
            })

            
        } catch (error) {
            console.log(error)
        }
    }

    return {register}
}

