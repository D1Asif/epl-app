import React from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const {teamId} = useParams();
    console.log(teamId);
    return (
        <div>
            Hello
        </div>
    );
};

export default TeamDetails;