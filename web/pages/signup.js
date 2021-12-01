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

import { setDoc, doc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import { getStorage, ref, updateMetadata, uploadBytes } from "firebase/storage";
import ClinicProfile from "../comps/ClinicProfile";

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
  margin-bottom: 40px;
  margin-top: -40px;
`;

const HeroLottieCont = styled.div`
  display: flex;
  /* margin-left: -100px; */
  /* justify-content: center; */
  /* align-items: center; */
  // flex-wrap: wrap;
`;

const BodyCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: -60px;
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
  margin-top: 10%;
`;
const HeroCont = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 200px;
  margin-right: 30px;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const EditImage = styled.label`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  right: 30px;
  background-color: #e6e6fa;
  border-radius: 50%;
  cursor: pointer;
`;

// const ClinicImage = (props) => {
//   const [clinicImage, setClinicImage] = React.useState("");

//   useEffect(async () => {
//     if (props.uid) {
//       const usersDocRef = doc(db, "clincis", props.uid);
//       const data = await getDoc(usersDocRef);
//       const result = data.data();
//       setClinicImage(result.image);
//     }
//   }, [props.uid]);

//this code will be used for profile image upload!!!

//   const Upload = async (e) => {
//     console.log(e.target.files[0]);
//     if (e.target.files.length <= 0) {
//       alert("no files were selected");
//       return false;
//     }
//     const file = e.target.files[0];
//   const storage = getStorage();
//   const storageRef = ref(storage, 'clinic/' + 'test.png');

//     // 'file' comes from the Blob or File API
//     const snapshot = await uploadBytes(storageRef, file);
//     console.log("Uploaded!");
//   };
//   return (
//     <HeroCont>
//       <HeroImage src={"/profile.png"} />
//       <EditImage>
//         <input type="file" onChange={Upload} style={{ display: "none" }} />
//       </EditImage>
//     </HeroCont>
//   );
// };

export default function Home() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Signed in", user);
        // might want to use a state that changes when signed in
      } else {
        console.log("Signed out");
      }
    });
  });

  const router = useRouter();

  const [clinicEmail, setEmail] = React.useState("");
  const [clinicPass, setPass] = React.useState("");

  const [clinicLang, setLanguage] = React.useState([]);
  const [clinicName, setClinicName] = React.useState("");
  const [clinicAdd, setClinicAdd] = React.useState("");
  const [clinicNum, setClinicNum] = React.useState("");
  const [clinicOpen, setClinicOpen] = React.useState("");
  const [clinicClose, setClinicClose] = React.useState("");
  const [clinicImage, setClinicImage] = React.useState("");

  const [clinicid, setClinicId] = React.useState(null);

  const [changePage, setChangePage] = useState(0);

  const LogIn = {
    email: clinicEmail,
    password: clinicPass,
  };

  const info = {
    name: clinicName,
    lang: clinicLang,
    add: clinicAdd,
    num: clinicNum,
    open: clinicOpen,
    close: clinicClose,
    clinicId: clinicid,
  };

  const setLogin = ({ email = clinicEmail, password = clinicPass }) => {
    setEmail(email);
    setPass(password);
  };

  const setInfo = ({
    name = clinicName,
    lang = clinicLang,
    add = clinicAdd,
    num = clinicNum,
    open = clinicOpen,
    close = clinicClose,
    clinicId = clinicid,
  }) => {
    setClinicName(name);
    setLanguage(lang);
    setClinicAdd(add);
    setClinicNum(num);
    setClinicOpen(open);
    setClinicClose(close);
    setClinicId(clinicId);
  };

  const body = () => {
    if (changePage === 0) {
      return (
        <div>
          <HeaderTitleCont>
            <HeaderTitle title="Create Your Account" />
          </HeaderTitleCont>

          <BodyCont>
            <HeroLottieCont>
              <HeroLottie changePage source={myLottie} width="650px" />
            </HeroLottieCont>

            <SignInCont>
              <SigninForm
                setChangePage={(number) => setChangePage(changePage + number)}
                LogIn={LogIn}
                setLogin={setLogin}
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
            <HeroLottieCont></HeroLottieCont>

            <SignInCont_Two>
              <SigninFormTwo
                setChangePage={(number) => setChangePage(changePage + number)}
                submit={async () => {
                  const auth = getAuth();
                  const result = await createUserWithEmailAndPassword(
                    auth,
                    clinicEmail,
                    clinicPass
                  );
                  info.clinicId = result.user.uid;
                  await setDoc(doc(db, "clinics", result.user.uid), info);
                  // console.log(info);
                  return info;
                }}
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
