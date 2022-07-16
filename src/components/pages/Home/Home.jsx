import React from 'react';
import Header from "../../Common/Header/Header";
import Button from "../../UI/Button/Button";
import Counters from "../../UI/Counters/Counters";
import s from './Home.module.scss'
import Layout from "../../Common/Layout";
import bgImage from '../../img/home-bg.jpg'
import {Link} from "react-router-dom";



const Home = () => {
    return (
        <Layout height='100%' bgImage={bgImage}>
          <Button
              type='main'
              callback={() => {}}
              text='New'
          />
            <Link to='/workout'>Workout</Link>
            <h1 className={s.heading}>EXERCISES FOR
                THE SHOULDERS</h1>
            <Counters />
        </Layout>
    );
};

export default Home;