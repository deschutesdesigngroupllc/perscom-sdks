/* tslint:disable */
/* eslint-disable */
/**
 * PERSCOM Personnel Management System API
 * The PERSCOM API describes how to interact and manipulate your PERSCOM data available at https://perscom.io. The API provides a powerful interface to allow for third-party collaboration and integration with your PERSCOM Dashboard.
 *
 * The version of the OpenAPI document: v2
 * Contact: support@deschutesdesigngroup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { CategoryResource } from './CategoryResource';
import {
    CategoryResourceFromJSON,
    CategoryResourceFromJSONTyped,
    CategoryResourceToJSON,
    CategoryResourceToJSONTyped,
} from './CategoryResource';
import type { ResourceMeta } from './ResourceMeta';
import {
    ResourceMetaFromJSON,
    ResourceMetaFromJSONTyped,
    ResourceMetaToJSON,
    ResourceMetaToJSONTyped,
} from './ResourceMeta';

/**
 * 
 * @export
 * @interface VersionCategoriesGet200Response
 */
export interface VersionCategoriesGet200Response {
    /**
     * 
     * @type {Array<CategoryResource>}
     * @memberof VersionCategoriesGet200Response
     */
    data?: Array<CategoryResource>;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof VersionCategoriesGet200Response
     */
    links?: ResourceLinks;
    /**
     * 
     * @type {ResourceMeta}
     * @memberof VersionCategoriesGet200Response
     */
    meta?: ResourceMeta;
}

/**
 * Check if a given object implements the VersionCategoriesGet200Response interface.
 */
export function instanceOfVersionCategoriesGet200Response(value: object): value is VersionCategoriesGet200Response {
    return true;
}

export function VersionCategoriesGet200ResponseFromJSON(json: any): VersionCategoriesGet200Response {
    return VersionCategoriesGet200ResponseFromJSONTyped(json, false);
}

export function VersionCategoriesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCategoriesGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CategoryResourceFromJSON)),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : ResourceMetaFromJSON(json['meta']),
    };
}

export function VersionCategoriesGet200ResponseToJSON(json: any): VersionCategoriesGet200Response {
    return VersionCategoriesGet200ResponseToJSONTyped(json, false);
}

export function VersionCategoriesGet200ResponseToJSONTyped(value?: VersionCategoriesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(CategoryResourceToJSON)),
        'links': ResourceLinksToJSON(value['links']),
        'meta': ResourceMetaToJSON(value['meta']),
    };
}

