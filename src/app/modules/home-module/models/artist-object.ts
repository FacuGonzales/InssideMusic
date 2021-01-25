import { ExternalUrlObject } from "./external-url-object";
import { FollowersObject } from "./followers-object";
import { ImageObject } from "./images-object";

export interface ArtistObject{
    external_urls?: ExternalUrlObject,
    followers?: FollowersObject,
    genres?: string[],
    href?: string,
    id?: string,
    images?: ImageObject[],
    name?: string,
    popularity?: number,
    type?: string,
    uri?: string
}