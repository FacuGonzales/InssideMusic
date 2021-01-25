import { ExternalUrlObject } from "./external-url-object";
import { FollowersObject } from "./followers-object";
import { ImageObject } from "./images-object";

export interface PublicUserObject{
    display_name?: string,
    external_urls?: ExternalUrlObject,
    followers?: FollowersObject,
    href?: string,
    id?: string,
    images?: ImageObject[],
    type?: string,
    uri?: string
}