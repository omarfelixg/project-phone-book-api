import {
  Request,
  Response
} from "express";
import { ApiResponse } from "../response/contact.responses";
import { get, getAll, create, update, remove } from "../providers/contact.service";
import { ContactEntity } from "../entity/contact.entity";
import {
  IApiResponse
} from "src/interfaces/contact.interfaces";
import type * as E from "express";

export const getContacts = async (req: Request, res: Response): Promise<E.Response<IApiResponse, Record<string, any>>> => {
  const getContacts: ContactEntity[] | [] = await getAll()
  const message = getContacts.length !== 0 ? "Contacts were obtained" : "No contacts in db"
  return res.json(ApiResponse(message, getContacts, ""))
};

export const getContact = async (req: Request, res: Response): Promise<E.Response<IApiResponse, Record<string, any>>> => {
  const id: string = req.params.id
  const getContact: ContactEntity | null = await get(id)
  const message = getContact ? `Contact was obtained with id: ${id}` : `No contact found with id: ${id}`
  return res.json(ApiResponse(message, getContact, ""));
};

export const createContact = async (req: Request, res: Response): Promise<E.Response<IApiResponse, Record<string, any>>> => {
  let createdContact: ContactEntity[]
  try {
    createdContact = await create(req.body)
    return res.json(ApiResponse("Contact created", createdContact, ""));
  } catch (error) {
    console.log(error)
    return res.json(ApiResponse("Contact could not be created", null, ""));
  }
};

export const updateContact = async (req: Request, res: Response): Promise<E.Response<IApiResponse, Record<string, any>>> => {
  const id: string = req.params.id
  let updatedContact: ContactEntity | null
  try {
    updatedContact = await update(id, req.body);
    return updatedContact ? res.json(ApiResponse(`Contact with id: ${id} was updated`, updatedContact, "")) : res.json(ApiResponse("Contact could not be updated", null, ""));
  } catch (error) {
    console.log(error)
    return res.json(ApiResponse("Contact could not be updated", null, ""));
  }
};

export const removeContact = async (req: Request, res: Response): Promise<E.Response<IApiResponse, Record<string, any>>> => {
  const id: string = req.params.id
  let removedContact: true | false
  try {
    removedContact = await remove(id);
    return removedContact ? res.json(ApiResponse(`Contact with id: ${id} was removed`, true, "")) : res.json(ApiResponse("Contact could not be removed", {}, ""))
  } catch (error) {
    console.log(error)
    return res.json(ApiResponse("Contact could not be updated", false, ""));
  }
};