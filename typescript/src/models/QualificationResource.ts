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
/**
 * 
 * @export
 * @interface QualificationResource
 */
export interface QualificationResource {
    /**
     * 
     * @type {string}
     * @memberof QualificationResource
     */
    name: string;
    /**
     * Supports HTML.
     * @type {string}
     * @memberof QualificationResource
     */
    description?: string | null;
    /**
     * Will be auto-calculated if nothing is provided.
     * @type {number}
     * @memberof QualificationResource
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof QualificationResource
     */
    label?: string;
    /**
     * The date the resource was created. Stored in UTC.
     * @type {Date}
     * @memberof QualificationResource
     */
    createdAt?: Date;
    /**
     * The date the resource was updated. Stored in UTC.
     * @type {Date}
     * @memberof QualificationResource
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof QualificationResource
     */
    id?: number;
}

/**
 * Check if a given object implements the QualificationResource interface.
 */
export function instanceOfQualificationResource(value: object): value is QualificationResource {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function QualificationResourceFromJSON(json: any): QualificationResource {
    return QualificationResourceFromJSONTyped(json, false);
}

export function QualificationResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualificationResource {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'order': json['order'] == null ? undefined : json['order'],
        'label': json['label'] == null ? undefined : json['label'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function QualificationResourceToJSON(json: any): QualificationResource {
    return QualificationResourceToJSONTyped(json, false);
}

export function QualificationResourceToJSONTyped(value?: QualificationResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'order': value['order'],
        'label': value['label'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'id': value['id'],
    };
}

