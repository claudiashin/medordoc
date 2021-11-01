import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

import DoctorCard from '../comps/DoctorCard';
import LoginForm from '../comps/LoginForm';
import SigninForm from '../comps/SigninForm';
import PatientList from '../comps/PatientList';
import LiveWaitTime from '../comps/LiveWaitTime';


const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function Home() {
  return (
    <Cont>
      <DoctorCard />
      <LoginForm />
      <SigninForm />
      <PatientList />
      <LiveWaitTime />
    </Cont>
  )
}
