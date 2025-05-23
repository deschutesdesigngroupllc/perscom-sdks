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
  VersionAnnouncementsAnnouncementGet404Response,
  VersionMeGet401Response,
  VersionMeGet402Response,
  VersionMeGet403Response,
  VersionMeGet429Response,
  VersionMeGet503Response,
  VersionRosterGet200Response,
  VersionRosterRosterGet200Response,
} from '../models/index';
import {
    VersionAnnouncementsAnnouncementGet404ResponseFromJSON,
    VersionAnnouncementsAnnouncementGet404ResponseToJSON,
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
    VersionRosterGet200ResponseFromJSON,
    VersionRosterGet200ResponseToJSON,
    VersionRosterRosterGet200ResponseFromJSON,
    VersionRosterRosterGet200ResponseToJSON,
} from '../models/index';

export interface VersionRosterGetRequest {
    version: VersionRosterGetVersionEnum;
    include?: VersionRosterGetIncludeEnum;
}

export interface VersionRosterRosterGetRequest {
    version: VersionRosterRosterGetVersionEnum;
    roster: number;
    include?: VersionRosterRosterGetIncludeEnum;
}

/**
 * 
 */
export class RosterApi extends runtime.BaseAPI {

    /**
     * The roster endpoint returns a list of groups with their associated units and users already included. The personnel are then sorted by rank, specialty, position and name to assist with creating a roster-like UI.
     * List by groups
     */
    async versionRosterGetRaw(requestParameters: VersionRosterGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRosterGet200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionRosterGet().'
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
            path: `/{version}/roster`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRosterGet200ResponseFromJSON(jsonValue));
    }

    /**
     * The roster endpoint returns a list of groups with their associated units and users already included. The personnel are then sorted by rank, specialty, position and name to assist with creating a roster-like UI.
     * List by groups
     */
    async versionRosterGet(requestParameters: VersionRosterGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRosterGet200Response> {
        const response = await this.versionRosterGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List by one group
     */
    async versionRosterRosterGetRaw(requestParameters: VersionRosterRosterGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionRosterRosterGet200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionRosterRosterGet().'
            );
        }

        if (requestParameters['roster'] == null) {
            throw new runtime.RequiredError(
                'roster',
                'Required parameter "roster" was null or undefined when calling versionRosterRosterGet().'
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
            path: `/{version}/roster/{roster}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"roster"}}`, encodeURIComponent(String(requestParameters['roster']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionRosterRosterGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List by one group
     */
    async versionRosterRosterGet(requestParameters: VersionRosterRosterGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionRosterRosterGet200Response> {
        const response = await this.versionRosterRosterGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const VersionRosterGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionRosterGetVersionEnum = typeof VersionRosterGetVersionEnum[keyof typeof VersionRosterGetVersionEnum];
/**
 * @export
 */
export const VersionRosterGetIncludeEnum = {
    Image: 'image',
    Units: 'units',
    UnitsImage: 'units.image',
    UnitsUsers: 'units.users',
    UnitsUsersPosition: 'units.users.position',
    UnitsUsersRank: 'units.users.rank',
    UnitsUsersRankImage: 'units.users.rank.image',
    UnitsUsersSpecialty: 'units.users.specialty',
    UnitsUsersStatus: 'units.users.status',
    Units2: 'units.*'
} as const;
export type VersionRosterGetIncludeEnum = typeof VersionRosterGetIncludeEnum[keyof typeof VersionRosterGetIncludeEnum];
/**
 * @export
 */
export const VersionRosterRosterGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionRosterRosterGetVersionEnum = typeof VersionRosterRosterGetVersionEnum[keyof typeof VersionRosterRosterGetVersionEnum];
/**
 * @export
 */
export const VersionRosterRosterGetIncludeEnum = {
    Image: 'image',
    Units: 'units',
    UnitsImage: 'units.image',
    UnitsUsers: 'units.users',
    UnitsUsersPosition: 'units.users.position',
    UnitsUsersRank: 'units.users.rank',
    UnitsUsersRankImage: 'units.users.rank.image',
    UnitsUsersSpecialty: 'units.users.specialty',
    UnitsUsersStatus: 'units.users.status',
    Units2: 'units.*'
} as const;
export type VersionRosterRosterGetIncludeEnum = typeof VersionRosterRosterGetIncludeEnum[keyof typeof VersionRosterRosterGetIncludeEnum];
