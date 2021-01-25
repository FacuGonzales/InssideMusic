import { CopyrightObject } from "./copyright-object";
import { ExternalUrlObject } from "./external-url-object";
import { ImageObject } from "./images-object";

export interface SimplifiedShowObject{
    available_markets?: string,
    copyrights?: CopyrightObject[],
    description?: string,
    explicit?: boolean,
    external_urls?: ExternalUrlObject,
    href?: string,
    id?: string,
    images?: ImageObject[],
    is_externally_hosted?: boolean,
    languages?: string[],
    media_type?: string,
    name?: string,
    publisher?: string,
    type?: string,
    uri?: string,
}