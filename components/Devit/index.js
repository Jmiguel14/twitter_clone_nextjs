import styles from './devit.module.css'
import { Avatar } from 'components/Avatar'
import { useTimeAgo } from 'hooks/useTimeAgo'
import Link from 'next/link'
import { useRouter } from 'next/router'
 
function Devit ({avatar, userName, image, content, createAt, id}) {
    const timeago = useTimeAgo(createAt)
    const router = useRouter()

    const handleArticleClick = (e) => {
        e.preventDefault()
        router.push(`/status/${id}`)
    }      

    return (
        <>
            <article key={id} className={styles.article} onClick={handleArticleClick}>
                <div className={styles.div}>
                    <Avatar alt={userName} src={avatar}/>
                </div>
                <section>
                    <div>
                        <header>
                            <strong>{userName}</strong>
                            <span> · </span>
                            <Link href={`/status/${id}`}>
                                <a className={styles.date}>
                                <time>{timeago}</time>
                                </a>
                            </Link>
                        </header>
                        <p className={styles.p}>{content}</p>
                        {
                            image && <img src={image} className={styles.image}/>
                        }
                    </div>
                </section>
            </article>
        </>
    )
}

export default Devit