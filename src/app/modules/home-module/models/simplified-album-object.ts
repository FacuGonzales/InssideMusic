import { AlbumRestrictionObject } from "./album-restriction-object";
import { ExternalUrlObject } from "./external-url-object";
import { ImageObject } from "./images-object";
import { SimplifiedArtistObject } from "./simplified-artist-object";

export interface SimplifiedAlbumObject {
    album_group?: string,
    album_type?: string,
    artists?: SimplifiedArtistObject[],
    available_markets?: string[],
    external_urls?: ExternalUrlObject,
    href?: string,
    id?: string,
    images?: ImageObject[]
    name?: string,
    release_date?: string,
    release_date_precision?: string,
    restrictions?: AlbumRestrictionObject,
    type?: string,
    uri?: string,
}
