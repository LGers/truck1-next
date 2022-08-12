import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Best Trucks</h3>
      <div className={styles.footer__content}>
        <section className={styles.footer__companyInfo}>
          <div className={styles.footer__companyContact}>
            <img src="../../assets/svg/location.svg" alt="Location" />
            <div>
              <p>Company Address: Lorem ipsum dolor sit amet</p>
              <p>18600, Netherlands</p>
            </div>
          </div>
          <div className={styles.footer__companyContact}>
            <img src="../../assets/svg/phone.svg" alt="Phone" />
            <p>+38 958 755-00-00</p>
          </div>
          <div className={styles.footer__socialLinks}>
            <a className={styles.socialIcon} href="https://www.facebook.com/">
              <img src="../../assets/svg/facebook.svg" alt="Facebook" />
            </a>
            <a className={styles.socialIcon} href="https://www.instagram.com/">
              <img src="../../assets/svg/instagram.svg" alt="Instagram" />
            </a>
            <a className={styles.socialIcon} href="https://www.twitter.com/">
              <img src="../../assets/svg/twitter.svg" alt="Twitter" />
            </a>
            <a className={styles.socialIcon} href="https://www.youtube.com/">
              <img src="../../assets/svg/youtube.svg" alt="youtube" />
            </a>
          </div>
        </section>
        <section className={styles.footer__companyDescription}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque
            accusantium ratione molestias soluta, provident nobis, assumenda dolorum voluptas
            incidunt inventore quia reiciendis quis. Quis quo molestias repellat.
          </p>
        </section>
      </div>
    </footer>
  )
};
