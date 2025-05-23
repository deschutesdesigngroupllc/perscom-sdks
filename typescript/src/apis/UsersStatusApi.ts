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


import * as runtime from '../runtime';
import type {
  Status,
  VersionAnnouncementsAnnouncementGet404Response,
  VersionAnnouncementsBatchDeleteRequest,
  VersionAnnouncementsPost422Response,
  VersionMeGet401Response,
  VersionMeGet402Response,
  VersionMeGet403Response,
  VersionMeGet429Response,
  VersionMeGet503Response,
  VersionStatusesBatchPatchRequest,
  VersionStatusesBatchPost200Response,
  VersionStatusesPost201Response,
} from '../models/index';
import {
    StatusFromJSON,
    StatusToJSON,
    VersionAnnouncementsAnnouncementGet404ResponseFromJSON,
    VersionAnnouncementsAnnouncementGet404ResponseToJSON,
    VersionAnnouncementsBatchDeleteRequestFromJSON,
    VersionAnnouncementsBatchDeleteRequestToJSON,
    VersionAnnouncementsPost422ResponseFromJSON,
    VersionAnnouncementsPost422ResponseToJSON,
    VersionMeGet401ResponseFromJSON,
    VersionMeGet401ResponseToJSON,
    VersionMeGet402ResponseFromJSON,
    VersionMeGet402ResponseToJSON,
    VersionMeGet403ResponseFromJSON,
    VersionMeGet403ResponseToJSON,
    VersionMeGet429ResponseFromJSON,
    VersionMeGet429ResponseToJSON,
    VersionMeGet503ResponseFromJSON,
    VersionMeGet503ResponseToJSON,
    VersionStatusesBatchPatchRequestFromJSON,
    VersionStatusesBatchPatchRequestToJSON,
    VersionStatusesBatchPost200ResponseFromJSON,
    VersionStatusesBatchPost200ResponseToJSON,
    VersionStatusesPost201ResponseFromJSON,
    VersionStatusesPost201ResponseToJSON,
} from '../models/index';

export interface VersionUsersUserStatusBatchDeleteRequest {
    version: VersionUsersUserStatusBatchDeleteVersionEnum;
    user: number;
    versionAnnouncementsBatchDeleteRequest?: VersionAnnouncementsBatchDeleteRequest;
}

export interface VersionUsersUserStatusBatchPatchRequest {
    version: VersionUsersUserStatusBatchPatchVersionEnum;
    user: number;
    versionStatusesBatchPatchRequest?: VersionStatusesBatchPatchRequest;
}

export interface VersionUsersUserStatusStatusDeleteRequest {
    version: VersionUsersUserStatusStatusDeleteVersionEnum;
    user: number;
    status: number;
}

export interface VersionUsersUserStatusStatusGetRequest {
    version: VersionUsersUserStatusStatusGetVersionEnum;
    user: number;
    status: number;
}

export interface VersionUsersUserStatusStatusPatchRequest {
    version: VersionUsersUserStatusStatusPatchVersionEnum;
    user: number;
    status: number;
    status2?: Status;
}

/**
 * 
 */
export class UsersStatusApi extends runtime.BaseAPI {

    /**
     * Delete a batch of statuses
     */
    async versionUsersUserStatusBatchDeleteRaw(requestParameters: VersionUsersUserStatusBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionStatusesBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserStatusBatchDelete().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserStatusBatchDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/status/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: VersionAnnouncementsBatchDeleteRequestToJSON(requestParameters['versionAnnouncementsBatchDeleteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionStatusesBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a batch of statuses
     */
    async versionUsersUserStatusBatchDelete(requestParameters: VersionUsersUserStatusBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionStatusesBatchPost200Response> {
        const response = await this.versionUsersUserStatusBatchDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a batch of statuses
     */
    async versionUsersUserStatusBatchPatchRaw(requestParameters: VersionUsersUserStatusBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionStatusesBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserStatusBatchPatch().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserStatusBatchPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/status/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: VersionStatusesBatchPatchRequestToJSON(requestParameters['versionStatusesBatchPatchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionStatusesBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Update a batch of statuses
     */
    async versionUsersUserStatusBatchPatch(requestParameters: VersionUsersUserStatusBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionStatusesBatchPost200Response> {
        const response = await this.versionUsersUserStatusBatchPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete status
     */
    async versionUsersUserStatusStatusDeleteRaw(requestParameters: VersionUsersUserStatusStatusDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionStatusesPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserStatusStatusDelete().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserStatusStatusDelete().'
            );
        }

        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling versionUsersUserStatusStatusDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/status/{status}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters['status']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionStatusesPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Delete status
     */
    async versionUsersUserStatusStatusDelete(requestParameters: VersionUsersUserStatusStatusDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionStatusesPost201Response> {
        const response = await this.versionUsersUserStatusStatusDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get status
     */
    async versionUsersUserStatusStatusGetRaw(requestParameters: VersionUsersUserStatusStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionStatusesPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserStatusStatusGet().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserStatusStatusGet().'
            );
        }

        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling versionUsersUserStatusStatusGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/status/{status}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters['status']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionStatusesPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Get status
     */
    async versionUsersUserStatusStatusGet(requestParameters: VersionUsersUserStatusStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionStatusesPost201Response> {
        const response = await this.versionUsersUserStatusStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update status
     */
    async versionUsersUserStatusStatusPatchRaw(requestParameters: VersionUsersUserStatusStatusPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionStatusesPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserStatusStatusPatch().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserStatusStatusPatch().'
            );
        }

        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling versionUsersUserStatusStatusPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/status/{status}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters['status']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: StatusToJSON(requestParameters['status2']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionStatusesPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Update status
     */
    async versionUsersUserStatusStatusPatch(requestParameters: VersionUsersUserStatusStatusPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionStatusesPost201Response> {
        const response = await this.versionUsersUserStatusStatusPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const VersionUsersUserStatusBatchDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserStatusBatchDeleteVersionEnum = typeof VersionUsersUserStatusBatchDeleteVersionEnum[keyof typeof VersionUsersUserStatusBatchDeleteVersionEnum];
/**
 * @export
 */
export const VersionUsersUserStatusBatchPatchVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserStatusBatchPatchVersionEnum = typeof VersionUsersUserStatusBatchPatchVersionEnum[keyof typeof VersionUsersUserStatusBatchPatchVersionEnum];
/**
 * @export
 */
export const VersionUsersUserStatusStatusDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserStatusStatusDeleteVersionEnum = typeof VersionUsersUserStatusStatusDeleteVersionEnum[keyof typeof VersionUsersUserStatusStatusDeleteVersionEnum];
/**
 * @export
 */
export const VersionUsersUserStatusStatusGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserStatusStatusGetVersionEnum = typeof VersionUsersUserStatusStatusGetVersionEnum[keyof typeof VersionUsersUserStatusStatusGetVersionEnum];
/**
 * @export
 */
export const VersionUsersUserStatusStatusPatchVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserStatusStatusPatchVersionEnum = typeof VersionUsersUserStatusStatusPatchVersionEnum[keyof typeof VersionUsersUserStatusStatusPatchVersionEnum];
