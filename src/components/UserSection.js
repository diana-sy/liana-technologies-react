import React from 'react';
import { useEffect, useState } from "react"
import styles from './UserSection.module.css';

export default function UserSection (){
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //   function handleScroll() {
    //     setOffset(window.pageYOffset);
    //   }
  
    //   window.addEventListener("scroll", handleScroll);
  
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, [offset]);

    return (
//         <div className={styles.userParallax}>
//  <div className={styles.company}>
//  <h className={styles.companyText}> Company</h>
//  <img
//           src="./images/Contact us.jpeg"
//           alt="test"
//  style={{
//             filter: `blur(2px)`,
//             transform: `translateY(${offset * 0.2}px)`,
//             width: `100%`,
//           }}
//           />
          
//      </div>
//      <div className={styles.products}>
//  <img
//           src="./images/company.jpeg"
//           alt="test"
//  style={{
//             filter: `blur(2px)`,
//             transform: `translateY(${offset * 0.2}px)`,
//             width: `100%`,
//           }}
//           />
//         </div>
//         <div className={styles.contactUs}>
//  <img
//           src="./images/Contact us.jpeg"
//           alt="test"
//  style={{
//             filter: `blur(2px)`,
//             transform: `translateY(${offset * 0.2}px)`,
//             width: `100%`,
//           }}
//           />
//          <div class='text-on-image'>
//              <h3> Welcome to my Blog </h3></div>
             
//              </div>
<div className={styles.userSection}>
             <div className={styles.companyContainer}>
    <img className={styles.company} src="./images/company.jpeg" alt="Company" style={{
            filter: `blur(1.5px)`}}
    />
    <div className={styles.companyText}><h2>Company</h2></div>
</div>
{/* box2 */}
<div className={styles.companyContainer}>
    <img className={styles.company} src="./images/contactUs.jpeg" alt="Company" style={{
            filter: `blur(1.5px)`}}
    />
    <div className={styles.companyText}><h2>Products</h2></div>
</div>

{/* box3 */}
<div className={styles.companyContainer}>
    <img className={styles.company} src="./images/company.jpeg" alt="Company" style={{
            filter: `blur(2px)`}}
    />
    <div className={styles.companyText}><h2>Contact Us</h2></div>
</div>
        </div>
    )
}