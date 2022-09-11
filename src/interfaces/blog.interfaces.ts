import { Blog } from "src/entity/Blog"

export interface IPostBlog {
    name: string,
     price: number,
     warehouse: string,
     author: string
}

export interface IResponseBlog {
    message: string,
    content: Blog[],
    extra: string
}

export interface IResponseBlogNull {
    message: string,
    content: null,
    extra: string
}

export interface IGetErrorMessage {
    msg:string
}

export interface IResponseController{
    message:string,
    content:Blog[]
}

export interface IServiceDelete{
    raw:[],
    affected: number
}

export interface GetBlogsInterface {
    message: string,
    content: Blog[],
    extra: string
}
  
export interface ObjectBlogInterface {
    message: string,
    content: Blog,
    extra: string
}
  
export interface DeleteBlogInterface{
    message: string,
    content: null,
    extra: string
}
  