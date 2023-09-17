import { IAdress } from "../adress/adress.interface"

export interface IUser {
    firstName: string,
    lastName: string,
    pseudo: string,
    email: string,
    password: string,
    birthDate: any,
    phoneNumber: string,
    avatar: string,
    gender: string,
    adress : IAdress

}

export interface result {
    true:string | undefined
    err: string | undefined
    userApi: string | undefined

}