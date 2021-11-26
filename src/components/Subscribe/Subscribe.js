import React from 'react';
import styles from './Subscribe.module.css';

export default function Subscribe(){
    return(
        <div className={styles.containerSubscribe}>
   <div className={styles.textContainer}>
   <div class={styles.titleSubscribe}>
     Subscribe to our newsletter
   </div>
   <div className={styles.textSubscribe}>
     Follow our story and get the latest promotonial<br />
     news about our products and events.
   </div>
   </div>

<div className={styles.contentInput}>
  <input className={styles.input} type="text"  placeholder="Your email adress..."/>
  <button className={styles.btnSuscribe}>
    <span>Subscribe</span></button>
</div>
</div>
    )
}