import { useEffect, useState } from 'react';
import './../App.css';
import { Layout } from '../components/Layout';
import axios from 'axios';
import localforage from 'localforage';
import { ItemProps, Client } from './../types';
import { useNavigate } from 'react-router-dom';

const formClasses = 'bg-gray-800 text-white rounded-md p-2 w-full mb-4';

function Add() {

  const [formData, setFormData] = useState({ title: '', password: '', client: '', color: '' });
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    async function getClients() {
      /**
       * Get clients from API
       * NOTE: This is a CORS proxy, so it's not safe to use in production,
       * read more here https://allorigins.win/.
       */
      await axios.get('https://api.allorigins.win/raw?url=https://pastebin.com/raw/zSFTiVWr', { timeout: 5000 })
        .then((response) => {
          setClients(response.data);
          setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError('Unable to fetch clients');
          console.error(error);
        });
    };

    getClients();

  }, []);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Get the current list of items from local storage
    let data: ItemProps[] | null = await localforage.getItem('dij-passwords');

    if (data) {
      data.unshift(formData);
    } else {
      data = [formData];
    }

    // Store the updated list in local storage
    localforage.setItem('dij-passwords', data)
      .then(() => {
        // Reset the form data and navigate to the home page
        setFormData({ title: '', password: '', client: '', color: '' })
        navigate('/')
      }).catch((err) => {
        console.error(err);
      });
  };

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    // Get the color of the selected client
    const color = clients.find((client) => client.name === value)?.color
    // Update the form data state with the new value
    setFormData({ ...formData, [name]: value, color: color || '' });
  };

  return (
    <Layout>
      <div className='md:m-auto md:w-4/6 lg:m-auto lg:w-3/6'>
        <h3 className="text-lg mb-4">Add new password</h3>
        <form onSubmit={handleSubmit}>
          <input required minLength={3} maxLength={64} placeholder='Title' value={formData.title} onChange={handleInputChange} className={formClasses} type='text' name='title' />
          <input required minLength={8} maxLength={64} placeholder='Password' value={formData.password} onChange={handleInputChange} className={formClasses} type='password' name='password' />
          <select required className={formClasses} disabled={!isLoaded} value={formData.client} onChange={handleInputChange} name='client'>
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

export default Add;
