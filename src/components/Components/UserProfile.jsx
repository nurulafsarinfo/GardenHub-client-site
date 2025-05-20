import React from 'react';
import { useLoaderData } from 'react-router';

const UserProfile = () => {
    const {name} = useLoaderData();
    console.log(name)
    return (
        <div>
            
        </div>
    );
};

export default UserProfile;