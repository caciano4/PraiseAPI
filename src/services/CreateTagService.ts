import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

interface ITagRequest {
  name: string
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const TagRepository = getCustomRepository(TagsRepository);
    if (!name) {
      throw new Error('Name Incorrect')
    }
    // SELECT * WHERE TAGS NAME = 'name'
    const tagAlreadyExists = await TagRepository.findOne({ name })

    if (tagAlreadyExists) {
      throw new Error('Tag Already Exists')
    }
    const tag = TagRepository.create({
      name
    })
    await TagRepository.save(tag)
    console.log(tag)
    return tag
  }
}

export { CreateTagService }