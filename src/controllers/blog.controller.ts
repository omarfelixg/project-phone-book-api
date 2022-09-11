import { Request, Response } from "express";
import { ApiResponse } from "../response/blog.responses";
import { createBlogService, deleteBlogService, getBlogService, getBlogsService, updateBlogService } from "../providers/blog.service";
import { Blog } from "../entity/Blog";
import {
  IGetErrorMessage,
  IResponseController,
  IResponseBlog,
  IResponseBlogNull,
  GetBlogsInterface,
  ObjectBlogInterface,
  DeleteBlogInterface,
} from "src/interfaces/blog.interfaces";
import type * as E from "express";

// const Service = new BlogService();

// export class BlogController {
//   constructor() {
//   }

//   async getBlogs (req: Request, res: Response): Promise<E.Response<GetBlogsInterface>>{
//     try{
//       const getBlogsC:Blog[] = await Service.getBlogs();
//       let response:IResponseController | null;

//       if(getBlogsC.length === 0) {
//         response = ApiResponse("No se encontraron blog", getBlogsC, "")
//         return res.status(403).json(response)
//       }
//       response = ApiResponse("Se obtuvo los blog", getBlogsC, "");
//       return res.json(response);
//     }catch(error){
//       return res.status(500).json({ message: error.message });
//     }
//   };

//   async createBlog (req: Request, res: Response):Promise<E.Response<ObjectBlogInterface>> {
//     try {
//       const createdBlogC:Blog[] = await Service.createBlog(req.body);
//       const response:IResponseController = ApiResponse("Se creo blog", createdBlogC, "")
//       return res.json(response);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };

//   async deleteBlog (req: Request, res: Response):Promise<E.Response<DeleteBlogInterface>> {
//     try {
//       const idDeletedBlogC:true | false = await Service.deleteBlog(req.params.id);
//       let response:IResponseBlog;

//       if(!idDeletedBlogC) {
//         response = ApiResponse('No se encontró blog', {} , "")
//         return res.status(404).json(response)
//       }
//       response = ApiResponse(`Se elimino blog con id: ${req.params.id}`, {} , "");
//       return res.json(response);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };

//   async getBlog (req: Request, res: Response):Promise<E.Response<ObjectBlogInterface>> {
//     try {
//       const getBlogC: Blog | IGetErrorMessage = await Service.getBlog(req.params.id)
//       const response: IResponseBlog = ApiResponse("Se encontro un blog", getBlogC, "")
//       return res.json(response)
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };

//   async updateBlog (req: Request, res: Response):Promise<E.Response<ObjectBlogInterface>> {
//     try {
//       const updateBlogC: Blog | null = await Service.updateBlog(req.params.id, req.body);
//       let response: IResponseBlog | IResponseBlogNull;

//       if(!updateBlogC) {
//         response = ApiResponse('No se encontró blog', {} , "")
//         return res.status(404).json(response)
//       }
//       response = ApiResponse("Se actualizo el blog ", updateBlogC, "")
//       return res.json(response)
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };
// }

export const getBlogs = (req: Request, res: Response) => {
  const getBlogsC = getBlogsService();
  let response: IResponseController | null;
  response = ApiResponse("Se obtuvo los blog", getBlogsC, "");
  res.json(response);
};

export const createBlog = (req: Request, res: Response) => {
  const createdBlogC = createBlogService(req.body);
  const response: IResponseController = ApiResponse(
    "Se creo blog",
    createdBlogC,
    ""
  );
  res.json(response);
};

export const deleteBlog = (req: Request, res: Response) => {
  const idDeletedBlogC = deleteBlogService(req.params.id);
  let response: IResponseBlog;
  response = ApiResponse(`Se elimino blog con id: ${req.params.id}`, {}, "");
  return res.json(response);
};

export const getBlog = (req: Request, res: Response) => {
  const getBlogC = getBlogService(req.params.id);
  const response: IResponseBlog = ApiResponse("Se encontro un blog", getBlogC, "");
  res.json(response);
};

export const updateBlog = (req: Request, res: Response) => {
  const updateBlogC = updateBlogService(req.params.id, req.body);
  let response: IResponseBlog | IResponseBlogNull;
  response = ApiResponse("Se actualizo el blog ", updateBlogC, "");
  return res.json(response);
};

