import styled from 'styled-components';
import NavBar from '../comps/NavBar';
// import Header from '../comps/Header';
// import HeroLottie from '../comps/HeroLottie';
import SigninForm from '../comps/SigninForm';

const Cont = styled.div`
    background-color: #F7F2EE;
    height: 100vh;
`;
const NavBarCont = styled.div`
    width:100%;
    // height:300px;
    position:absolute;
    top:0;
`

const Background = styled.img`
`;

const SigninFormCont = styled.div`
`;

export default function Home() {

    return (<Cont>
        <Background src={'/background-web4.svg'}></Background>
        <NavBarCont>
            <NavBar />
        </NavBarCont>
        {/* <Header/> */}
        {/* <HeroLottie/> */}
        <SigninFormCont>
        <SigninForm />
        </SigninFormCont>
    </Cont>
    )
}