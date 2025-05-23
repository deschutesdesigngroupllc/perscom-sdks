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
 * @interface SpecialtyResource
 */
export interface SpecialtyResource {
    /**
     * 
     * @type {string}
     * @memberof SpecialtyResource
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SpecialtyResource
     */
    abbreviation?: string | null;
    /**
     * Supports HTML.
     * @type {string}
     * @memberof SpecialtyResource
     */
    description?: string | null;
    /**
     * Will be auto-calculated if nothing is provided.
     * @type {number}
     * @memberof SpecialtyResource
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof SpecialtyResource
     */
    label?: string;
    /**
     * The date the resource was created. Stored in UTC.
     * @type {Date}
     * @memberof SpecialtyResource
     */
    createdAt?: Date;
    /**
     * The date the resource was updated. Stored in UTC.
     * @type {Date}
     * @memberof SpecialtyResource
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof SpecialtyResource
     */
    id?: number;
}

/**
 * Check if a given object implements the SpecialtyResource interface.
 */
export function instanceOfSpecialtyResource(value: object): value is SpecialtyResource {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function SpecialtyResourceFromJSON(json: any): SpecialtyResource {
    return SpecialtyResourceFromJSONTyped(json, false);
}

export function SpecialtyResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecialtyResource {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'abbreviation': json['abbreviation'] == null ? undefined : json['abbreviation'],
        'description': json['description'] == null ? undefined : json['description'],
        'order': json['order'] == null ? undefined : json['order'],
        'label': json['label'] == null ? undefined : json['label'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SpecialtyResourceToJSON(json: any): SpecialtyResource {
    return SpecialtyResourceToJSONTyped(json, false);
}

export function SpecialtyResourceToJSONTyped(value?: SpecialtyResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'abbreviation': value['abbreviation'],
        'description': value['description'],
        'order': value['order'],
        'label': value['label'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'id': value['id'],
    };
}

