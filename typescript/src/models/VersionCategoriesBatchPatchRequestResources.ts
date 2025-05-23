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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';

/**
 * 
 * @export
 * @interface VersionCategoriesBatchPatchRequestResources
 */
export interface VersionCategoriesBatchPatchRequestResources {
    /**
     * 
     * @type {Category}
     * @memberof VersionCategoriesBatchPatchRequestResources
     */
    key?: Category;
}

/**
 * Check if a given object implements the VersionCategoriesBatchPatchRequestResources interface.
 */
export function instanceOfVersionCategoriesBatchPatchRequestResources(value: object): value is VersionCategoriesBatchPatchRequestResources {
    return true;
}

export function VersionCategoriesBatchPatchRequestResourcesFromJSON(json: any): VersionCategoriesBatchPatchRequestResources {
    return VersionCategoriesBatchPatchRequestResourcesFromJSONTyped(json, false);
}

export function VersionCategoriesBatchPatchRequestResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionCategoriesBatchPatchRequestResources {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['{key}'] == null ? undefined : CategoryFromJSON(json['{key}']),
    };
}

export function VersionCategoriesBatchPatchRequestResourcesToJSON(json: any): VersionCategoriesBatchPatchRequestResources {
    return VersionCategoriesBatchPatchRequestResourcesToJSONTyped(json, false);
}

export function VersionCategoriesBatchPatchRequestResourcesToJSONTyped(value?: VersionCategoriesBatchPatchRequestResources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '{key}': CategoryToJSON(value['key']),
    };
}

