import { ArtistObject } from "./artist-object";
import { ExternalIdObject } from "./external-id-object";
import { ExternalUrlObject } from "./external-url-object";
import { SimplifiedAlbumObject } from "./simplified-album-object";
import { TrackRestrictionObject } from "./track-restriction-object";

export interface TrackObject{
    album?: SimplifiedAlbumObject,
    artists?: ArtistObject[],
    available_markets?: string[],
    disc_number?: number,
    duration_ms?: number,
    explicit?: boolean,
    external_ids?: ExternalIdObject,
    external_urls?: ExternalUrlObject,
    href?: string,
    id?: string,
    is_local?: boolean,
    is_playable?: boolean,
    linked_from?: any,
    name?: string,
    popularity?: number,
    preview_url?: string,
    restrictions?: TrackRestrictionObject,
    track_number?: number,
    type?: string,
    uri?: string
}