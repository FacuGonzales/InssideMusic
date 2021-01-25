import { EpisodeObject } from "./episode-object";
import { PublicUserObject } from "./public-user-object";
import { TrackObject } from "./track-object";

export interface PlaylistTrackObject {
    added_at: Date,
    added_by?: PublicUserObject,
    is_local?: boolean,
    items?: TrackObject | EpisodeObject,
}