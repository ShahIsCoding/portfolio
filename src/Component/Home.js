import React,{useState} from 'react'
import IntroPage from './Intro';
import ProfilePage from './Profile';

function Home() {
    const [introPage,setIntroPage] = useState(false);
    const [profilePage,setProfilePage] = useState(true);
    return (
    <>
    {introPage && <IntroPage />}
    {profilePage && <ProfilePage />}
    </>
  )
}

export default Home