import { ContactEntity } from "../entity/contact.entity";
import { AppDataSource } from "../db";
import { ContactDto } from "../dto/contact.dto";

export const getAll = async (): Promise<ContactEntity[] | []> => {
  const ContactRepository = AppDataSource.getRepository(ContactEntity)
  return await ContactRepository.find()
};

export const get = async (id: string): Promise<ContactEntity | null> => {
  const ContactRepository = AppDataSource.getRepository(ContactEntity)
  return await ContactRepository.findOneBy({id: parseInt(id)})
};

export const create = async (data: ContactDto[]): Promise<ContactEntity[]> => {
  const ContactRepository = AppDataSource.getRepository(ContactEntity)
  return await ContactRepository.save(data)
};

export const update = async (id:string, data:ContactDto): Promise<ContactEntity | null> => {
    const ContactRepository = AppDataSource.getRepository(ContactEntity)
    const contact = await ContactRepository.findOneBy({id: parseInt(id)});
    if(contact) {
      await ContactRepository.merge(contact, data);
      return await ContactRepository.save(contact)
    }
    return null
};

export const remove = async (id: string): Promise<true | false> => {
    const ContactRepository = AppDataSource.getRepository(ContactEntity)
    const contact = await ContactRepository.findOneBy({id: parseInt(id)});
    if(contact) {
        await ContactRepository.delete({id: parseInt(id)});
        return true;
    }
    return false
};