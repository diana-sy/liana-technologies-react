import React from 'react';
import styles from './Header.module.css';
import Parallax from './Parallax.js';
import UserSection from './UserSection';
import Count from '../AnimatedNumbers/Count';
import data from '../data/data.json';

export default function Header (){
    return (
    <div>
    <div className={styles.hedaer}>
        <div className={styles.headerGreen}>
        <div className={styles.nav}>News
        <span >Intranet</span>
      <div className={styles.languegeBar}>
				<button className={styles.btnDropdownMenu} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					In English				</button>
				{/* <ul className={styles.dropdownMenu} aria-labelledby="dropdownMenuLanguage">
<li className={styles.dropdownItemDE} lang="DE"><a href="https://www.lianatech.de/startseite.html">Auf Deutsch</a></li>
<li className={styles.dropdownItemFR} lang="FR"><a href="https://www.lianatech.fr/page-daccueil.html" >En français</a></li>
<li className={styles.dropdownItemSV} lang="SV"><a href="https://www.lianatech.se/forstasidan.html" >På Svenska</a></li>
<li className={styles.dropdownItemFI} lang="FI"><a href="https://www.lianatech.fi/etusivu.html" >Suomeksi</a></li>
</ul> */}
            </div>
			</div>
            </div>
     <div className={styles.top}>       
        <img className={styles.logo} src="https://www.lianatech.fi/media/layout/img/logos/lianatech_logo.svg" alt="Liana Technologies"></img>
        <div className={styles.topMenu}>Company 
       <span>Products</span>
       <span>Contact Us</span>
       </div> 
       <div className={styles.search}>
       <input className={styles.searchBox} type="text" placeholder="  Search"/>
       <button className={styles.searchButton} type="search">Search</button>
        </div>        
    </div>
    </div>

        <Parallax/> 
        <div className={styles.parallax}>
        <div className={styles.parallaxText}>Software fueling digital marketing</div>
        <button className={styles.btnLearnMore}>Learn more</button>
      </div>

      <UserSection />
      <div className={styles.count}>
      {data.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>

    </div>
    
   
    
        )
    }
