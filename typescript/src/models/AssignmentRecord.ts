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
 * @interface AssignmentRecord
 */
export interface AssignmentRecord {
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    statusId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    unitId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    positionId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    specialtyId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    documentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AssignmentRecord
     */
    authorId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AssignmentRecord
     */
    type?: AssignmentRecordTypeEnum;
    /**
     * Supports HTML.
     * @type {string}
     * @memberof AssignmentRecord
     */
    text?: string | null;
}


/**
 * @export
 */
export const AssignmentRecordTypeEnum = {
    Primary: 'primary',
    Secondary: 'secondary'
} as const;
export type AssignmentRecordTypeEnum = typeof AssignmentRecordTypeEnum[keyof typeof AssignmentRecordTypeEnum];


/**
 * Check if a given object implements the AssignmentRecord interface.
 */
export function instanceOfAssignmentRecord(value: object): value is AssignmentRecord {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function AssignmentRecordFromJSON(json: any): AssignmentRecord {
    return AssignmentRecordFromJSONTyped(json, false);
}

export function AssignmentRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignmentRecord {
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
    };
}

export function AssignmentRecordToJSON(json: any): AssignmentRecord {
    return AssignmentRecordToJSONTyped(json, false);
}

export function AssignmentRecordToJSONTyped(value?: AssignmentRecord | null, ignoreDiscriminator: boolean = false): any {
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
    };
}

