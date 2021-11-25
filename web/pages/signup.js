import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//import comps
import NavBar from "../comps/NavBar";
import HeaderTitle from "../comps/HeaderTitle";
import HeroLottie from "../comps/HeroLottie";
import SigninForm from "../comps/SigninForm";
import SigninFormTwo from "../comps/SigninFormTwo";
import Btn from "../comps/Btn";
import InfoCard from "../comps/InfoCard";
import myLottie from "../public/lottie_login.json";
import myLottie2 from "../public/lottie_welcome.json";
import HeroAvatar from "../comps/HeroAvatar";
import Footer from "../comps/Footer";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";



const Cont = styled.div`
  background-color: #f7f2ee;
  height: 100%;
`;
const NavBarCont = styled.div`
  width: 100%;
  // height:300px;
  position: absolute;
  top: 0;
`;

const WaveCont = styled.div`
  width: 100%;
  object-fit: cover;
`;

const Wave = styled.img`
  width: 100%;
  @media only screen and (min-width: 500px) {
    object-fit: cover;
    height: 320px;
    width: 100%;
  }
`;

const HeaderTitleCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const HeroLottieCont = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
`;

const BodyCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SignInCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignInCont_Two = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Title = styled.p`
  margin-left: 15px;
  font-size: 16px;
`;
const BtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

const BtnContTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 80px;
`;

const BodyContTwo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroLottieTwo = styled.div`
  margin-right: 10px;
`;

const InfoCardCont = styled.div`
  margin-left: 10px;
`;

const FooterCont = styled.div`
  width: 100%;
  bottom: 0;
`;

export default function Home() {

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Signed in", user)
        // might want to use a state that changes when signed in
      } else {
        console.log("Signed out")
      }
    });
  })
  
  const router = useRouter();

  const [clinicLang, setLanguage] = React.useState([]);
  const [clinicName, setClinicName] = React.useState("");
  const [clinicAdd, setClinicAdd] = React.useState("");
  const [clinicNum, setClinicNum] = React.useState("");
  const [clinicOpen, setClinicOpen] = React.useState("");
  const [clinicClose, setClinicClose] = React.useState("");

  const [changePage, setChangePage] = useState(0);

  const info = {
    name: clinicName,
    lang: clinicLang,
    add: clinicAdd,
    num: clinicNum,
    open: clinicOpen,
    close: clinicClose,
  };

  const setInfo = ({
    name = clinicName,
    lang = clinicLang,
    add = clinicAdd,
    num = clinicNum,
    open = clinicOpen,
    close = clinicClose,
  }) => {
    setClinicName(name);
    setLanguage(lang);
    setClinicAdd(add);
    setClinicNum(num);
    setClinicOpen(open);
    setClinicClose(close);
  };

  const body = () => {
    if (changePage === 0) {
      return (
        <div>
          <BodyCont>
            <HeroLottieCont>
              <HeroLottie changePage source={myLottie} width="550px" />
            </HeroLottieCont>

            <SignInCont>
              <SigninForm
                setChangePage={(number) => setChangePage(changePage + number)}
              />
            </SignInCont>
          </BodyCont>
        </div>
      );
    } else if (changePage === 1) {
      return (
        <div>
          <HeaderTitleCont>
            <HeaderTitle title="Complete Your Account" />
          </HeaderTitleCont>

          <BodyCont>
            <HeroLottieCont>
              <HeroAvatar
                herowidth="220px"
                heroheight="220px"
                heromargin="50px 20px 40px 0px"
              />
            </HeroLottieCont>

            <SignInCont_Two>
              <SigninFormTwo
                setChangePage={(number) => setChangePage(changePage + number)}
                submit={async () =>
                  await addDoc(collection(db, "clinics"), info)
                }
                setInfo={setInfo}
                info={info}
              />
            </SignInCont_Two>
          </BodyCont>
        </div>
      );
    } else {
      return (
        <div>
          <BodyContTwo>
            <HeroLottieTwo>
              <HeroLottie changePage source={myLottie2} width="400px" />
            </HeroLottieTwo>
            <InfoCardCont>
              <InfoCard />
            </InfoCardCont>
          </BodyContTwo>

          <BtnContTwo onClick={() => router.push("/login")}>
            <Btn
              title="Let's Explore"
              bgColor="#90AABB"
              width="160px"
              height="50px"
              fSize="16px"
              fWeight="600"
              borderRad="25px"
              bgHover="#7C9AAD"
            />
          </BtnContTwo>
        </div>
      );
    }
  };

  return (
    <Cont>
      <Wave src={"/background-web5.svg"}></Wave>
      <NavBarCont>
        <NavBar />
      </NavBarCont>
      {body()}
      <FooterCont>
        <Footer />
      </FooterCont>
    </Cont>
  );
}