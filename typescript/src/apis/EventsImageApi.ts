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
  Image,
  VersionAnnouncementsAnnouncementGet404Response,
  VersionAnnouncementsBatchDeleteRequest,
  VersionAnnouncementsPost422Response,
  VersionAwardsAwardImagePost201Response,
  VersionEventsEventImageBatchPatchRequest,
  VersionEventsEventImageBatchPost200Response,
  VersionEventsEventImageBatchPostRequest,
  VersionEventsEventImageGet200Response,
  VersionMeGet401Response,
  VersionMeGet402Response,
  VersionMeGet403Response,
  VersionMeGet429Response,
  VersionMeGet503Response,
} from '../models/index';
import {
    ImageFromJSON,
    ImageToJSON,
    VersionAnnouncementsAnnouncementGet404ResponseFromJSON,
    VersionAnnouncementsAnnouncementGet404ResponseToJSON,
    VersionAnnouncementsBatchDeleteRequestFromJSON,
    VersionAnnouncementsBatchDeleteRequestToJSON,
    VersionAnnouncementsPost422ResponseFromJSON,
    VersionAnnouncementsPost422ResponseToJSON,
    VersionAwardsAwardImagePost201ResponseFromJSON,
    VersionAwardsAwardImagePost201ResponseToJSON,
    VersionEventsEventImageBatchPatchRequestFromJSON,
    VersionEventsEventImageBatchPatchRequestToJSON,
    VersionEventsEventImageBatchPost200ResponseFromJSON,
    VersionEventsEventImageBatchPost200ResponseToJSON,
    VersionEventsEventImageBatchPostRequestFromJSON,
    VersionEventsEventImageBatchPostRequestToJSON,
    VersionEventsEventImageGet200ResponseFromJSON,
    VersionEventsEventImageGet200ResponseToJSON,
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
} from '../models/index';

export interface VersionEventsEventImageAssociatePostRequest {
    version: VersionEventsEventImageAssociatePostVersionEnum;
    event: number;
}

export interface VersionEventsEventImageBatchDeleteRequest {
    version: VersionEventsEventImageBatchDeleteVersionEnum;
    event: number;
    versionAnnouncementsBatchDeleteRequest?: VersionAnnouncementsBatchDeleteRequest;
}

export interface VersionEventsEventImageBatchPatchOperationRequest {
    version: VersionEventsEventImageBatchPatchOperationVersionEnum;
    event: number;
    versionEventsEventImageBatchPatchRequest?: VersionEventsEventImageBatchPatchRequest;
}

export interface VersionEventsEventImageBatchPostOperationRequest {
    version: VersionEventsEventImageBatchPostOperationVersionEnum;
    event: number;
    versionEventsEventImageBatchPostRequest?: VersionEventsEventImageBatchPostRequest;
}

export interface VersionEventsEventImageGetRequest {
    version: VersionEventsEventImageGetVersionEnum;
    event: number;
}

export interface VersionEventsEventImageImageDeleteRequest {
    version: VersionEventsEventImageImageDeleteVersionEnum;
    event: number;
    image: number;
}

export interface VersionEventsEventImageImageDissociateDeleteRequest {
    version: VersionEventsEventImageImageDissociateDeleteVersionEnum;
    event: number;
    image: number;
}

export interface VersionEventsEventImageImageGetRequest {
    version: VersionEventsEventImageImageGetVersionEnum;
    event: number;
    image: number;
}

export interface VersionEventsEventImageImagePatchRequest {
    version: VersionEventsEventImageImagePatchVersionEnum;
    event: number;
    image: number;
    image2?: Omit<Image, 'filename'|'path'|'image_url'>;
}

export interface VersionEventsEventImagePostRequest {
    version: VersionEventsEventImagePostVersionEnum;
    event: number;
    image?: Omit<Image, 'filename'|'path'|'image_url'>;
}

/**
 * 
 */
export class EventsImageApi extends runtime.BaseAPI {

    /**
     * Associate image with event
     */
    async versionEventsEventImageAssociatePostRaw(requestParameters: VersionEventsEventImageAssociatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageAssociatePost().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageAssociatePost().'
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
            path: `/{version}/events/{event}/image/associate`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Associate image with event
     */
    async versionEventsEventImageAssociatePost(requestParameters: VersionEventsEventImageAssociatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImageAssociatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a batch of images
     */
    async versionEventsEventImageBatchDeleteRaw(requestParameters: VersionEventsEventImageBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionEventsEventImageBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageBatchDelete().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageBatchDelete().'
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
            path: `/{version}/events/{event}/image/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: VersionAnnouncementsBatchDeleteRequestToJSON(requestParameters['versionAnnouncementsBatchDeleteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionEventsEventImageBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete a batch of images
     */
    async versionEventsEventImageBatchDelete(requestParameters: VersionEventsEventImageBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionEventsEventImageBatchPost200Response> {
        const response = await this.versionEventsEventImageBatchDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a batch of images
     */
    async versionEventsEventImageBatchPatchRaw(requestParameters: VersionEventsEventImageBatchPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionEventsEventImageBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageBatchPatch().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageBatchPatch().'
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
            path: `/{version}/events/{event}/image/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: VersionEventsEventImageBatchPatchRequestToJSON(requestParameters['versionEventsEventImageBatchPatchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionEventsEventImageBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Update a batch of images
     */
    async versionEventsEventImageBatchPatch(requestParameters: VersionEventsEventImageBatchPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionEventsEventImageBatchPost200Response> {
        const response = await this.versionEventsEventImageBatchPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a batch of images
     */
    async versionEventsEventImageBatchPostRaw(requestParameters: VersionEventsEventImageBatchPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionEventsEventImageBatchPost200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageBatchPost().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageBatchPost().'
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
            path: `/{version}/events/{event}/image/batch`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VersionEventsEventImageBatchPostRequestToJSON(requestParameters['versionEventsEventImageBatchPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionEventsEventImageBatchPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Create a batch of images
     */
    async versionEventsEventImageBatchPost(requestParameters: VersionEventsEventImageBatchPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionEventsEventImageBatchPost200Response> {
        const response = await this.versionEventsEventImageBatchPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of images
     */
    async versionEventsEventImageGetRaw(requestParameters: VersionEventsEventImageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionEventsEventImageGet200Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageGet().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageGet().'
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
            path: `/{version}/events/{event}/image`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionEventsEventImageGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of images
     */
    async versionEventsEventImageGet(requestParameters: VersionEventsEventImageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionEventsEventImageGet200Response> {
        const response = await this.versionEventsEventImageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete image
     */
    async versionEventsEventImageImageDeleteRaw(requestParameters: VersionEventsEventImageImageDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageImageDelete().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageImageDelete().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling versionEventsEventImageImageDelete().'
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
            path: `/{version}/events/{event}/image/{image}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))).replace(`{${"image"}}`, encodeURIComponent(String(requestParameters['image']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Delete image
     */
    async versionEventsEventImageImageDelete(requestParameters: VersionEventsEventImageImageDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImageImageDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Dissociate image from event
     */
    async versionEventsEventImageImageDissociateDeleteRaw(requestParameters: VersionEventsEventImageImageDissociateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageImageDissociateDelete().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageImageDissociateDelete().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling versionEventsEventImageImageDissociateDelete().'
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
            path: `/{version}/events/{event}/image/{image}/dissociate`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))).replace(`{${"image"}}`, encodeURIComponent(String(requestParameters['image']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Dissociate image from event
     */
    async versionEventsEventImageImageDissociateDelete(requestParameters: VersionEventsEventImageImageDissociateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImageImageDissociateDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get image
     */
    async versionEventsEventImageImageGetRaw(requestParameters: VersionEventsEventImageImageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageImageGet().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageImageGet().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling versionEventsEventImageImageGet().'
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
            path: `/{version}/events/{event}/image/{image}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))).replace(`{${"image"}}`, encodeURIComponent(String(requestParameters['image']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Get image
     */
    async versionEventsEventImageImageGet(requestParameters: VersionEventsEventImageImageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImageImageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update image
     */
    async versionEventsEventImageImagePatchRaw(requestParameters: VersionEventsEventImageImagePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImageImagePatch().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImageImagePatch().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling versionEventsEventImageImagePatch().'
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
            path: `/{version}/events/{event}/image/{image}`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))).replace(`{${"image"}}`, encodeURIComponent(String(requestParameters['image']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ImageToJSON(requestParameters['image2']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Update image
     */
    async versionEventsEventImageImagePatch(requestParameters: VersionEventsEventImageImagePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImageImagePatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create image
     */
    async versionEventsEventImagePostRaw(requestParameters: VersionEventsEventImagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionAwardsAwardImagePost201Response>> {
        if (requestParameters['version'] == null) {
            throw new runtime.RequiredError(
                'version',
                'Required parameter "version" was null or undefined when calling versionEventsEventImagePost().'
            );
        }

        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling versionEventsEventImagePost().'
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
            path: `/{version}/events/{event}/image`.replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"event"}}`, encodeURIComponent(String(requestParameters['event']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImageToJSON(requestParameters['image']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionAwardsAwardImagePost201ResponseFromJSON(jsonValue));
    }

    /**
     * Create image
     */
    async versionEventsEventImagePost(requestParameters: VersionEventsEventImagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionAwardsAwardImagePost201Response> {
        const response = await this.versionEventsEventImagePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const VersionEventsEventImageAssociatePostVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageAssociatePostVersionEnum = typeof VersionEventsEventImageAssociatePostVersionEnum[keyof typeof VersionEventsEventImageAssociatePostVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageBatchDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageBatchDeleteVersionEnum = typeof VersionEventsEventImageBatchDeleteVersionEnum[keyof typeof VersionEventsEventImageBatchDeleteVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageBatchPatchOperationVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageBatchPatchOperationVersionEnum = typeof VersionEventsEventImageBatchPatchOperationVersionEnum[keyof typeof VersionEventsEventImageBatchPatchOperationVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageBatchPostOperationVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageBatchPostOperationVersionEnum = typeof VersionEventsEventImageBatchPostOperationVersionEnum[keyof typeof VersionEventsEventImageBatchPostOperationVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageGetVersionEnum = typeof VersionEventsEventImageGetVersionEnum[keyof typeof VersionEventsEventImageGetVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageImageDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageImageDeleteVersionEnum = typeof VersionEventsEventImageImageDeleteVersionEnum[keyof typeof VersionEventsEventImageImageDeleteVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageImageDissociateDeleteVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageImageDissociateDeleteVersionEnum = typeof VersionEventsEventImageImageDissociateDeleteVersionEnum[keyof typeof VersionEventsEventImageImageDissociateDeleteVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageImageGetVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageImageGetVersionEnum = typeof VersionEventsEventImageImageGetVersionEnum[keyof typeof VersionEventsEventImageImageGetVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImageImagePatchVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImageImagePatchVersionEnum = typeof VersionEventsEventImageImagePatchVersionEnum[keyof typeof VersionEventsEventImageImagePatchVersionEnum];
/**
 * @export
 */
export const VersionEventsEventImagePostVersionEnum = {
    V1: 'v1',
    V2: 'v2'
} as const;
export type VersionEventsEventImagePostVersionEnum = typeof VersionEventsEventImagePostVersionEnum[keyof typeof VersionEventsEventImagePostVersionEnum];
