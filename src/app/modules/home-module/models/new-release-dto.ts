import { IArtistsDto } from "./artists-dto";
import { IImagesDto } from "./images-dto";

export interface INewReleaseDto {
    album_type?: string,

    artists?: IArtistsDto[],
    available_markets?: string[],
    external_urls?: any,
    href?: string,
    id?: string,
    images?: IImagesDto[]
    name?: string,
    release_date?: string,
    release_date_precision?: string,
    total_tracks?: number,
    type?: string,
    uri?: string,
}