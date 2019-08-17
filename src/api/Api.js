import API from '../axios/axios'

export async function GetApi ( params ) {
    return await API.get( `/${params}`)
        .then( res => {
            return res.data.data
        })
}