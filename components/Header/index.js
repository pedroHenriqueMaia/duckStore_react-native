import React from 'react';
import { Image } from 'react-native';
import { Conatiner } from './styles'
import Logo from '../../assets/duckStore.png';


function Header(params) {
    return(
        <Conatiner>
            <Image 
              source={Logo}
            />
        </Conatiner>
    )
}

export default Header;