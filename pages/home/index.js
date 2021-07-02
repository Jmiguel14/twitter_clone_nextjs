import { useEffect, useState } from 'react'
import styles from 'styles/Home.module.css'
import Devit from 'components/Devit'
import useUser from 'hooks/useUser'
import { listtenLatestDevits } from 'firebase/client'
import  Create from 'components/Icons/Create'
import Home  from 'components/Icons/Home'

import Link from 'next/link'
import Search from 'components/Icons/Search'

import Head from 'next/head'

export default function HomePage () {
    const [timeline, setTimeline] = useState([])
    
    const user = useUser()
    //useEffect(() => {
    //    document.title = 'hola'
    //})
    useEffect(() => { 
        let unsubscribe
        if (user) {
            unsubscribe = listtenLatestDevits(setTimeline)
        }
        return () => unsubscribe && unsubscribe()
    }, [user])

    console.log('timeline', timeline)

    return (
        <>
                <Head>
                    <title>Home / Devter</title>
                </Head>
                    <header className={styles.header}>
                        <h2 className={styles.h2}>Inicio</h2>
                    </header>
                    <div className={styles.div}>
                        {  
                           timeline.map(({avatar, createAt, id, image, content, userName, userId}) => (
                               <Devit 
                                avatar={avatar}
                                createAt={createAt}
                                id={id}
                                key={id}
                                content={content}
                                userName={userName}
                                userId={userId}
                                image={image}
                               />
                           ))
                        }
                    </div>
                    <nav className={styles.nav}>
                        <Link href="/home">
                            <a>
                                <Home width={32} height={32} stroke='#09f'/>
                            </a> 
                        </Link>
                        <Link href="/search">
                            <a>
                                <Search width={32} height={32} stroke='#09f'/>
                            </a> 
                        </Link>
                        <Link href="/compose/tweet">
                            <a>
                                <Create width={32} height={32} stroke='#09f'/>
                            </a> 
                        </Link>
                    </nav>
        </>
    )
}