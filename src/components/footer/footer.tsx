import styles from './footer.module.scss';

export const Footer = () => {

    return (
            <div className={`border ${styles.footer}`}>
                <a href="mailto:mail@test.com" className={styles.mail}>
                    mail@test.com
                </a>
            </div>
    )
}