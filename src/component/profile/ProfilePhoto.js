import picture from './picture.jpg';
import React from 'react';


const ProfilePhoto = () => {
    return(
    <img className='picture shadow-lg p-3 mb-5 bg-body rounded' src={picture} alt="profile picture" width='100%' height='100%'/>
    );
}

export default ProfilePhoto;