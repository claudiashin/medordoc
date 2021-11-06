import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import HeaderTitle from '../comps/HeaderTitle';
import HeroLottie from '../comps/HeroLottie';
import myLottie from '../public/lottie_receptionist.json'

import NavBar from '../comps/NavBar';
// import Footer from '../comps/Footer';




const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BodyCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`
const HeaderwithNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 150px;
  width: 100%;
  background-color: #B9D1E1;
  margin-bottom: 100px;
`
const ColCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 600px;
  background-color: #E9D7CB;

`
const RowCont = styled.div`
  display: flex;
  flex-direction: column;
`
const SubCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IconWithText = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;

`
const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`
const SmText = styled.p`
  width: 
`

const BodyText = styled.p`
  width: 400px;
  font-size: 20px;
`


const BenefitColCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 600px;
  background-color: #E9D7CB;
`

const HeaderRowCont = styled.div`
  display: flex;
  flex-direction: column;
`

const FourRowCont = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export default function Home() {

  //   return <Cont>
  //     <HeaderwithNav></HeaderwithNav>
  //     <BodyCont>
  //       <ColCont style={{ backgroundColor: '#fff' }}>
  //         <RowCont>
  //           <HeaderTitle
  //             title="Increase your clinic's patient base"
  //             fontSize="36"
  //             fontWeight="600"
  //           />
  //           <BodyText>
  //             Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
  //           </BodyText>
  //         </RowCont>
  //         <RowCont>
  //           <HeroLottie
  //             source={myLottie}
  //             width="300px"

//           />
//         </RowCont>
//       </ColCont>

//       <ColCont>
//         <RowCont>
//           <HeroLottie
//             source={myLottie}
//             width="300px"

//           />
//         </RowCont>
//         <RowCont>
//           <HeaderTitle
//             title="What is MedOrDoc?"
//             fontSize="36"
//             fontWeight="600"
//           />
//           <BodyText style={{ textAlign: 'left' }}>
//             Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
//           </BodyText>
//         </RowCont>
//       </ColCont>


//       <BenefitColCont style={{ backgroundColor: '#fff' }}>
//         <HeaderRowCont>
//           <HeaderTitle
//             title="Benefits of MedOrDoc"
//             fontSize="36"
//             fontWeight="600"
//           /></HeaderRowCont>

//         <FourRowCont>
//           <SubCont>
//             <IconWithText>
//               <Icon src={'/profile.png'}></Icon>
//               <SmText>Update Availability in Real Time</SmText>
//             </IconWithText>
//           </SubCont>
//           <SubCont>
//             <IconWithText>
//               <Icon src={'/profile.png'}></Icon>
//               <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
//             </IconWithText>
//           </SubCont>
//           <SubCont>
//             <IconWithText>
//               <Icon src={'/profile.png'}></Icon>
//               <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
//             </IconWithText>
//           </SubCont>
//           <SubCont>
//             <IconWithText>
//               <Icon src={'/profile.png'}></Icon>
//               <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
//             </IconWithText>
//           </SubCont>
//         </FourRowCont>

//       </BenefitColCont>

//     </BodyCont>

//   </Cont>
// }
  
  return <Cont>
      <HeaderwithNav>
        <NavBar />
      </HeaderwithNav>
      <BodyCont>
        <ColCont style={{backgroundColor: '#fff'}}>
          <RowCont>
            <HeaderTitle 
              title="Increase your clinic's patient base"
              fontSize="36"
              fontWeight="600"
            />
            <BodyText>
              Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
            </BodyText>
          </RowCont>
          <RowCont>
            <HeroLottie 
            source={myLottie}
            width="300px"
            
            />
          </RowCont>
        </ColCont>

        <ColCont>
          <RowCont>
            <HeroLottie 
            source={myLottie}
            width="300px"
            
            />
          </RowCont>
          <RowCont>
            <HeaderTitle 
              title="What is MedOrDoc?"
              fontSize="36"
              fontWeight="600"
            />
            <BodyText style={{textAlign:'left'}}>
              Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
            </BodyText>
          </RowCont>
        </ColCont>

        <ColCont style={{backgroundColor: '#fff'}}>
          <RowCont>
            <HeaderTitle 
              title="Benefits of MedOrDoc"
              fontSize="36"
              fontWeight="600"
            />
          </RowCont>
          <RowCont style={{ backgroundColor: '#dad'}}>
            <SubCont>
              <IconWithText>
                <Icon src={'/profile.png'}></Icon>
                <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
              </IconWithText>
            </SubCont>
            <SubCont>
              <IconWithText>
                <Icon src={'/profile.png'}></Icon>
                <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
              </IconWithText>
            </SubCont>
            <SubCont>
              <IconWithText>
                <Icon src={'/profile.png'}></Icon>
                <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
              </IconWithText>
            </SubCont>
            <SubCont>
              <IconWithText>
                <Icon src={'/profile.png'}></Icon>
                <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
              </IconWithText>
            </SubCont>
          </RowCont>

        </ColCont>

      </BodyCont>
  
    </Cont>
}
