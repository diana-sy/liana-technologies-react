import React from 'react';
import styles from './References.module.css';
import data from '../data/references.json';

 

class References extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        references:data.references,
      }
    }
    render()
    {
  return(
      <div className={styles.reference}>
          <div className={styles.refData}>
          {
          this.state.references.map((value) =>
          <div>
          <div className={styles.refBox}>
         <img className={styles.refImg} src = {`../images/${value.image}`} alt="">
         </img>
         <div className={styles.refBoxText}>
             <div className={styles.refName}>{value.name}
             </div>
         <div className={styles.refDescription}>{value.description}
         </div>    
         </div>
         </div>
         </div>
          )}
          </div>
          </div>
          )
  }}
          export default References;