/**
 * Bank Feeds API
 * This specifing endpoints Xero Bank feeds API
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
*/
export class ModelError {
    /**
    * Human readable high level error description.
    */
    'title'?: string;
    /**
    * The numeric HTTP Status Code, e.g. 404
    */
    'status'?: number;
    /**
    * Human readable detailed error description.
    */
    'detail'?: string;
    /**
    * Identifies the type of error.
    */
    'type'?: ModelError.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ModelError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

export namespace ModelError {
    export enum TypeEnum {
        InvalidRequest = <any> 'invalid-request',
        InvalidApplication = <any> 'invalid-application',
        InvalidFeedConnection = <any> 'invalid-feed-connection',
        DuplicateStatement = <any> 'duplicate-statement',
        InvalidEndBalance = <any> 'invalid-end-balance',
        InvalidStartAndEndDate = <any> 'invalid-start-and-end-date',
        InvalidStartDate = <any> 'invalid-start-date',
        InternalError = <any> 'internal-error',
        FeedAlreadyConnectedInCurrentOrganisation = <any> 'feed-already-connected-in-current-organisation'
    }
}
