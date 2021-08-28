import React, { useState, useContext, useEffect } from 'react';
import url from '../component/url/baseUrl'
import axios from 'axios'

const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

function GlobalStateProvider({ children }) {

    const [data, setData] = useState({
        user: null,
        loginStatus: false,
        orderUser: null
    })


    useEffect(() => {
        axios({
            method: 'get',
            url: `${url}/getprofile`,
            withCredentials: true

        }).then(function (res) {
            console.log("constext Api response", res)
            if (res.data.status === 200) {
                alert("get profile response in else condition ", res)
                setData(prev => ({
                    ...prev,
                    user: res.data.frofile,
                    loginStatus: true

                }))
            } else {
                alert(res.data.message)
                console.log("get profile response in else condition ", res)
            }
        }).catch((error) => {
            // console.log(err)
            if (error && error.response && error.response.status) {
                // console.log("error ==============> ", error.response.status);
                setData(prev => ({ ...prev, loginStatus: false }))
            }
        })
    }, [])

    console.log("context Api data", data)

    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}


export { UseGlobalState, UseGlobalStateUpdate, GlobalStateProvider }