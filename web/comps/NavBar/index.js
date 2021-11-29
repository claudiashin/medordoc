import styled from 'styled-components';
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import home from '../../pages/home';

const NavBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  // width: 100%;
  margin-top: 30px;
  margin-left: 30px;
  // position: relative;
  cursor: pointer;
`;

const LogoCont = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 110px;
  height: 90px;
`;

const NavCont = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  color: #636363;
  justify-content: flex-start;
  left: 200px;
  position: absolute;
  flex-wrap: wrap;
  margin-left: 20px;
`;

const NavButton = styled.p`
  display: flex;
  margin-right: 80px;

  &:hover {
    border-width: 0 0 2.5px;
    border-style: solid;
    font-weight: bold;
    color: ${props => props.bgHover};
  }
`;

const ProfileCont = styled.div`
margin-right: 40px;
  // position: relative;
  // display: inline-block;

  &:hover {
    .dropdown {
      display: block;
    }
  }
`;

const ProfileIcon = styled.img`
  width: 35px;
  height: 35px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  // &:hover {
  //   background-color: #31FF00;
  // }
`;

const DropdownCont = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 70px;
  right: 35px;

  &:hover {
    background-color: #DDD;
    display: block;
  }
`;

const MenuLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  // &:hover {
  //   background-color: #DDD;
  // }
`;

const NavBar = ({
  bgHover= "#5D5D5D",
}) => {
  const router = useRouter();

  const [logo, setLogoLink] = React.useState("/")
  const [homelink, setHomeLink] = React.useState("/home")
  const [profile, setProfile] = React.useState("/login")
  const [booking, setBooking] = React.useState("/login")
  const [request, setRequest] = React.useState("/login")
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogoLink("/home")
      setHomeLink("/home")
      setProfile("/profile")
      setBooking("/booking")
      setRequest("/request")
      console.log("signin")

      } else {
        seetLogoLink("/")
       setHomeLink("/")
       setProfile("/login")
       setBooking("/login")
       setRequest("/login")
       console.log("signout")
      }
    });
  })

  const SignOut = async()=>{
    const auth = getAuth();
    await signOut(auth);
    router.push("/")
  }


  return <NavBarCont>
    <LogoCont>
      <Logo
        onClick={() => router.push(logo)}
        src={'/MedOrDoc.png'}
      />
    </LogoCont>

    <NavCont>
      <NavButton bg={bgHover} onClick={() => router.push(homelink)}>Home</NavButton>
      <NavButton bg={bgHover} onClick={() => router.push(booking)}>Bookings</NavButton>
      <NavButton bg={bgHover} onClick={() => router.push(request)}>Requests</NavButton>
      {/* <NavButton onClick={()=>router.push("/checkin")}>Checkin</NavButton> */}
    </NavCont>

    <ProfileCont>
      <ProfileIcon onClick={() => router.push(profile)} className="icon" src={'/profile.png'}></ProfileIcon>
      <DropdownCont className="dropdown">
        <MenuLink onClick={SignOut} className="signout" href="#">Sign Out</MenuLink>
      </DropdownCont>
    </ProfileCont>

  </NavBarCont>
}

export default NavBar;