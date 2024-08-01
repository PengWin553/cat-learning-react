// import { countReset } from 'console';
import {useState, useEffect} from 'react';
import AddClient from './components/AddClient';
// import Post from './components/Post';

const Clients = () => {
    const [clients, setClients] = useState([]);
    // const [loading, setLoading] = useState([]);

    const fetchClients = async() => {
        const response = await fetch("http://localhost:5172/api/ClientApi/GetClients");
        const data = await response.json();
        setClients(data);
    }
     
    useEffect(() => {
        fetchClients()
    }, []);

    const addClient = async(clientName, residency) => {
        const response = await fetch('http://localhost:5172/api/ClientApi/SaveClient', {
        method: 'POST',
        body: JSON.stringify({
            clientName: clientName,
            residency: residency,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });

        const data = await response.json();
        setClients((prevClients) => [data, ...prevClients])

        // Re-fetch the clients after adding a new one
        fetchClients();
    };

    if (loading) return <center><h1>Loading</h1></center>

    return(
        <>
            <h1>Clients</h1>
            <br />
            <AddClient addClient={addClient}/>
            <ul>
            {
                clients.map((c) =>
                    <li key={c.id} id={c.id}> <b>Name:</b> {c.clientName} || <b>Residency: </b>{c.residency}</li>
                )
            }

            </ul>

        </>
    );
}

export default Clients;
