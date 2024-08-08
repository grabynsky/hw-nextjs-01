import React from 'react';

const UserPage = ({searchParams}:any) => {
    // const user = JSON.parse(searchParams.data)
    const {name, username, email} = JSON.parse(searchParams.data)

    return (
        <div>
            <p><b>Name:</b> {name}</p>
            <p><b>User name:</b> {username}</p>
            <p><b>E-mail:</b> {email}</p>
        </div>
    );
};

export default UserPage;