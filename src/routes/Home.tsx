import './../App.css';
import { Layout } from '../components/Layout';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { ItemProps } from './../types';
import { getItems, deleteItem } from './../utils/handlers';

export default function Home() {

  const [items, setItems] = useState<ItemProps[]>([]);

  const fetchData = async () => {
    const items = await getItems() ?? [];
    setItems(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteItem(id);
    fetchData();
  };

  return (
    <Layout>
      {items.length > 0 && items.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            password={item.password}
            client={item.client}
            color={item.color}
            onDelete={() => handleDelete(item.id!)} />
        </div>
      ))}
    </Layout>
  );
}
