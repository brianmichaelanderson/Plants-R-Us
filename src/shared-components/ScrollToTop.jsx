import { useEffect } from 'react';
import {useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // console.log('current useLocation pathname =', pathname)

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [pathname])

    //use return null to make it explicitly clear this component is intended not to return anything.
    //No required, but considered best practice 
    return null;

}

export default ScrollToTop;