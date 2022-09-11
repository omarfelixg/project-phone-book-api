import { IApiResponse } from '../interfaces/contact.interfaces'

export const ApiResponse = (
    message: string,
    content: any,
    extra: string
): IApiResponse => {
    return {
        message: message,
        content: content,
        extra: extra
    }
};
