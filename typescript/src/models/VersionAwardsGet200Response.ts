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
import type { AwardResource } from './AwardResource';
import {
    AwardResourceFromJSON,
    AwardResourceFromJSONTyped,
    AwardResourceToJSON,
    AwardResourceToJSONTyped,
} from './AwardResource';
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
 * @interface VersionAwardsGet200Response
 */
export interface VersionAwardsGet200Response {
    /**
     * 
     * @type {Array<AwardResource>}
     * @memberof VersionAwardsGet200Response
     */
    data?: Array<AwardResource>;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof VersionAwardsGet200Response
     */
    links?: ResourceLinks;
    /**
     * 
     * @type {ResourceMeta}
     * @memberof VersionAwardsGet200Response
     */
    meta?: ResourceMeta;
}

/**
 * Check if a given object implements the VersionAwardsGet200Response interface.
 */
export function instanceOfVersionAwardsGet200Response(value: object): value is VersionAwardsGet200Response {
    return true;
}

export function VersionAwardsGet200ResponseFromJSON(json: any): VersionAwardsGet200Response {
    return VersionAwardsGet200ResponseFromJSONTyped(json, false);
}

export function VersionAwardsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionAwardsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AwardResourceFromJSON)),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : ResourceMetaFromJSON(json['meta']),
    };
}

export function VersionAwardsGet200ResponseToJSON(json: any): VersionAwardsGet200Response {
    return VersionAwardsGet200ResponseToJSONTyped(json, false);
}

export function VersionAwardsGet200ResponseToJSONTyped(value?: VersionAwardsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AwardResourceToJSON)),
        'links': ResourceLinksToJSON(value['links']),
        'meta': ResourceMetaToJSON(value['meta']),
    };
}

