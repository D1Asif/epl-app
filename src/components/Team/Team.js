import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strTeamBadge, strStadium, idTeam } = props.team;
    return (
        <div className="col-xl-4">
            <Card style={{ width: '20rem' }} className="pe-5 ps-5 pt-3 pb-3">
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title ><strong style={{ color: 'black' }}>{strTeam}</strong></Card.Title>
                    <Card.Text>
                        <span style={{ color: 'gray' }}>Stadium: {strStadium}</span>
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}>
                        <Button variant="primary">Explore</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;