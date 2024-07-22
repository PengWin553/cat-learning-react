import useSWR from 'swr';

// Import useSWR from swr package
  // type "npm i swr" in terminal

// created function to handle API request
const fetcher = (...args) => fetch(...args, {
  method: "GET",
  headers: {"Authorization" : "60e08f76-deca-44cd-ad5f-0c2837cae2f5"},
}).then((res) => res.json());

const Swr = () => {
  const {
    data: teamNames,
    error,
    isValidating,
  } = useSWR('https://api.balldontlie.io/v1/teams', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className='with-swr container'>
      <ul>
        {teamNames &&
          teamNames.data.map((teamName, index) => (
            <li key={index}>{teamName.full_name}</li>
          ))}
      </ul>
      
    </div>
  );
};

export default Swr;