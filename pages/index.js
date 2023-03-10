import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useEffect, useState } from 'react'
import { useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter ();


const [formData, setFormData] = useState ({
  firstName: '', 
  username: ''
})

const CheckLogin = () =>  {
  console.log (formData.firstName)
  console.log(formData);

  if(formData.username !== null) {
        router.push ({
          pathname: './counter',
          query: {
            username: formData.username
          }
        })
    }
  }


  return (
    <>
      <Head>
        <title>Hello there!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div class = "main-container">

          <img id = "hello" src = "https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg"></img>

        
        <label> What is your First name? </label>
        <input
        type="text"
        id="first"
        name = "first"
        pattern="[A-Z] {1} [a-z] {2,10}"
        title = "The first letter should be uppercase"
        onChange = {(e => setFormData ({...formData, firstName: e.target.value}))}
      />
      <label> What is your Username ?</label>
      <input
      type = "text"
      id = "username"
      name = "username"
      requiredminLenghth = "5"
      maxLenghth = "10"
      onChange = {(e => setFormData ({...formData, username: e.target.value}))}
      />
  <button1 type="submit" onClick= {() => CheckLogin()}> Submit </button1>
</div>

      </main>
    </>
  )
}
