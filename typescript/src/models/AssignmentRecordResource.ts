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
 * @interface AssignmentRecordResource
 */
export interface AssignmentRecordResource {
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    statusId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    unitId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    positionId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    specialtyId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    documentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    authorId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AssignmentRecordResource
     */
    type?: AssignmentRecordResourceTypeEnum;
    /**
     * Supports HTML.
     * @type {string}
     * @memberof AssignmentRecordResource
     */
    text?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AssignmentRecordResource
     */
    label?: string;
    /**
     * The date the resource was created. Stored in UTC.
     * @type {Date}
     * @memberof AssignmentRecordResource
     */
    createdAt?: Date;
    /**
     * The date the resource was updated. Stored in UTC.
     * @type {Date}
     * @memberof AssignmentRecordResource
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecordResource
     */
    id?: number;
}


/**
 * @export
 */
export const AssignmentRecordResourceTypeEnum = {
    Primary: 'primary',
    Secondary: 'secondary'
} as const;
export type AssignmentRecordResourceTypeEnum = typeof AssignmentRecordResourceTypeEnum[keyof typeof AssignmentRecordResourceTypeEnum];


/**
 * Check if a given object implements the AssignmentRecordResource interface.
 */
export function instanceOfAssignmentRecordResource(value: object): value is AssignmentRecordResource {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function AssignmentRecordResourceFromJSON(json: any): AssignmentRecordResource {
    return AssignmentRecordResourceFromJSONTyped(json, false);
}

export function AssignmentRecordResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignmentRecordResource {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'statusId': json['status_id'] == null ? undefined : json['status_id'],
        'unitId': json['unit_id'] == null ? undefined : json['unit_id'],
        'positionId': json['position_id'] == null ? undefined : json['position_id'],
        'specialtyId': json['specialty_id'] == null ? undefined : json['specialty_id'],
        'documentId': json['document_id'] == null ? undefined : json['document_id'],
        'authorId': json['author_id'] == null ? undefined : json['author_id'],
        'type': json['type'] == null ? undefined : json['type'],
        'text': json['text'] == null ? undefined : json['text'],
        'label': json['label'] == null ? undefined : json['label'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AssignmentRecordResourceToJSON(json: any): AssignmentRecordResource {
    return AssignmentRecordResourceToJSONTyped(json, false);
}

export function AssignmentRecordResourceToJSONTyped(value?: AssignmentRecordResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_id': value['userId'],
        'status_id': value['statusId'],
        'unit_id': value['unitId'],
        'position_id': value['positionId'],
        'specialty_id': value['specialtyId'],
        'document_id': value['documentId'],
        'author_id': value['authorId'],
        'type': value['type'],
        'text': value['text'],
        'label': value['label'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'id': value['id'],
    };
}

