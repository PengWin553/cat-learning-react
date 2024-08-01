import { useState, useEffect } from 'react';

const Clients = () => {
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState([]);

  const getClients = async () => {
    const response = await fetch(
      "http://localhost:5029/api/ClientApi/GetClients"
    );

    const result = await response.json()
    setClient(result)
    setLoading(false)
  }

  useEffect(() => {
    getClients();
  }, []);

  if (loading) return <center><h1>Loading</h1></center>

  return(
    <>
      <h1>Clients:</h1>
      <ul>
        {
          client.map((c) =>
            <li key={c.id}> <b>Name:</b> {c.clientName} <br></br> <b>Residency: </b>{c.residency}</li>
          )
        }
          <br></br>

      </ul>
    </>
  );

}

export default Clients;

