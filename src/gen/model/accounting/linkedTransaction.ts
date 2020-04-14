/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.9
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidationError } from '././validationError';

export class LinkedTransaction {
    /**
    * Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
    */
    'sourceTransactionID'?: string;
    /**
    * The line item identifier from the source transaction.
    */
    'sourceLineItemID'?: string;
    /**
    * Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
    */
    'contactID'?: string;
    /**
    * Filter by the TargetTransactionID. Get all the linked transactions  allocated to a particular ACCREC invoice
    */
    'targetTransactionID'?: string;
    /**
    * The line item identifier from the target transaction. It is possible  to link multiple billable expenses to the same TargetLineItemID.
    */
    'targetLineItemID'?: string;
    /**
    * The Xero identifier for an Linked Transaction e.g./LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'linkedTransactionID'?: string;
    /**
    * Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
    */
    'status'?: LinkedTransaction.StatusEnum;
    /**
    * This will always be BILLABLEEXPENSE. More types may be added in future.
    */
    'type'?: LinkedTransaction.TypeEnum;
    /**
    * The last modified date in UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction.
    */
    'sourceTransactionTypeCode'?: LinkedTransaction.SourceTransactionTypeCodeEnum;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sourceTransactionID",
            "baseName": "SourceTransactionID",
            "type": "string"
        },
        {
            "name": "sourceLineItemID",
            "baseName": "SourceLineItemID",
            "type": "string"
        },
        {
            "name": "contactID",
            "baseName": "ContactID",
            "type": "string"
        },
        {
            "name": "targetTransactionID",
            "baseName": "TargetTransactionID",
            "type": "string"
        },
        {
            "name": "targetLineItemID",
            "baseName": "TargetLineItemID",
            "type": "string"
        },
        {
            "name": "linkedTransactionID",
            "baseName": "LinkedTransactionID",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "LinkedTransaction.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "LinkedTransaction.TypeEnum"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "sourceTransactionTypeCode",
            "baseName": "SourceTransactionTypeCode",
            "type": "LinkedTransaction.SourceTransactionTypeCodeEnum"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return LinkedTransaction.attributeTypeMap;
    }
}

export namespace LinkedTransaction {
    export enum StatusEnum {
        APPROVED = <any> 'APPROVED',
        DRAFT = <any> 'DRAFT',
        ONDRAFT = <any> 'ONDRAFT',
        BILLED = <any> 'BILLED',
        VOIDED = <any> 'VOIDED'
    }
    export enum TypeEnum {
        BILLABLEEXPENSE = <any> 'BILLABLEEXPENSE'
    }
    export enum SourceTransactionTypeCodeEnum {
        ACCPAY = <any> 'ACCPAY',
        SPEND = <any> 'SPEND'
    }
}
