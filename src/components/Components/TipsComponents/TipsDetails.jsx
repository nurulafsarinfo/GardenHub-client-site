import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const data = useLoaderData();

    return (
        <div>
            <div>
                <div>
                    <img src={data.image} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default TipsDetails;