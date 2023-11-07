import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamBrief.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMars, faFlag, faFutbol, faUsers } from '@fortawesome/free-solid-svg-icons';

const TeamBrief = () => {
    const { teamId } = useParams();

    const [team, setTeam] = useState({ teams: [{}] });

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => {
                const {teams} = data;
                teams.forEach((team) => team.idTeam === teamId && setTeam(team));
            })
    }, [teamId])

    console.log(team);
    const { strTeam, strTeamBadge, strKeywords, strDescriptionEN, intFormedYear, strStadium, strGender, strDescriptionES, strFacebook, strTwitter, strYoutube, strTeamFanart1  } = team;

    return (
        <div className="dark-background text-white">
            <div className="hero-background d-flex justify-content-center align-items-center p-5">
                <img className="hero-logo" src={strTeamBadge} alt="" />
            </div>

            <div className="team-box mt-5 ms-auto me-auto container text-start pt-3 pb-3 row" style={{ backgroundColor: 'blue' }}>
                <div className="col-md-5 me-auto mt-auto mb-auto p-2">
                    <h2><strong>{strTeam}</strong></h2>
                    <br />
                    <h5> <FontAwesomeIcon icon={faFlag} /> Founded: {intFormedYear}</h5>
                    <h5> <FontAwesomeIcon icon={faUsers} /> Also known as: {strKeywords}</h5>
                    <h5> <FontAwesomeIcon icon={faFutbol} /> Stadium: {strStadium}</h5>
                    <h5> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                </div>
                <div className="col-md-5 p-2">
                    <img className="team-image" src={strTeamFanart1} alt="" />
                </div>
            </div>

            <div className="container mt-5">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionES}</p>
            </div>
            <h3 className="pt-5 pb-5">
                <a href={'https://' + strTwitter} className="p-1" style={{color: '#1DA1F2'}}><FontAwesomeIcon icon={faTwitter} /></a>  
                <a href={'https://' + strFacebook} className="p-1" style={{color: '#3B5998'}}><FontAwesomeIcon icon={faFacebook} /></a> 
                <a href={'https://' + strYoutube} className="p-1" style={{color: '#FF0000'}}><FontAwesomeIcon icon={faYoutube} /></a>
            </h3>

        </div>
    );
};

export default TeamBrief;