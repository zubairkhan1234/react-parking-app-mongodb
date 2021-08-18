import React, { useState, useContext, useEffect } from 'react';
import url from '../component/url/baseUrl'
import axios from 'axios'

const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

function GlobalStateProvider({ children }) {

    const [data, setData] = useState({
        role: null,
        user: null,
        loginStatus: false,
        orderUser: null
    })


    useEffect(() => {
        axios({
            method: 'post',
            url: `${url}/getprofile`,
            withCredentials: true

        }).then((res) => {
            console.log("constext Api response", res)
            if (res.data.status === 200) {
                setData(pre => ({
                    ...pre,
                    user: user.data.frofile
                }))


            } else {

            }
        }).catch((err) => {
            console.log(err)
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