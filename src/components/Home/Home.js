import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {

    const [teams, setTeams] = useState({teams: []});

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data))
    }, [])

    console.log(teams);
    
    const teamsArray = teams.teams;

    return (
        <div className="dark-background text-white">
            <div className="hero-background ">
                <h1 className="hero-text d-flex justify-content-center align-items-center">
                    <strong>English Premier League</strong>
                </h1>
            </div>
            <div className="row g-5 container me-auto ms-auto mt-3">
                {
                    teamsArray.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;