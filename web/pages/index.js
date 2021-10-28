import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeroAvatar from '../comps/HeroAvatar'

export default function Home() {
  return (
    <div className={styles.container}>
     <HeroAvatar imagesrc="https://placekitten.com/1000/1000" pluswidth="20px" herowidth="100px"/>
    </div>
  )
}
