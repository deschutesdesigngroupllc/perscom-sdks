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
import type { Calendar } from './Calendar';
import {
    CalendarFromJSON,
    CalendarFromJSONTyped,
    CalendarToJSON,
    CalendarToJSONTyped,
} from './Calendar';

/**
 * 
 * @export
 * @interface VersionCalendarsBatchPatchRequestResources
 */
export interface VersionCalendarsBatchPatchRequestResources {
    /**
     * 
     * @type {Calendar}
     * @memberof VersionCalendarsBatchPatchRequestResources
     */
    key?: Calendar;
}

/**
 * Check if a given object implements the VersionCalendarsBatchPatchRequestResources interface.
 */
export function instanceOfVersionCalendarsBatchPatchRequestResources(value: object): value is VersionCalendarsBatchPatchRequestResources {
    return true;
}

export function VersionCalendarsBatchPatchRequestResourcesFromJSON(json: any): VersionCalendarsBatchPatchRequestResources {
    return VersionCalendarsBatchPatchRequestResourcesFromJSONTyped(json, false);
}

export function VersionCalendarsBatchPatchRequestResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCalendarsBatchPatchRequestResources {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['{key}'] == null ? undefined : CalendarFromJSON(json['{key}']),
    };
}

export function VersionCalendarsBatchPatchRequestResourcesToJSON(json: any): VersionCalendarsBatchPatchRequestResources {
    return VersionCalendarsBatchPatchRequestResourcesToJSONTyped(json, false);
}

export function VersionCalendarsBatchPatchRequestResourcesToJSONTyped(value?: VersionCalendarsBatchPatchRequestResources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '{key}': CalendarToJSON(value['key']),
    };
}

