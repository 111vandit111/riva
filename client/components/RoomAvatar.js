 import React from 'react';
 import Image from 'next/image';
 import { useRouter } from 'next/router';
 import styles from '../styles/roomAvatar.module.css';


 const RoomAvatar = ({ id , avatar , name}) => {
   const router = useRouter();
   const changeURL = ()=>{
     router.push(`?channel=${id}&name=${name}`)
   }

   return (
     <div className={styles.wrapper} onClick={changeURL}>
       <div className={styles.roomAvatar}>
         <Image 
           src = {avatar}
           className={styles.roomAvatarImage}
           height={48}
           width={48}
           alt={name}
         />
       </div>
     </div>
   )
 }
 
 export default RoomAvatar