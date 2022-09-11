import { Blog } from "../entity/Blog";
import { IGetErrorMessage } from "../interfaces/blog.interfaces";
import { AppDataSource } from "../db";
import { BlogDto } from "../dto/Blog.dto";

// export class BlogService {
//     constructor() {
//     }

//     async getBlogs():Promise<Blog[]> {
//         try {
//             const BlogRepository = AppDataSource.getRepository(Blog)
//             return await BlogRepository.find();
//         } catch (error) {
//             throw error
//         }
//     };

//     async createBlog (data: BlogDto[]):Promise<Blog[]> {
//         try {
//             const BlogRepository = AppDataSource.getRepository(Blog)
//             return await BlogRepository.save(data)
//         } catch (error) {
//             throw error
//         }
//     };

//     async deleteBlog (id: string):Promise<true | false>  {
//         try {
//             const BlogRepository = AppDataSource.getRepository(Blog)
//             const eliminedBlogS = await BlogRepository.delete({ id: parseInt(id)})

//             if(eliminedBlogS.affected === 0){
//                 return false
//             }
//             return true
//         } catch (error) {
//             throw error
//         }
//      };

//     async getBlog (id: string ):Promise<Blog | IGetErrorMessage> {
//         try {
//             const BlogRepository = AppDataSource.getRepository(Blog)
//             const getBlogS:Blog | null = await BlogRepository.findOneBy({id: parseInt(id)})

//             if(getBlogS){
//                 return getBlogS
//             }
//             return {msg:"Blog no encontrado"}
//         } catch (error) {
//             throw error;
//         }
//     };

//     async updateBlog (id:string, data:BlogDto):Promise<Blog | null>{
//         try {
//             const BlogRepository = AppDataSource.getRepository(Blog)
//             const updateBlogS:Blog | null = await BlogRepository.findOneBy({id: parseInt(id)});

//             if (updateBlogS) {
//                 BlogRepository.merge(updateBlogS, data);
//                 const results = await BlogRepository.save(updateBlogS);
//                 return results
//             }
//             return null
//         }
//          catch (error) {
//             throw error;
//         }
//     };
// }

export const getBlogsService = () => {
  const BlogRepository = AppDataSource.getRepository(Blog);
  return BlogRepository.find();
};

export const createBlogService = (data: BlogDto[]): Promise<Blog[]> => {
  const BlogRepository = AppDataSource.getRepository(Blog);
  return BlogRepository.save(data);
};

export const deleteBlogService = (id: string) => {
  const BlogRepository = AppDataSource.getRepository(Blog);
  BlogRepository.delete({ id: parseInt(id) });
  return true;
};

export const getBlogService = (id: string) => {
  const BlogRepository = AppDataSource.getRepository(Blog);
  const getBlogS = BlogRepository.findOneBy({ id: parseInt(id) });
  return getBlogS;
};

export const updateBlogService = (id:string, data:BlogDto): Promise<Blog> => {
    const BlogRepository = AppDataSource.getRepository(Blog)
    const updateBlog =  BlogRepository.findOneBy({id: parseInt(id)});
    BlogRepository.merge(updateBlog, data);
    const results =  BlogRepository.save(updateBlog);
    return updateBlog
};