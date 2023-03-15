import { useEffect, useState } from 'react';
import './../App.css';
import { Layout } from '../components/Layout';
import axios from 'axios';

const formClasses = 'bg-gray-800 text-white rounded-md p-2 w-full mb-4';

function Home() {

  type Client = {
    name: string;
    color: string;
  };

  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    async function getClients() {
      /**
       * Get clients from API
       * NOTE: This is a CORS proxy, so it's not safe to use in production,
       * read more here https://allorigins.win/.
       */
      await axios.get('https://api.allorigins.win/raw?url=https://pastebin.com/raw/zSFTiVWr', { timeout: 5000 })
        .then((response) => {
          console.log(response.data);
          setClients(response.data);
          setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError('Unable to fetch clients');
        });
    };

    getClients();
  }, []);

  return (
    <Layout>
      <div className='md:m-auto md:w-4/6 lg:m-auto lg:w-3/6'>
        <h3 className="text-lg mb-4">Add new password</h3>
        <form>
          <input placeholder='Title' className={formClasses} type='text' />
          <input placeholder='Password' className={formClasses} type='password' />
          <select className={formClasses} disabled={!isLoaded}>
            {isLoaded && !error ? (<>
              <option value=''>Select client</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>{client.name}</option>
              ))}
            </>
            ) : (
              <>
                {error ? (<option value='error'>{error}</option>) : (<option value=''>Loading...</option>)}
              </>
            )}
          </select>
          <button disabled={!isLoaded} type='submit' className='bg-gray-400 text-black rounded-md p-2'>Add</button>
        </form>
      </div>
    </Layout >
  );
}

export default Home;
