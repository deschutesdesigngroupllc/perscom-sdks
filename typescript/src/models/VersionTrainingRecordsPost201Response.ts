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
import type { TrainingRecordResource } from './TrainingRecordResource';
import {
    TrainingRecordResourceFromJSON,
    TrainingRecordResourceFromJSONTyped,
    TrainingRecordResourceToJSON,
    TrainingRecordResourceToJSONTyped,
} from './TrainingRecordResource';

/**
 * 
 * @export
 * @interface VersionTrainingRecordsPost201Response
 */
export interface VersionTrainingRecordsPost201Response {
    /**
     * 
     * @type {TrainingRecordResource}
     * @memberof VersionTrainingRecordsPost201Response
     */
    data?: TrainingRecordResource;
}

/**
 * Check if a given object implements the VersionTrainingRecordsPost201Response interface.
 */
export function instanceOfVersionTrainingRecordsPost201Response(value: object): value is VersionTrainingRecordsPost201Response {
    return true;
}

export function VersionTrainingRecordsPost201ResponseFromJSON(json: any): VersionTrainingRecordsPost201Response {
    return VersionTrainingRecordsPost201ResponseFromJSONTyped(json, false);
}

export function VersionTrainingRecordsPost201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionTrainingRecordsPost201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : TrainingRecordResourceFromJSON(json['data']),
    };
}

export function VersionTrainingRecordsPost201ResponseToJSON(json: any): VersionTrainingRecordsPost201Response {
    return VersionTrainingRecordsPost201ResponseToJSONTyped(json, false);
}

export function VersionTrainingRecordsPost201ResponseToJSONTyped(value?: VersionTrainingRecordsPost201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': TrainingRecordResourceToJSON(value['data']),
    };
}

