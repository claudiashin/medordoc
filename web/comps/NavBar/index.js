import styled from 'styled-components';
import {useRouter} from 'next/router';

const NavBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  // width: 100%;
  margin-top: 30px;
  margin-left: 30px;
  // position: relative;
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
  width: 50px;
  height: 50px;
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
  top: 90px;
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
  
}) => {
  const router = useRouter();
  
  return <NavBarCont>
    <LogoCont>
      <Logo 
        onClick={()=>router.push("/index.js")}
        src={'/MedOrDoc.png'} 
      />
    </LogoCont>

    <NavCont>
      <NavButton onClick={()=>router.push("/index.js")}>Home</NavButton>
      <NavButton onClick={()=>router.push("/booking")}>Bookings</NavButton>
      <NavButton onClick={()=>router.push("/request")}>Requests</NavButton>
    </NavCont>

    <ProfileCont>
      <ProfileIcon onClick={()=>router.push("/profile")} className="icon" src={'/profile.png'}></ProfileIcon>
      <DropdownCont className="dropdown">
        <MenuLink className="signout" href="#">Sign Out</MenuLink>
      </DropdownCont>
    </ProfileCont>

  </NavBarCont>
}

export default NavBar;