import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import HomeContainer from './Home/containers/HomeContainer';
import Home from "../routes/Home/components/Home";

const scenes = Actions.create(
    <Scene key='root'>
        <Scene key="home" component={HomeContainer} title="home page" initial={true} />
    </Scene>
);


export default scenes;