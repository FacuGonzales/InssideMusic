import { ExternalUrlObject } from "./external-url-object";
import { ImageObject } from "./images-object";
import { ResumePointObject } from "./resume-point-object";
import { SimplifiedShowObject } from "./simplifiedshowobject";

export interface EpisodeObject {
    audio_preview_url?: string,
    description?: string,
    duration_ms?: number,
    explicit?: boolean,
    external_urls?: ExternalUrlObject,
    href?: string,
    id?: string,
    images?: ImageObject[],
    is_externally_hosted?: boolean,
    is_playable?: boolean,
    language?: string,
    languages?: string[],
    name?: string,
    release_date?: string,
    release_date_precision?: string,
    resume_point?: ResumePointObject,
    show?: SimplifiedShowObject,
    type?: string,
    uri?: string
}