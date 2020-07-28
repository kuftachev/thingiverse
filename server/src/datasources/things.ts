import {RESTDataSource} from 'apollo-datasource-rest'
import {URLSearchParams} from 'apollo-server-env'
import {SearchType, Thing, ThingsParams, ThingsResponse} from '../types'

export class ThingiverseAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.THINGIVERSE_API_URL
  }

  async getThing(id: number): Promise<Thing> {
    const sp = this.getBaseSearchParams()
    const res = await this.get(`things/${id}`, sp)
    return ThingiverseAPI.thingResolver(res)
  }

  async getThings(params: ThingsParams): Promise<ThingsResponse> {
    const sp = this.getBaseSearchParams()
    const res = await this.get('search/things/', ThingiverseAPI.setThingsSearchParams(params, sp))
    return this.parseThingsResponse(res)
  }

  private static thingResolver(rowThing: any): Thing {
    return {
      id: rowThing.id,
      name: rowThing.name,
      url: rowThing.url,
      thumbnail: rowThing.thumbnail,
      creator: {
        name: rowThing.creator.name,
      },
    }
  }

  private parseThingsResponse(data: any): ThingsResponse {
    if (typeof data === 'object' && data != null && data.hasOwnProperty('total') && data.hasOwnProperty('hits')) {
      const things = data.hits.map(v => ThingiverseAPI.thingResolver(v))
      return {
        count: data.total,
        things: things,
      }
    } else {
      return {
        count: 0,
        things: [],
        error: data,
      }
    }
  }

  private getBaseSearchParams(): URLSearchParams {
    const sp = new URLSearchParams()
    sp.set('access_token', this.context.userSession.token)
    return sp
  }

  private static setThingsSearchParams(params: ThingsParams, sp: URLSearchParams): URLSearchParams {
    sp.set('page', params.page.toString())
    sp.set('per_page', params.perPage.toString())

    switch (params.searchType) {
      case SearchType.Newest:
        sp.set('sort', 'newest')
        break
      case SearchType.Popular:
        sp.set('sort', 'popular')
        break
      case SearchType.Featured:
        sp.set('is_featured', 'true')
        break
      default:
        throw new Error('incorrect search type')
    }

    return sp
  }
}
