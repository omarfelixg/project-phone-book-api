import { ContactEntity } from "src/entity/contact.entity"

export interface IApiResponse {
    message: string,
    content: ContactEntity[] | true | false | null,
    extra: string
}