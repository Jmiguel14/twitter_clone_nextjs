import { firestore } from 'firebase/admin'

export default (req, resp) => {
    const {query} = req
    const {id} = query

    firestore.collection('devits')
        .doc(id)
        .get()
        .then((doc) => {
            const data = doc.data()
			const id = doc.id
			const { createAt } = data
			const DateFormatJs = +createAt.toDate()
            
            resp.json({
                ...data,
                id,
                createAt: DateFormatJs,
            })
        })
        .catch(() => {
            resp.status(404).end()
        })
}