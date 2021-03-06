import { AlbumRestrictionObject } from "./album-restriction-object";
import { CopyrightObject } from "./copyright-object";
import { ExternalUrlObject } from "./external-url-object";
import { ImageObject } from "./images-object";
import { PagingObject } from "./paging-object";
import { SimplifiedArtistObject } from "./simplified-artist-object";
import { TrackObject } from "./track-object";

export interface SimplifiedAlbumObject {
    album_group?: string,
    album_type?: string,
    artists?: SimplifiedArtistObject[],
    available_markets?: string[],
    external_urls?: ExternalUrlObject,
    href?: string,
    id?: string,
    images?: ImageObject[],
    copyrights?: CopyrightObject,
    label?: string,
    name?: string,
    release_date?: string,
    release_date_precision?: string,
    restrictions?: AlbumRestrictionObject,
    tracks?: PagingObject
    total_tracks?: number,
    type?: string,
    uri?: string,
    favorito?: boolean,
}
