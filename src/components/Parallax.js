import * as React from "react"
import { useEffect, useState } from "react"
import styles from "./Parallax.module.css"

export default function Parallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className={styles.parallax}>
      <section className={styles.hero}>
        <img
          src="https://www.lianatech.com/media/hero-images/cache/marketing-technology-stack-1920x500,c,q=85.jpg"
          alt="test"
          style={{
            filter: `blur(2px)`,
            transform: `translateY(${offset * 0.5}px)`,
            width: `100%`,
          }}
        />
      </section>
    </div>
  )
}