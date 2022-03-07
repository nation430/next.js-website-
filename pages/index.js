import LandingPage from '../components/LandingPage'
import NotableDrop from '../components/NotableDrop'
import TopCollection from '../components/TopCollection'
import CreateSell from  '../components/CreateSell'
import Browse from  '../components/Browse'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'


export default function Home() {
  return (
    <div className='sm:px-10 md:px-20 py-8 mt-20'>
    <LandingPage/>
    <NotableDrop/>
    <TopCollection/>
    <CreateSell/>
    <Browse/>

  </div>
  
  )
}
