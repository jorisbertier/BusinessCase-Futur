import { ICollection } from "src/interface/collection/collection.interface";
import { ICategory } from "src/interface/category/category.interface";
import { IUser } from "src/interface/user/user.interface";

export interface INft {

        id: number,
        dateCreation: Date,
        dateDrop?: Date,
        price: number,
        title: string,
        description?: string,
        filePath: string,
        alt: string,
        user: IUser,
        categories: ICategory[],
        collection: ICollection
}

// expordt interface user {
//         pseudo: string
// }

export interface resultNft{
        true:string | undefined
        err: string | undefined
        userApi: string | undefined

}
