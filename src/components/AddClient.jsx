import {useState} from 'react'

export default function AddClients(props) {
    const [clientName, setClientName] = useState('');
    const [residency, setResidency] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addClient(clientName, residency);
        setClientName('');
        setResidency('');
    };    
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new Client</h2>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    type="text" 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="residency">Residency</label>
                <textarea 
                    name="residency" 
                    value={residency} 
                    onChange={(e) => setResidency(e.target.value)}>
                </textarea>
            </div>
            <button type="submit" className="btn-submit">Add Client</button>
        </form>
    )
}