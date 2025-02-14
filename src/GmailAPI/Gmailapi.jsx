

import React, { useEffect, useState } from 'react'
function Gmailapi() {
    const [accesstoken, setAccesstoken] = useState('')
    const handlelogin = () => {
        // console.log("handle login clicked")
        const CLIENT_ID = "360117167880-nasot64b60aseko3ergmebi4il4be5ne.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000";
        // const SCOPE = "http://www.googleapis.com/auth/gmail.readonly"; //this line
        //  show error
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly ";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL
    }
    const getAccessToken = () => {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        localStorage.setItem("Token", token && token[1]);
    }
    useEffect(() => {
        getAccessToken()
    }, [])
    const getEmailData = () => {
        let token = localStorage.getItem("Token");
        console.log("hello", token);
        let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(fetchMail(json.messages[0].id)))
            .catch(error => console.log('Error in fetching mails', error))
    }
    const fetchMail = (id) => {
        console.log("message is in==", id)
        // let id="18e28f8a1ea93a27";
        let token = localStorage.getItem("Token")
        const options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            }
        }
        let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Error in fetching mails', error))
    }
    return (
        <>
            <div>
                {accesstoken ? (
                    <div>
                        <h1>Access token otaines</h1>
                        <p>Access Token:{accesstoken}</p>
                    </div>) : (
                    <>
                        <button onClick={handlelogin}>Login with google</button>
                        <button onClick={() => getEmailData()}>get Email</button>
                        <button onClick={() => fetchMail("18e55f97d37b4be1")}>Fetch Emails</button>
                    </>
                )
                }
            </div>
        </>
    )
}
export default Gmailapi;