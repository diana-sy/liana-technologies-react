
import React, { useEffect, useState } from 'react';
import styles from './Count.module.css';




const Count = props => {
    // label of counter
    // number to increment to
    // duration of count in seconds
    const {label, number, duration, image } = props.data
  
    // number displayed by component
    const [count, setCount] = useState("0")
  
    useEffect(() => {
      let start = 0;
      // first three numbers from props
      const end = parseInt(number.substring(0,3))
      // if zero, return
      if (start === end) return;
  
      // find duration per increment
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;
  
      // timer increments start counter 
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3))
        if (start === end) clearInterval(timer)       
      }, incrementTime);
  
      // dependency array
    }, [number, duration, image]);

  
    return (
          <div className={ styles.conteiner }>
          <div><img src={`/images/${image}`} alt=""/></div>
          <div className={styles.textBox}>
              <div className={ styles.count }>{ count }</div>
              <div className={ styles.label}>{ label }</div>
          </div>
          </div>
        
          /* <div className={ styles.productContainer }>
          <div><img src={`../images/${props.image}`} alt=""/></div>
        <h3>
          <i>{image}{label}: {count}</i>
        </h3>
      </div> */
    );
  }
  
  export default Count;