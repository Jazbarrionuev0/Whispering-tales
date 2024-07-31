import { LoginType } from '@/validation/zodSchemas/formSchema'
import { Repository } from '../repository'
import { AxiosResponse } from 'axios'
import { User } from '@/entities/user'

export class AuthRepository extends Repository<LoginType> {
  constructor() {
    super('user', 'auth/login')
  }

  async login(object: LoginType): Promise<User | null> {
    try {
      const response: AxiosResponse = await this.axios.post('', object)
      if (response.data !== '') return response.data
      throw new Error('Invalid credentials')
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
