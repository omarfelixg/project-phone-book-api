import { Router } from "express";
import {
    getContacts,
    getContact,
    createContact,
    updateContact,
    removeContact
} from '../controllers/contact.controller'
const router = Router();

/**
 * @swagger
 * /api/Contacts:
 *  get:
 *      summary: return all Contacts
 *      tags: [Contact]
 *      responses:
 *          200:
 *              description: all Contacts
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      firstName:
 *                                          type: string
 *                                          description: Contact's name
 *                                      lastName:
 *                                          type: string
 *                                          description: Contact's name
 *                                      phoneNumber:
 *                                          type: string
 *                                          description: Contact's phone number
 *                                  required:
 *                                      - firstName
 *                                      - lastName
 *                                      - phoneNumber
 *                                  example:
 *                                      messsage: Se obtuvo los Contactos
 *                                      content:
 *                                          firstName: Eric
 *                                          lastName: Elliot
 *                                          phoneNumber: 222-555-6575
 *                                      extra: null
 */
router.get("/contacts",getContacts);

/**
 * @swagger
 * /api/Contacts/{id}:
 *  get:
 *      summary: return a Contact
 *      tags: [Contact]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the Contact id
 *      responses:
 *          200:
 *              description: a Contact
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/Contact'
 *          404:
 *              description: Contact not found
 */
router.get("/contact/:id", getContact);

/**
 * @swagger
 * /api/Contacts:
 *  post:
 *      summary: create a new Contact
 *      tags: [Contact]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Contact'
 *      responses:
 *          200:
 *              description: new Contact created!
 */
router.post("/contact", createContact);

/**
 * @swagger
 * /api/Contacts/{id}:
 *  delete:
 *      summary: update a Contact
 *      tags: [Contact]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the Contact id
 *      responses:
 *          200:
 *              description: Contact updated
 *          404:
 *              description: Contact not found
 */
router.put("/contact/:id", updateContact);

/**
 * @swagger
 * /api/Contacts/{id}:
 *  delete:
 *      summary: delete a Contact
 *      tags: [Contact]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the Contact id
 *      responses:
 *          200:
 *              description: Contact deleted
 *          404:
 *              description: Contact not found
 */
router.delete("/contact/:id", removeContact);

export default router;
