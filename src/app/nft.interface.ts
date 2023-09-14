export interface INft {

        id: number,
        dateCreation: Date,
        dateDrop?: Date,
        price: number,
        title: string,
        description?: string,
        filePath: string,
        alt: string,
        user: string,
        categories: [],
        collection: [],
}

export interface resultNft{
        true:string | undefined
        err: string | undefined
        userApi: string | undefined

}
