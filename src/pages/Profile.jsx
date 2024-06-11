// import React from 'react'
import useAuth from "../hooks/useAuth"

function Profile() {
    const { user } = useAuth()
    return (
        <div>
            <h2>Profile</h2>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}

export default Profile