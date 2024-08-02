import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';

const Clients = () => {
    const [client, setClient] = useState([]); //for displaying the clients
    const [loading, setLoading] = useState(true);

    const [showAddModal, setShowAddModal] = useState(false); //the close AddModal
    const makeAddModalAppear = () => setShowAddModal(!showAddModal); //to open AddModal

    const [showUpdateModal, setShowUpdateModal] = useState(false); //the close UpdateModal
    const makeUpdateModalAppear = () => setShowUpdateModal(!showUpdateModal); //to open AddModal

    const [clientName, setClientName] = useState(""); //for AddClientName
    const [residency, setResidency] = useState(""); //for AddClientResidency

    // Fetch Clients
    const getClients = async () => {
        const response = await fetch(
          "http://localhost:5029/api/ClientApi/GetClients"
        );
        const result = await response.json()
        setClient(result)
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
        getClients();
        makeAddModalAppear();
    }

     // Update Client
     const updateClient = async (id) => {
      const dataToSend = {
          "clientName": clientName,
          "residency": residency
      }

      const response = await fetch(
          "http://localhost:5029/api/ClientApi/UpdateClient?Id="+id,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(dataToSend)
          }
      );
      getClients();
      makeUpdateModalAppear();
  }

  // Delete Client
  const DeleteClient = async (id) => {
      const response = await fetch(
          "http://localhost:5029/api/ClientApi/DeleteClient?Id="+id,
          {
              method: "DELETE",
          }
      );
      getClients();
  }

    useEffect(() => {
        getClients();
    }, []);

    if (loading) return <center><h1>Loading</h1></center>

    return (
        <>
            {/* Add Client */}
            <Modal show={showAddModal} onHide={makeAddModalAppear}>
                <Modal.Header closeButton>
                    new client info
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
                    <Button onClick={saveClient}>Save client</Button>
                </Modal.Footer>
            </Modal>

            {/* Update Client */}
            <Modal show={showUpdateModal} onHide={makeUpdateModalAppear}>
                <Modal.Header closeButton>
                    Update Client Info
                </Modal.Header>
                {/* <Modal.Body>
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
                    <Button onClick={saveClient}>Save client</Button>
                </Modal.Footer> */}
            </Modal>

            <div className="container mt-5">
                <Button
                    className='mb-2'
                    onClick={makeAddModalAppear}
                >Add new Client</Button>
                <ul>
                    {
                      client.map((c) =>
                          <li key={c.id} >{c.clientName} || {c.residency}
                          <Button onClick={()=>DeleteClient(c.id)}>Delete</Button>
                          {/* <Button onClick={()=>{UpdateClient(c.id), makeUpdateModalAppear()}}>Update</Button> */}
                          <Button onClick={()=>makeUpdateModalAppear()}>Update</Button>
                          </li>
                      )
                    }
                </ul>
            </div>
        </>
    );
}

export default Clients;