import axios from 'axios'

const uri = 'http://127.0.0.1:3003/users';

export const getUri = async(id) =>{
    return(
        id = id || '',
        await axios.get(`${uri}/${id}`)
    )
}

export const addUsers = async(users) =>{
    return(
        await axios.post(uri, users)
    )
}

export const editUsers = async (id, users) => {
    return (
        await axios.put(`${uri}/${id}`, users)
    )
}


export const deleteusers = async(id) => {
    return (
        await axios.delete(`${uri}/${id}`)
    )
}
