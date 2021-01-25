import { ExternalUrlObject } from "./external-url-object";
import { FollowersObject } from "./followers-object";
import { ImageObject } from "./images-object";
import { PlaylistTrackObject } from "./playlist-track-object";
import { PublicUserObject } from "./public-user-object";

export interface PlaylistObject {
    collaborative?: boolean,
    description?: string,
    external_urls?: ExternalUrlObject,
    followers?: FollowersObject,
    href?: string,
    id?: string,
    images?: ImageObject[],
    name?: string,
    owner?: PublicUserObject,
    public?: boolean,
    snapshot_id?: string,
    tracks?: PlaylistTrackObject,
    type?: string,
    uri?: string,
}