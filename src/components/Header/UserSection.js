import React from 'react';
import styles from './UserSection.module.css';

export default function UserSection (){

    return (
<div className={styles.userSection}>
             <div className={styles.companyContainer}>
    <img className={styles.company} src="./images/company.jpeg" alt="Company" style={{
            filter: `blur(1.5px)`}}
    />
    <div className={styles.companyText}>Company</div>
</div>
{/* box2 */}
<div className={styles.companyContainer}>
    <img className={styles.company} src="./images/contactUs.jpeg" alt="Company" style={{
            filter: `blur(1.5px)`}}
    />
    <div className={styles.companyText}>Product</div>
</div>

{/* box3 */}
<div className={styles.companyContainer}>
    <img className={styles.company} src="./images/company.jpeg" alt="Company" style={{
            filter: `blur(2px)`}} onClick=""
    />
    <div className={styles.companyText}>Contact Us</div>
</div>
        </div>
    )
}