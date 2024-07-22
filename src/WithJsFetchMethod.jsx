import { useState, useEffect } from 'react';

const Fetch = () => {
  const [teamNames, setTeamNames] = useState([]);

  useEffect(() => {
    fetch('https://api.balldontlie.io/v1/teams', 
    {
      method: "GET",
      headers: {"Authorization" : "60e08f76-deca-44cd-ad5f-0c2837cae2f5"}
    }
    )
      .then((res) => res.json())
      .then((data) => {
        setTeamNames(data.data);
      });
  }, []);

  return (
    <div className='container with-fetch'>
      <ul>
        {teamNames.map((team) => (
          <li key={team.id}>{team.full_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;


