import React from 'react';
import styles from './Bottom.module.css';

export default function Bottom (){

    return(
        <div>
            <div className={styles.bottomContainer}>
  <div className={styles.bottomNav}>
  <div className={styles.lianaTitle}>Liana Technologies</div>
  <div className={styles.bottomMenu}>Company 
    <span>Products</span>
    <span>Contact Us</span>
    <span>News</span>
    <span>Intranet</span>
</div>
</div>
<div className={styles.contactContainer}>
  <div className={styles.containerInfo}>
    Sales and inquiries<br />
    Email: sales@lianatech.com <br />
    Phone: +358 10 387 7053 
</div>
<button className={styles.btnContactUs}>Contact us</button>
</div>
  <div className={styles.socialmedia}>
  
  <div className={styles.fab}>F</div>
  <div className={styles.fab}> In</div>
  <div className={styles.fab}>Tw</div>
  </div>
</div>
</div>
    )
}
