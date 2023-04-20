import React from 'react';
import Video from '../../components/video/video';
import CardMenu from '../../components/CardMenuSet/CardMenu';
import Meta from '../../components/Helmet/Meta';


const HomeScreen = () => {

    return (
        <>
            <Meta />
            <Video/>
            <CardMenu />
        </>
    )
}

export default HomeScreen;
