import React, {Component} from 'react';
import logo from '../image/App.PNG';

class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
    <img className='img' src={logo} alt="logo" width="100px" height="100px" />
    <p className='navbar'>COVID-19 UPDATE FOR GHANA</p>
    </div>
     );
    }
}

export default HeaderComponent;