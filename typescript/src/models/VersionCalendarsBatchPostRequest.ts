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
 * @interface VersionCalendarsBatchPostRequest
 */
export interface VersionCalendarsBatchPostRequest {
    /**
     * 
     * @type {Array<Calendar>}
     * @memberof VersionCalendarsBatchPostRequest
     */
    resources?: Array<Calendar>;
}

/**
 * Check if a given object implements the VersionCalendarsBatchPostRequest interface.
 */
export function instanceOfVersionCalendarsBatchPostRequest(value: object): value is VersionCalendarsBatchPostRequest {
    return true;
}

export function VersionCalendarsBatchPostRequestFromJSON(json: any): VersionCalendarsBatchPostRequest {
    return VersionCalendarsBatchPostRequestFromJSONTyped(json, false);
}

export function VersionCalendarsBatchPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCalendarsBatchPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : ((json['resources'] as Array<any>).map(CalendarFromJSON)),
    };
}

export function VersionCalendarsBatchPostRequestToJSON(json: any): VersionCalendarsBatchPostRequest {
    return VersionCalendarsBatchPostRequestToJSONTyped(json, false);
}

export function VersionCalendarsBatchPostRequestToJSONTyped(value?: VersionCalendarsBatchPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': value['resources'] == null ? undefined : ((value['resources'] as Array<any>).map(CalendarToJSON)),
    };
}

