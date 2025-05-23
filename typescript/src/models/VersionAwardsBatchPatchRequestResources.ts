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
import type { Award } from './Award';
import {
    AwardFromJSON,
    AwardFromJSONTyped,
    AwardToJSON,
    AwardToJSONTyped,
} from './Award';

/**
 * 
 * @export
 * @interface VersionAwardsBatchPatchRequestResources
 */
export interface VersionAwardsBatchPatchRequestResources {
    /**
     * 
     * @type {Award}
     * @memberof VersionAwardsBatchPatchRequestResources
     */
    key?: Award;
}

/**
 * Check if a given object implements the VersionAwardsBatchPatchRequestResources interface.
 */
export function instanceOfVersionAwardsBatchPatchRequestResources(value: object): value is VersionAwardsBatchPatchRequestResources {
    return true;
}

export function VersionAwardsBatchPatchRequestResourcesFromJSON(json: any): VersionAwardsBatchPatchRequestResources {
    return VersionAwardsBatchPatchRequestResourcesFromJSONTyped(json, false);
}

export function VersionAwardsBatchPatchRequestResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionAwardsBatchPatchRequestResources {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['{key}'] == null ? undefined : AwardFromJSON(json['{key}']),
    };
}

export function VersionAwardsBatchPatchRequestResourcesToJSON(json: any): VersionAwardsBatchPatchRequestResources {
    return VersionAwardsBatchPatchRequestResourcesToJSONTyped(json, false);
}

export function VersionAwardsBatchPatchRequestResourcesToJSONTyped(value?: VersionAwardsBatchPatchRequestResources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '{key}': AwardToJSON(value['key']),
    };
}

