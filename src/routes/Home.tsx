import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Layout } from '../components/Layout';
import Card from '../components/Card';

function Home() {

  const items = [{
    title: 'John Doe',
    password: '123456',
    color: '#494522',
    client: 'Dij'
  },
  {
    title: 'John Doe',
    password: '123456',
    color: '#494522',
    client: 'Dij'
  }]

  return (
    <Layout>
      {items.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            password={item.password}
            color={item.color}
            client={item.client} />
        </div>
      ))}
    </Layout>
  );
}

export default Home;
