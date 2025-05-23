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
  RankRecord,
  VersionAnnouncementsAnnouncementGet404Response,
  VersionAnnouncementsBatchDeleteRequest,
  VersionAnnouncementsPost422Response,
  VersionMeGet401Response,
  VersionMeGet402Response,
  VersionMeGet403Response,
  VersionMeGet429Response,
  VersionMeGet503Response,
  VersionRankRecordsBatchPatchRequest,
  VersionRankRecordsBatchPost200Response,
  VersionRankRecordsBatchPostRequest,
  VersionRankRecordsGet200Response,
  VersionRankRecordsPost201Response,
} from '../models/index';
import {
    RankRecordFromJSON,
    RankRecordToJSON,
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
    VersionRankRecordsBatchPatchRequestFromJSON,
    VersionRankRecordsBatchPatchRequestToJSON,
    VersionRankRecordsBatchPost200ResponseFromJSON,
    VersionRankRecordsBatchPost200ResponseToJSON,
    VersionRankRecordsBatchPostRequestFromJSON,
    VersionRankRecordsBatchPostRequestToJSON,
    VersionRankRecordsGet200ResponseFromJSON,
    VersionRankRecordsGet200ResponseToJSON,
    VersionRankRecordsPost201ResponseFromJSON,
    VersionRankRecordsPost201ResponseToJSON,
} from '../models/index';

export interface VersionUsersUserRankRecordsAssociatePostRequest {
    version: VersionUsersUserRankRecordsAssociatePostVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsAssociatePostIncludeEnum;
}

export interface VersionUsersUserRankRecordsBatchDeleteRequest {
    version: VersionUsersUserRankRecordsBatchDeleteVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsBatchDeleteIncludeEnum;
    versionAnnouncementsBatchDeleteRequest?: VersionAnnouncementsBatchDeleteRequest;
}

export interface VersionUsersUserRankRecordsBatchPatchRequest {
    version: VersionUsersUserRankRecordsBatchPatchVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsBatchPatchIncludeEnum;
    versionRankRecordsBatchPatchRequest?: VersionRankRecordsBatchPatchRequest;
}

export interface VersionUsersUserRankRecordsBatchPostRequest {
    version: VersionUsersUserRankRecordsBatchPostVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsBatchPostIncludeEnum;
    versionRankRecordsBatchPostRequest?: VersionRankRecordsBatchPostRequest;
}

export interface VersionUsersUserRankRecordsGetRequest {
    version: VersionUsersUserRankRecordsGetVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsGetIncludeEnum;
}

export interface VersionUsersUserRankRecordsPostRequest {
    version: VersionUsersUserRankRecordsPostVersionEnum;
    user: number;
    include?: VersionUsersUserRankRecordsPostIncludeEnum;
    rankRecord?: RankRecord;
}

export interface VersionUsersUserRankRecordsRankRecordDeleteRequest {
    version: VersionUsersUserRankRecordsRankRecordDeleteVersionEnum;
    user: number;
    rankRecord: number;
    include?: VersionUsersUserRankRecordsRankRecordDeleteIncludeEnum;
}

export interface VersionUsersUserRankRecordsRankRecordDissociateDeleteRequest {
    version: VersionUsersUserRankRecordsRankRecordDissociateDeleteVersionEnum;
    user: number;
    rankRecord: number;
    include?: VersionUsersUserRankRecordsRankRecordDissociateDeleteIncludeEnum;
}

export interface VersionUsersUserRankRecordsRankRecordGetRequest {
    version: VersionUsersUserRankRecordsRankRecordGetVersionEnum;
    user: number;
    rankRecord: number;
    include?: VersionUsersUserRankRecordsRankRecordGetIncludeEnum;
}

export interface VersionUsersUserRankRecordsRankRecordPatchRequest {
    version: VersionUsersUserRankRecordsRankRecordPatchVersionEnum;
    user: number;
    rankRecord: number;
    include?: VersionUsersUserRankRecordsRankRecordPatchIncludeEnum;
    rankRecord2?: RankRecord;
}

/**
 * 
 */
export class UsersRankRecordsApi extends runtime.BaseAPI {

    /**
     * Associate rank record with user
     */
    async versionUsersUserRankRecordsAssociatePostRaw(requestParameters: VersionUsersUserRankRecordsAssociatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsAssociatePost().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsAssociatePost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/rank-records/associate`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Associate rank record with user
     */
    async versionUsersUserRankRecordsAssociatePost(requestParameters: VersionUsersUserRankRecordsAssociatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsAssociatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a batch of rank records
     */
    async versionUsersUserRankRecordsBatchDeleteRaw(requestParameters: VersionUsersUserRankRecordsBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsBatchDelete().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsBatchDelete().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

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
            path: `/{version}/users/{user}/rank-records/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: VersionAnnouncementsBatchDeleteRequestToJSON(requestParameters['versionAnnouncementsBatchDeleteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a batch of rank records
     */
    async versionUsersUserRankRecordsBatchDelete(requestParameters: VersionUsersUserRankRecordsBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsBatchPost200Response> {
        const response = await this.versionUsersUserRankRecordsBatchDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a batch of rank records
     */
    async versionUsersUserRankRecordsBatchPatchRaw(requestParameters: VersionUsersUserRankRecordsBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsBatchPatch().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsBatchPatch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

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
            path: `/{version}/users/{user}/rank-records/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: VersionRankRecordsBatchPatchRequestToJSON(requestParameters['versionRankRecordsBatchPatchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Update a batch of rank records
     */
    async versionUsersUserRankRecordsBatchPatch(requestParameters: VersionUsersUserRankRecordsBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsBatchPost200Response> {
        const response = await this.versionUsersUserRankRecordsBatchPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a batch of rank records
     */
    async versionUsersUserRankRecordsBatchPostRaw(requestParameters: VersionUsersUserRankRecordsBatchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsBatchPost().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsBatchPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

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
            path: `/{version}/users/{user}/rank-records/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VersionRankRecordsBatchPostRequestToJSON(requestParameters['versionRankRecordsBatchPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Create a batch of rank records
     */
    async versionUsersUserRankRecordsBatchPost(requestParameters: VersionUsersUserRankRecordsBatchPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsBatchPost200Response> {
        const response = await this.versionUsersUserRankRecordsBatchPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of rank records
     */
    async versionUsersUserRankRecordsGetRaw(requestParameters: VersionUsersUserRankRecordsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsGet200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsGet().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/rank-records`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of rank records
     */
    async versionUsersUserRankRecordsGet(requestParameters: VersionUsersUserRankRecordsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsGet200Response> {
        const response = await this.versionUsersUserRankRecordsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create rank record
     */
    async versionUsersUserRankRecordsPostRaw(requestParameters: VersionUsersUserRankRecordsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsPost().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

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
            path: `/{version}/users/{user}/rank-records`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RankRecordToJSON(requestParameters['rankRecord']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Create rank record
     */
    async versionUsersUserRankRecordsPost(requestParameters: VersionUsersUserRankRecordsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete rank record
     */
    async versionUsersUserRankRecordsRankRecordDeleteRaw(requestParameters: VersionUsersUserRankRecordsRankRecordDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsRankRecordDelete().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsRankRecordDelete().'
            );
        }

        if (requestParameters['rankRecord'] == null) {
            throw new runtime.RequiredError(
                'rankRecord',
                'Required parameter "rankRecord" was null or undefined when calling versionUsersUserRankRecordsRankRecordDelete().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/rank-records/{rank_record}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"rank_record"}}`, encodeURIComponent(String(requestParameters['rankRecord']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Delete rank record
     */
    async versionUsersUserRankRecordsRankRecordDelete(requestParameters: VersionUsersUserRankRecordsRankRecordDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsRankRecordDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Dissociate rank record from user
     */
    async versionUsersUserRankRecordsRankRecordDissociateDeleteRaw(requestParameters: VersionUsersUserRankRecordsRankRecordDissociateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsRankRecordDissociateDelete().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsRankRecordDissociateDelete().'
            );
        }

        if (requestParameters['rankRecord'] == null) {
            throw new runtime.RequiredError(
                'rankRecord',
                'Required parameter "rankRecord" was null or undefined when calling versionUsersUserRankRecordsRankRecordDissociateDelete().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/rank-records/{rank_record}/dissociate`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"rank_record"}}`, encodeURIComponent(String(requestParameters['rankRecord']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Dissociate rank record from user
     */
    async versionUsersUserRankRecordsRankRecordDissociateDelete(requestParameters: VersionUsersUserRankRecordsRankRecordDissociateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsRankRecordDissociateDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get rank record
     */
    async versionUsersUserRankRecordsRankRecordGetRaw(requestParameters: VersionUsersUserRankRecordsRankRecordGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsRankRecordGet().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsRankRecordGet().'
            );
        }

        if (requestParameters['rankRecord'] == null) {
            throw new runtime.RequiredError(
                'rankRecord',
                'Required parameter "rankRecord" was null or undefined when calling versionUsersUserRankRecordsRankRecordGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("ApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{version}/users/{user}/rank-records/{rank_record}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"rank_record"}}`, encodeURIComponent(String(requestParameters['rankRecord']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Get rank record
     */
    async versionUsersUserRankRecordsRankRecordGet(requestParameters: VersionUsersUserRankRecordsRankRecordGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsRankRecordGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update rank record
     */
    async versionUsersUserRankRecordsRankRecordPatchRaw(requestParameters: VersionUsersUserRankRecordsRankRecordPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRankRecordsPost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionUsersUserRankRecordsRankRecordPatch().'
            );
        }

        if (requestParameters['user'] == null) {
            throw new runtime.RequiredError(
                'user',
                'Required parameter "user" was null or undefined when calling versionUsersUserRankRecordsRankRecordPatch().'
            );
        }

        if (requestParameters['rankRecord'] == null) {
            throw new runtime.RequiredError(
                'rankRecord',
                'Required parameter "rankRecord" was null or undefined when calling versionUsersUserRankRecordsRankRecordPatch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

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
            path: `/{version}/users/{user}/rank-records/{rank_record}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters['user']))).replace(`{${"rank_record"}}`, encodeURIComponent(String(requestParameters['rankRecord']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RankRecordToJSON(requestParameters['rankRecord2']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRankRecordsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Update rank record
     */
    async versionUsersUserRankRecordsRankRecordPatch(requestParameters: VersionUsersUserRankRecordsRankRecordPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRankRecordsPost201Response> {
        const response = await this.versionUsersUserRankRecordsRankRecordPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const VersionUsersUserRankRecordsAssociatePostVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsAssociatePostVersionEnum = typeof VersionUsersUserRankRecordsAssociatePostVersionEnum[keyof typeof VersionUsersUserRankRecordsAssociatePostVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsAssociatePostIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsAssociatePostIncludeEnum = typeof VersionUsersUserRankRecordsAssociatePostIncludeEnum[keyof typeof VersionUsersUserRankRecordsAssociatePostIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsBatchDeleteVersionEnum = typeof VersionUsersUserRankRecordsBatchDeleteVersionEnum[keyof typeof VersionUsersUserRankRecordsBatchDeleteVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchDeleteIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsBatchDeleteIncludeEnum = typeof VersionUsersUserRankRecordsBatchDeleteIncludeEnum[keyof typeof VersionUsersUserRankRecordsBatchDeleteIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchPatchVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsBatchPatchVersionEnum = typeof VersionUsersUserRankRecordsBatchPatchVersionEnum[keyof typeof VersionUsersUserRankRecordsBatchPatchVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchPatchIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsBatchPatchIncludeEnum = typeof VersionUsersUserRankRecordsBatchPatchIncludeEnum[keyof typeof VersionUsersUserRankRecordsBatchPatchIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchPostVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsBatchPostVersionEnum = typeof VersionUsersUserRankRecordsBatchPostVersionEnum[keyof typeof VersionUsersUserRankRecordsBatchPostVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsBatchPostIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsBatchPostIncludeEnum = typeof VersionUsersUserRankRecordsBatchPostIncludeEnum[keyof typeof VersionUsersUserRankRecordsBatchPostIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsGetVersionEnum = typeof VersionUsersUserRankRecordsGetVersionEnum[keyof typeof VersionUsersUserRankRecordsGetVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsGetIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsGetIncludeEnum = typeof VersionUsersUserRankRecordsGetIncludeEnum[keyof typeof VersionUsersUserRankRecordsGetIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsPostVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsPostVersionEnum = typeof VersionUsersUserRankRecordsPostVersionEnum[keyof typeof VersionUsersUserRankRecordsPostVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsPostIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsPostIncludeEnum = typeof VersionUsersUserRankRecordsPostIncludeEnum[keyof typeof VersionUsersUserRankRecordsPostIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsRankRecordDeleteVersionEnum = typeof VersionUsersUserRankRecordsRankRecordDeleteVersionEnum[keyof typeof VersionUsersUserRankRecordsRankRecordDeleteVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordDeleteIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsRankRecordDeleteIncludeEnum = typeof VersionUsersUserRankRecordsRankRecordDeleteIncludeEnum[keyof typeof VersionUsersUserRankRecordsRankRecordDeleteIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordDissociateDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsRankRecordDissociateDeleteVersionEnum = typeof VersionUsersUserRankRecordsRankRecordDissociateDeleteVersionEnum[keyof typeof VersionUsersUserRankRecordsRankRecordDissociateDeleteVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordDissociateDeleteIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsRankRecordDissociateDeleteIncludeEnum = typeof VersionUsersUserRankRecordsRankRecordDissociateDeleteIncludeEnum[keyof typeof VersionUsersUserRankRecordsRankRecordDissociateDeleteIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsRankRecordGetVersionEnum = typeof VersionUsersUserRankRecordsRankRecordGetVersionEnum[keyof typeof VersionUsersUserRankRecordsRankRecordGetVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordGetIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsRankRecordGetIncludeEnum = typeof VersionUsersUserRankRecordsRankRecordGetIncludeEnum[keyof typeof VersionUsersUserRankRecordsRankRecordGetIncludeEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordPatchVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionUsersUserRankRecordsRankRecordPatchVersionEnum = typeof VersionUsersUserRankRecordsRankRecordPatchVersionEnum[keyof typeof VersionUsersUserRankRecordsRankRecordPatchVersionEnum];
/**
 * @export
 */
export const VersionUsersUserRankRecordsRankRecordPatchIncludeEnum = {
    Attachments: 'attachments',
    Author: 'author',
    Author2: 'author.*',
    Comments: 'comments',
    Comments2: 'comments.*',
    Document: 'document',
    Rank: 'rank',
    RankImage: 'rank.image'
} as const;
export type VersionUsersUserRankRecordsRankRecordPatchIncludeEnum = typeof VersionUsersUserRankRecordsRankRecordPatchIncludeEnum[keyof typeof VersionUsersUserRankRecordsRankRecordPatchIncludeEnum];
