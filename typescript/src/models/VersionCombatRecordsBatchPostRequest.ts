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
import type { CombatRecord } from './CombatRecord';
import {
    CombatRecordFromJSON,
    CombatRecordFromJSONTyped,
    CombatRecordToJSON,
    CombatRecordToJSONTyped,
} from './CombatRecord';

/**
 * 
 * @export
 * @interface VersionCombatRecordsBatchPostRequest
 */
export interface VersionCombatRecordsBatchPostRequest {
    /**
     * 
     * @type {Array<CombatRecord>}
     * @memberof VersionCombatRecordsBatchPostRequest
     */
    resources?: Array<CombatRecord>;
}

/**
 * Check if a given object implements the VersionCombatRecordsBatchPostRequest interface.
 */
export function instanceOfVersionCombatRecordsBatchPostRequest(value: object): value is VersionCombatRecordsBatchPostRequest {
    return true;
}

export function VersionCombatRecordsBatchPostRequestFromJSON(json: any): VersionCombatRecordsBatchPostRequest {
    return VersionCombatRecordsBatchPostRequestFromJSONTyped(json, false);
}

export function VersionCombatRecordsBatchPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCombatRecordsBatchPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : ((json['resources'] as Array<any>).map(CombatRecordFromJSON)),
    };
}

export function VersionCombatRecordsBatchPostRequestToJSON(json: any): VersionCombatRecordsBatchPostRequest {
    return VersionCombatRecordsBatchPostRequestToJSONTyped(json, false);
}

export function VersionCombatRecordsBatchPostRequestToJSONTyped(value?: VersionCombatRecordsBatchPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': value['resources'] == null ? undefined : ((value['resources'] as Array<any>).map(CombatRecordToJSON)),
    };
}

