import React from 'react';
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import DmCard from './DmCard'
import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

import styles from '../styles/ConversationList.module.css'
import friends from '../assets/icons/friends.svg';
import nitro from '../assets/icons/nitro.svg';

const dummydms = [
    {
      id :1,
      name: 'general1',
      avatar : avatar1
    },
    {
      id :2,
      name: 'general2',
      avatar : avatar2
    },
    {
      id :3,
      name: 'general3',
      avatar : avatar3
    },
    {
      id :4,
      name: 'general4',
      avatar : avatar4
    },
]  

const ConversationList = () =>{

    const [dms,setDms] = useState(dummydms)

    return (
        <div className={styles.conversations}>
            <div className={styles.conversationsListTop}>
              <input type='search' placeholder='find or start a conversation' />
            </div> 
            <div className={styles.conversationContainer}>
            <div className={styles.elementsContainer}>
            <div className={styles.svgContainer}>
            <Image 
                height={25}
                width={35}
                src={friends}
                className={styles.svg}
                alt='friends'
            />
            </div> 
            <p>Friends</p>
            </div>
            <div className={styles.elementsContainer}>
            <div className={styles.svgContainer}>
            <Image 
                height={25}
                width={35}
                src={nitro}
                className={styles.svg}
                alt='niro'
            />
            </div> 
            <p>Nitro</p>
            </div>  
            <div className={styles.dmTitle}>DIRECT MESSAGES</div>
            {dms.map((dm,index)=>(
                <DmCard 
                    key={index}
                    name={dm.name}
                    id={dm.id}
                    avatar={
                        dm.avatar || avatar3
                    }
                    status='online'
                />
            ))}
            </div>
            
        </div>
    )
}

export default ConversationList;