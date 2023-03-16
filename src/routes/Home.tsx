import './../App.css';
import { Layout } from '../components/Layout';
import Card from '../components/Card';
import localforage from 'localforage';
import { useEffect, useState } from 'react';
import { ItemProps } from './../types';

export default function Home() {

  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    const getItems = async () => {

      localforage.getItem<ItemProps[]>('dij-passwords')
        .then((value) => {
          setItems(value || [])
        }).catch((err) => {
          console.error(err);
        });
    };

    getItems();

  }, []);

  return (
    <Layout>
      {items.length > 1 && items.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            password={item.password}
            client={item.client}
            color={item.color} />
        </div>
      ))}
    </Layout>
  );
}
