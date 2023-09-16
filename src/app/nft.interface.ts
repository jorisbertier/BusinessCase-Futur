import { ICollection } from "src/interface/collection/collection.interface";
import { ICategory } from "src/interface/category/category.interface";

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
        category: ICategory,
        collection: ICollection,
}

export interface resultNft{
        true:string | undefined
        err: string | undefined
        userApi: string | undefined

}
