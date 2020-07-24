export interface ThingsParams {
  page: number
  perPage: number
  searchType: SearchType
}

export enum SearchType {
  Newest = 'NEWEST',
  Popular = 'POPULAR',
  Featured = 'FEATURED',
}

export interface ThingsResponse {
  count: number
  things: Thing[]
  error?: string
}

export interface ThingsResponseData {
  things: ThingsResponse
}

export interface Thing {
  id: number
  name: string
  url: string
  thumbnail: string
  creator: Creator
}

export interface ThingResponseData {
  thing: Thing
}

export interface Creator {
  name: string
}
