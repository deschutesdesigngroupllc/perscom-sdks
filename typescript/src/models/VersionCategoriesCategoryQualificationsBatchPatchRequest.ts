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
import type { VersionCategoriesCategoryQualificationsBatchPatchRequestResources } from './VersionCategoriesCategoryQualificationsBatchPatchRequestResources';
import {
    VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesFromJSON,
    VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesFromJSONTyped,
    VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesToJSON,
    VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesToJSONTyped,
} from './VersionCategoriesCategoryQualificationsBatchPatchRequestResources';

/**
 * 
 * @export
 * @interface VersionCategoriesCategoryQualificationsBatchPatchRequest
 */
export interface VersionCategoriesCategoryQualificationsBatchPatchRequest {
    /**
     * 
     * @type {VersionCategoriesCategoryQualificationsBatchPatchRequestResources}
     * @memberof VersionCategoriesCategoryQualificationsBatchPatchRequest
     */
    resources?: VersionCategoriesCategoryQualificationsBatchPatchRequestResources;
}

/**
 * Check if a given object implements the VersionCategoriesCategoryQualificationsBatchPatchRequest interface.
 */
export function instanceOfVersionCategoriesCategoryQualificationsBatchPatchRequest(value: object): value is VersionCategoriesCategoryQualificationsBatchPatchRequest {
    return true;
}

export function VersionCategoriesCategoryQualificationsBatchPatchRequestFromJSON(json: any): VersionCategoriesCategoryQualificationsBatchPatchRequest {
    return VersionCategoriesCategoryQualificationsBatchPatchRequestFromJSONTyped(json, false);
}

export function VersionCategoriesCategoryQualificationsBatchPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCategoriesCategoryQualificationsBatchPatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesFromJSON(json['resources']),
    };
}

export function VersionCategoriesCategoryQualificationsBatchPatchRequestToJSON(json: any): VersionCategoriesCategoryQualificationsBatchPatchRequest {
    return VersionCategoriesCategoryQualificationsBatchPatchRequestToJSONTyped(json, false);
}

export function VersionCategoriesCategoryQualificationsBatchPatchRequestToJSONTyped(value?: VersionCategoriesCategoryQualificationsBatchPatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': VersionCategoriesCategoryQualificationsBatchPatchRequestResourcesToJSON(value['resources']),
    };
}

