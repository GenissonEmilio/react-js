import styles from './Frase.module.css';

function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este paragrafo é um componante</p>
        </div>
    )
}

export default Frase;