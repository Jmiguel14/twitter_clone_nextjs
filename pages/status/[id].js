import { AppLayout } from "components/AppLayout"
import Devit from "components/Devit"

export default function DevitPage (props) {
    console.log(props)
    return (
        <>
            <AppLayout>
                <Devit {...props}/>
            </AppLayout>
        </>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { id } = params

    const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
        
    if (apiResponse.ok) {
        const props = await apiResponse.json()
        return { props }
    } 
    if (res) {
        res.writeHead(404).end()
    }
        
}

//DevitPage.getInitialProps = async (context) => {
//    const { query, res } = await context
//    const { id } = await query
//
//    //onsole.log('getInitialProps', id) 
//    //onst apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
//    //onst apiResponseJson = await apiResponse.json()
//    //eturn apiResponseJson
//    return fetch(`http://localhost:3000/api/devits/${id}`).then(
//        (apiResponse) => {
//          if (apiResponse.ok) return apiResponse.json()
//          if (res) {
//                res.writeHead(404).end()
//          }
//      }
//    )
//}