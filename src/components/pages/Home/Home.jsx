import React from 'react';
import Header from "../../Common/Header/Header";
import Button from "../../UI/Button/Button";
import Counters from "../../UI/Counters/Counters";
import s from './Home.module.scss'
import Layout from "../../Common/Layout";
import bgImage from '../../img/home-bg.jpg'



const Home = () => {
    return (
        <Layout height='100%' bgImage={bgImage}>
          <Button type='main' callback={() => {}} text='New' />
            <h1>EXERCISES FOR
                THE SHOULDERS</h1>
            <Counters />
        </Layout>
    );
};

export default Home;