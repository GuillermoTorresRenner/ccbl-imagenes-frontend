import { api } from "./api"

export const getHeaders = async(name:string) => {
    const res= await api.get(`/headers/${name}`)
    return res.data
    }