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
 * @interface Message
 */
export interface Message {
    /**
     * Supports HTML.
     * @type {string}
     * @memberof Message
     */
    message: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Message
     */
    channels: Array<MessageChannelsEnum>;
    /**
     * An array of User IDs. Defaults to everyone if no recipients are provided.
     * @type {Array<number>}
     * @memberof Message
     */
    recipients?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    repeats?: boolean;
    /**
     * Set a future date to send the msssage at.
     * @type {Date}
     * @memberof Message
     */
    sendAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    sentAt?: Date | null;
}


/**
 * @export
 */
export const MessageChannelsEnum = {
    Broadcast: 'broadcast',
    Database: 'database',
    DiscordPrivate: 'discord_private',
    DiscordPublic: 'discord_public',
    Mail: 'mail',
    Sms: 'sms'
} as const;
export type MessageChannelsEnum = typeof MessageChannelsEnum[keyof typeof MessageChannelsEnum];


/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('channels' in value) || value['channels'] === undefined) return false;
    return true;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'channels': json['channels'],
        'recipients': json['recipients'] == null ? undefined : json['recipients'],
        'repeats': json['repeats'] == null ? undefined : json['repeats'],
        'sendAt': json['send_at'] == null ? undefined : (new Date(json['send_at'])),
        'sentAt': json['sent_at'] == null ? undefined : (new Date(json['sent_at'])),
    };
}

export function MessageToJSON(json: any): Message {
    return MessageToJSONTyped(json, false);
}

export function MessageToJSONTyped(value?: Message | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'channels': value['channels'],
        'recipients': value['recipients'],
        'repeats': value['repeats'],
        'send_at': value['sendAt'] == null ? undefined : ((value['sendAt'] as any).toISOString()),
        'sent_at': value['sentAt'] == null ? undefined : ((value['sentAt'] as any).toISOString()),
    };
}

