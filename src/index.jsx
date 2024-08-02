import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Clients = () => {

    // get Clients to display
    const [clients, setClients] = useState([]); 

    // set loading...
    const [loading, setLoading] = useState(true);

    // Handle individual variables
    const [id, setId] = useState("");
    const [clientName, setClientName] = useState(""); 
    const [residency, setResidency] = useState("");

    // Add Modal
    const [showAddModal, setShowAddModal] = useState(false); 
    const makeAddModalAppear = () => setShowAddModal(!showAddModal); 

    // Update Modal
    const [showUpdateModal, setShowUpdateModal] = useState(false); 
    const makeUpdateModalAppear = () => setShowUpdateModal(!showUpdateModal); 

    // Fetch Clients
    const getClients = async () => {
        const response = await fetch(
            "http://localhost:5029/api/ClientApi/GetClients"
        );
        const result = await response.json();
        setClients(result);
        setLoading(false);
    }

    // Fetch Client
    const getClient = async (id) => {
        const response = await fetch(
            "http://localhost:5029/api/ClientApi/GetClient?id="+id,
        );

        const result = await response.json();
        setId(result.id);
        setClientName(result.clientName);
        setResidency(result.residency);

        setLoading(false);
    }

    // Add Client
    const saveClient = async () => {
        const dataToSend = {
            "clientName": clientName,
            "residency": residency
        }

        const response = await fetch(
            "http://localhost:5029/api/ClientApi/SaveClient",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(dataToSend)
            }
        );

        setClientName('');
        setResidency('');

        getClients();
        makeAddModalAppear();
    }

    // Update Client
    const updateClient = async () => { // Changed function name to lowercase
        const dataToSend = {
            "clientName": clientName,
            "residency": residency,
        }

        const response = await fetch(
            "http://localhost:5029/api/ClientApi/UpdateClient?Id=" + id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(dataToSend)
            }
        );

        setClientName('');
        setResidency('');

        getClients();
        makeUpdateModalAppear();
    }

    // Delete Client
    const deleteClient = async (id) => { // Changed function name to lowercase
        const response = await fetch(
            "http://localhost:5029/api/ClientApi/DeleteClient?Id=" + id,
            {
                method: "DELETE",
            }
        );

        getClients();
    }

    // update browser in case of database updates
    useEffect(() => {
        getClients();
    }, []);

    // if the browser is still loading data
    if (loading) return <center><h1>Loading</h1></center>

    return (
        <>
            {/* Add Client */}
            <Modal show={showAddModal} onHide={makeAddModalAppear}>
                <Modal.Header closeButton>
                    New Client Info
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        id="name"
                    />

                    <label htmlFor="residency">Residency:</label>
                    <input type="text"
                        value={residency}
                        onChange={(e) => setResidency(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={saveClient}>Save Client</Button>
                </Modal.Footer>
            </Modal>

            {/* Update Client */}
            <Modal show={showUpdateModal} onHide={makeUpdateModalAppear}>
                <Modal.Header closeButton>
                    Update Client Info
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="id">Id:</label>
                    <input type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        id="id"
                        readOnly
                    />

                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        id="name"
                    />

                    <label htmlFor="residency">Residency:</label>
                    <input type="text"
                        value={residency}
                        onChange={(e) => setResidency(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateClient}>Update Client</Button>
                </Modal.Footer>
            </Modal>

            <div className="container mt-5">

                {/* Show Add Client Modal */}
                <Button
                    className='mb-2'
                    onClick={makeAddModalAppear}
                >Add New Client</Button>

                {/* Display All Client Data */}
                <ul>
                    {
                        clients.map((c) =>
                            <li key={c.id} >{c.clientName} || {c.residency}
                                {/* Delete Client */}
                                <Button onClick={() => deleteClient(c.id)}>Delete</Button>
                                {/* Update Client */}
                                <Button onClick={() => {getClient(c.id); makeUpdateModalAppear()}}>Update</Button>  
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default Clients;
