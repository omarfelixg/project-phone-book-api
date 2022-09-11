import { Router } from "express";
// import { BlogController } from '../controllers/blog.controller'
import { getBlog, getBlogs, createBlog, deleteBlog, updateBlog } from '../controllers/blog.controller'

// const Controller = new BlogController()
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Pokemon:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: El nombre del pokemon
 *              price:
 *                  type: number
 *                  description: El precio del pokemon
 *              warehouse:
 *                  type: string
 *                  description: El nombre del almacen
 *              author:
 *                  type: string
 *                  description: El autor del pokemon    
 *          required:
 *              - name
 *              - price
 *              - warehouse
 *              - author
 *          example:
 *              name: Pikachu
 *              price: 150
 *              warehouse: Pueblo Paleta
 *              author: Ash Ketchup
 */

router.get("/blogs",getBlogs);

/**
 * @swagger
 * /api/pokemons:
 *  get:
 *      summary: return all pokemons
 *      tags: [Pokemon]
 *      responses:
 *          200:
 *              description: all pokemons
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          description: El nombre del pokemon
 *                                      price:
 *                                          type: number
 *                                          description: El precio del pokemon
 *                                      warehouse:
 *                                          type: string
 *                                          description: El nombre del almacen
 *                                      author:
 *                                          type: string
 *                                          description: El autor del pokemon
 *                                      message:
 *                                          type: string
 *                                          description: Mensaje de respuesta
 *                                      content:
 *                                          type: object
 *                                          description: pokemones
 *                                      extra:
 *                                          type: string
 *                                          description: null
 *                                  required:
 *                                      - name
 *                                      - price
 *                                      - warehouse
 *                                      - author
 *                                  example:
 *                                      messsage: Se obtuvo los pokemones
 *                                      content: 
 *                                          name: Pokemon1
 *                                          price: 1
 *                                          warehouse: Almacen1
 *                                          author: Autor1
 *                                      extra: null
 */

router.post("/blogs", createBlog);

/**
 * @swagger
 * /api/pokemons:
 *  post:
 *      summary: create a new pokemon
 *      tags: [Pokemon]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Pokemon'
 *      responses:
 *          200:
 *              description: new pokemon created!
 */

router.delete("/blogs/:id", deleteBlog);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  delete:
 *      summary: delete a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id       
 *      responses:
 *          200:
 *              description: pokemon deleted
 *          404:
 *              description: pokemon not found
 */

router.get("/blogs/:id", getBlog);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  get:
 *      summary: return a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id       
 *      responses:
 *          200:
 *              description: a pokemon
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/Pokemon'
 *          404:
 *              description: pokemon not found
 */

router.put("/blogs/:id", updateBlog);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  put:
 *      summary: update a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Pokemon'       
 *      responses:
 *          200:
 *              description: pokemon update
 *          404:
 *              description: pokemon not found
 */

export default router;
