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
import type { AwardRecord } from './AwardRecord';
import {
    AwardRecordFromJSON,
    AwardRecordFromJSONTyped,
    AwardRecordToJSON,
    AwardRecordToJSONTyped,
} from './AwardRecord';

/**
 * 
 * @export
 * @interface VersionAwardRecordsBatchPatchRequestResources
 */
export interface VersionAwardRecordsBatchPatchRequestResources {
    /**
     * 
     * @type {AwardRecord}
     * @memberof VersionAwardRecordsBatchPatchRequestResources
     */
    key?: AwardRecord;
}

/**
 * Check if a given object implements the VersionAwardRecordsBatchPatchRequestResources interface.
 */
export function instanceOfVersionAwardRecordsBatchPatchRequestResources(value: object): value is VersionAwardRecordsBatchPatchRequestResources {
    return true;
}

export function VersionAwardRecordsBatchPatchRequestResourcesFromJSON(json: any): VersionAwardRecordsBatchPatchRequestResources {
    return VersionAwardRecordsBatchPatchRequestResourcesFromJSONTyped(json, false);
}

export function VersionAwardRecordsBatchPatchRequestResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionAwardRecordsBatchPatchRequestResources {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['{key}'] == null ? undefined : AwardRecordFromJSON(json['{key}']),
    };
}

export function VersionAwardRecordsBatchPatchRequestResourcesToJSON(json: any): VersionAwardRecordsBatchPatchRequestResources {
    return VersionAwardRecordsBatchPatchRequestResourcesToJSONTyped(json, false);
}

export function VersionAwardRecordsBatchPatchRequestResourcesToJSONTyped(value?: VersionAwardRecordsBatchPatchRequestResources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '{key}': AwardRecordToJSON(value['key']),
    };
}

