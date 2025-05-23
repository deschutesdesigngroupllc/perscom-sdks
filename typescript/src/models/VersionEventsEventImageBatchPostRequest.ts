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
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    ImageToJSONTyped,
} from './Image';

/**
 * 
 * @export
 * @interface VersionEventsEventImageBatchPostRequest
 */
export interface VersionEventsEventImageBatchPostRequest {
    /**
     * 
     * @type {Array<Image>}
     * @memberof VersionEventsEventImageBatchPostRequest
     */
    resources?: Array<Image>;
}

/**
 * Check if a given object implements the VersionEventsEventImageBatchPostRequest interface.
 */
export function instanceOfVersionEventsEventImageBatchPostRequest(value: object): value is VersionEventsEventImageBatchPostRequest {
    return true;
}

export function VersionEventsEventImageBatchPostRequestFromJSON(json: any): VersionEventsEventImageBatchPostRequest {
    return VersionEventsEventImageBatchPostRequestFromJSONTyped(json, false);
}

export function VersionEventsEventImageBatchPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionEventsEventImageBatchPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : ((json['resources'] as Array<any>).map(ImageFromJSON)),
    };
}

export function VersionEventsEventImageBatchPostRequestToJSON(json: any): VersionEventsEventImageBatchPostRequest {
    return VersionEventsEventImageBatchPostRequestToJSONTyped(json, false);
}

export function VersionEventsEventImageBatchPostRequestToJSONTyped(value?: VersionEventsEventImageBatchPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': value['resources'] == null ? undefined : ((value['resources'] as Array<any>).map(ImageToJSON)),
    };
}

