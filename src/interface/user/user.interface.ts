import { IAdress } from "../adress/adress.interface"

export interface IUser {
    id:number,
    firstName: string,
    lastName: string,
    pseudo: string,
    email: string,
    password: string,
    birth: any,
    phoneNumber: string,
    avatar: string,
    gender: string,
    adresses : IAdress
}

export interface Icredentials {
    username: string,
    password : string,
}

export interface result {
    true:string | undefined
    err: string | undefined
    userApi: string | undefined
}