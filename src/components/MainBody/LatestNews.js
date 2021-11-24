import React from 'react';
import styles from './LatestNews.module.css';
import data from '../data/news.json';

 

class LatestNews extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        news:data.news,
      }
    }
    render()
    {
  return(
      <div >
          <div className={styles.newsTitle}> Latest News</div>
          <div className={styles.dataNews}>
          {
          this.state.news.map((value) =>
          <div >
          <div className={styles.newsBox}>
         <div className={styles.newsDate}>{value.date}
         </div>
         <div className={styles.newsText}>{value.description}
         </div>
         </div>
         </div>
          )}
          </div>
          </div>
          )
  }}
          export default LatestNews;