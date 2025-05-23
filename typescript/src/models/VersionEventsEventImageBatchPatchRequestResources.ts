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
 * @interface VersionEventsEventImageBatchPatchRequestResources
 */
export interface VersionEventsEventImageBatchPatchRequestResources {
    /**
     * 
     * @type {Image}
     * @memberof VersionEventsEventImageBatchPatchRequestResources
     */
    key?: Image;
}

/**
 * Check if a given object implements the VersionEventsEventImageBatchPatchRequestResources interface.
 */
export function instanceOfVersionEventsEventImageBatchPatchRequestResources(value: object): value is VersionEventsEventImageBatchPatchRequestResources {
    return true;
}

export function VersionEventsEventImageBatchPatchRequestResourcesFromJSON(json: any): VersionEventsEventImageBatchPatchRequestResources {
    return VersionEventsEventImageBatchPatchRequestResourcesFromJSONTyped(json, false);
}

export function VersionEventsEventImageBatchPatchRequestResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionEventsEventImageBatchPatchRequestResources {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['{key}'] == null ? undefined : ImageFromJSON(json['{key}']),
    };
}

export function VersionEventsEventImageBatchPatchRequestResourcesToJSON(json: any): VersionEventsEventImageBatchPatchRequestResources {
    return VersionEventsEventImageBatchPatchRequestResourcesToJSONTyped(json, false);
}

export function VersionEventsEventImageBatchPatchRequestResourcesToJSONTyped(value?: VersionEventsEventImageBatchPatchRequestResources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '{key}': ImageToJSON(value['key']),
    };
}

