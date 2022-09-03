import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
        <h1>WELCOME TO E-COMMERSE APP :)</h1>
        <div style={{width:"99%",height:"500px"}}> 
        <img width='100%' height='100%' src="https://image.shutterstock.com/image-photo/natural-cosmetic-cream-serum-skincare-260nw-1029009367.jpg" alt="" />
        </div>
    </div>
  )
}
