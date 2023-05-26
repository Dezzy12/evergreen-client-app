import { Token } from "@angular/compiler"
import {User} from "../models/user.model"

const LOCAL_STORAGE_KEY = {
    token: 'token' 
}

export module LocalStorageUtils{
    export const writeToken = (token: string) => {
        localStorage.setItem(LOCAL_STORAGE_KEY.token, token)
    }

    export const readToken = (token: string) => {
        localStorage.getItem(LOCAL_STORAGE_KEY.token)
    }
    
    export const deleteToken = (token: string) => {
        localStorage.removeItem(LOCAL_STORAGE_KEY.token)
    }
}