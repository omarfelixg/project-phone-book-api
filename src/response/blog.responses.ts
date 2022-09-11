import { IResponseBlog } from '../interfaces/blog.interfaces'

export const ApiResponse = (
    message: string,
    content: any,
    extra: string
): IResponseBlog => {
    return {
        message: message,
        content: content,
        extra: extra
    }
};
