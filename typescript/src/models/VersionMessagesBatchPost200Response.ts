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
import type { MessageResource } from './MessageResource';
import {
    MessageResourceFromJSON,
    MessageResourceFromJSONTyped,
    MessageResourceToJSON,
    MessageResourceToJSONTyped,
} from './MessageResource';

/**
 * 
 * @export
 * @interface VersionMessagesBatchPost200Response
 */
export interface VersionMessagesBatchPost200Response {
    /**
     * 
     * @type {Array<MessageResource>}
     * @memberof VersionMessagesBatchPost200Response
     */
    data?: Array<MessageResource>;
}

/**
 * Check if a given object implements the VersionMessagesBatchPost200Response interface.
 */
export function instanceOfVersionMessagesBatchPost200Response(value: object): value is VersionMessagesBatchPost200Response {
    return true;
}

export function VersionMessagesBatchPost200ResponseFromJSON(json: any): VersionMessagesBatchPost200Response {
    return VersionMessagesBatchPost200ResponseFromJSONTyped(json, false);
}

export function VersionMessagesBatchPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionMessagesBatchPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(MessageResourceFromJSON)),
    };
}

export function VersionMessagesBatchPost200ResponseToJSON(json: any): VersionMessagesBatchPost200Response {
    return VersionMessagesBatchPost200ResponseToJSONTyped(json, false);
}

export function VersionMessagesBatchPost200ResponseToJSONTyped(value?: VersionMessagesBatchPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(MessageResourceToJSON)),
    };
}

