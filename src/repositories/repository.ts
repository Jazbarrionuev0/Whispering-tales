import { ApiVersion, Schema, Table } from '@/types/types'
import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import { LogRepository } from './log/logRepository'

export class Repository<T> {
  private readonly _baseUrl: string
  private readonly _version: string
  private readonly _schema: string
  private readonly _table: string
  private readonly _token: string
  private readonly _axios: AxiosInstance
  private readonly _fullUrl: string
  // private readonly _logRepository: LogRepository

  public get axios(): AxiosInstance {
    return this._axios
  }

  public get table(): string {
    return this._table
  }

  public constructor(schema: Schema, table: Table, version: ApiVersion = 'v1') {
    this._baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string
    this._version = `/api/${version}`
    this._schema = `/${schema}`
    this._table = `/${table}`
    this._token = `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` as string
    this._fullUrl = `${this._baseUrl}${this._version}${this._schema}${this._table}`
    this._axios = axios.create({
      baseURL: this._fullUrl,
      headers: {
        Authorization: this._token,
      },
    })
    // this._logRepository = new LogRepository()
  }

  async insert(object: Partial<T>): Promise<void> {
    try {
      await this._axios.post('', object)
    } catch (error) {
      console.error(error)

      throw error
    }
  }

  async edit(id: number, object: Partial<T>): Promise<T[]> {
    try {
      // this._logRepository.logInfo(`Repository: Editing data from ${this._table} - ${this._fullUrl}`)
      const response: AxiosResponse<T[]> = await this._axios.patch(`/${id}`, object)
      return response.data
    } catch (error) {
      // this._logRepository.logError(`Repository: Error editing data from ${this._table} - ${this._fullUrl}`)
      console.error(error)

      throw error
    }
  }

  async delete(id: number): Promise<T | any> {
    try {
      const response: AxiosResponse<T | any> = await this._axios.delete(`/${id}`)
      if (response.data.meta) {
        throw new Error(response.data.meta.field_name)
      }
      return response.data
    } catch (error) {
      console.error(error)

      throw error
    }
  }

  async getAll(): Promise<T[]> {
    try {
      // this._logRepository.logInfo(`Repository: Fetching all data from ${this._table} - ${this._fullUrl}`)
      const response: AxiosResponse<T[]> = await this._axios.get('')
      // this._logRepository.logInfo(`Repository: Data fetched successfully from ${this._table} - Count: ${response.data.length}`)
      return response.data
    } catch (error) {
      console.error(error)

      throw error
    }
  }

  async getById(id: number): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this._axios.get(`/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching data for id ${id}:`, error)
      throw error
    }
  }
}
