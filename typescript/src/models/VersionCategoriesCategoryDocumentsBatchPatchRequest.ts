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
import type { VersionCategoriesCategoryDocumentsBatchPatchRequestResources } from './VersionCategoriesCategoryDocumentsBatchPatchRequestResources';
import {
    VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesFromJSON,
    VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesFromJSONTyped,
    VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesToJSON,
    VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesToJSONTyped,
} from './VersionCategoriesCategoryDocumentsBatchPatchRequestResources';

/**
 * 
 * @export
 * @interface VersionCategoriesCategoryDocumentsBatchPatchRequest
 */
export interface VersionCategoriesCategoryDocumentsBatchPatchRequest {
    /**
     * 
     * @type {VersionCategoriesCategoryDocumentsBatchPatchRequestResources}
     * @memberof VersionCategoriesCategoryDocumentsBatchPatchRequest
     */
    resources?: VersionCategoriesCategoryDocumentsBatchPatchRequestResources;
}

/**
 * Check if a given object implements the VersionCategoriesCategoryDocumentsBatchPatchRequest interface.
 */
export function instanceOfVersionCategoriesCategoryDocumentsBatchPatchRequest(value: object): value is VersionCategoriesCategoryDocumentsBatchPatchRequest {
    return true;
}

export function VersionCategoriesCategoryDocumentsBatchPatchRequestFromJSON(json: any): VersionCategoriesCategoryDocumentsBatchPatchRequest {
    return VersionCategoriesCategoryDocumentsBatchPatchRequestFromJSONTyped(json, false);
}

export function VersionCategoriesCategoryDocumentsBatchPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCategoriesCategoryDocumentsBatchPatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': json['resources'] == null ? undefined : VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesFromJSON(json['resources']),
    };
}

export function VersionCategoriesCategoryDocumentsBatchPatchRequestToJSON(json: any): VersionCategoriesCategoryDocumentsBatchPatchRequest {
    return VersionCategoriesCategoryDocumentsBatchPatchRequestToJSONTyped(json, false);
}

export function VersionCategoriesCategoryDocumentsBatchPatchRequestToJSONTyped(value?: VersionCategoriesCategoryDocumentsBatchPatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resources': VersionCategoriesCategoryDocumentsBatchPatchRequestResourcesToJSON(value['resources']),
    };
}

