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
import type { FieldResource } from './FieldResource';
import {
    FieldResourceFromJSON,
    FieldResourceFromJSONTyped,
    FieldResourceToJSON,
    FieldResourceToJSONTyped,
} from './FieldResource';

/**
 * 
 * @export
 * @interface VersionFormsFormFieldsPost201Response
 */
export interface VersionFormsFormFieldsPost201Response {
    /**
     * 
     * @type {FieldResource}
     * @memberof VersionFormsFormFieldsPost201Response
     */
    data?: FieldResource;
}

/**
 * Check if a given object implements the VersionFormsFormFieldsPost201Response interface.
 */
export function instanceOfVersionFormsFormFieldsPost201Response(value: object): value is VersionFormsFormFieldsPost201Response {
    return true;
}

export function VersionFormsFormFieldsPost201ResponseFromJSON(json: any): VersionFormsFormFieldsPost201Response {
    return VersionFormsFormFieldsPost201ResponseFromJSONTyped(json, false);
}

export function VersionFormsFormFieldsPost201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionFormsFormFieldsPost201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : FieldResourceFromJSON(json['data']),
    };
}

export function VersionFormsFormFieldsPost201ResponseToJSON(json: any): VersionFormsFormFieldsPost201Response {
    return VersionFormsFormFieldsPost201ResponseToJSONTyped(json, false);
}

export function VersionFormsFormFieldsPost201ResponseToJSONTyped(value?: VersionFormsFormFieldsPost201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': FieldResourceToJSON(value['data']),
    };
}

