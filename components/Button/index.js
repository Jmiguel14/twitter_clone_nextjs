import styles from 'styles/Home.module.css'

export default function Button ({children, disabled, onClick}) {
    return (
    <>
        <button disabled={disabled} onClick={onClick} className={styles.button}>
            {children}
        </button>
    </>
    )
}