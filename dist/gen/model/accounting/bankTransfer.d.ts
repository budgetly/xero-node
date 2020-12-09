/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Account } from '././account';
import { ValidationError } from '././validationError';
export declare class BankTransfer {
    'fromBankAccount': Account;
    'toBankAccount': Account;
    /**
    * amount of the transaction
    */
    'amount': number;
    /**
    * The date of the Transfer YYYY-MM-DD
    */
    'date'?: string;
    /**
    * The identifier of the Bank Transfer
    */
    'bankTransferID'?: string;
    /**
    * The currency rate
    */
    'currencyRate'?: number;
    /**
    * The Bank Transaction ID for the source account
    */
    'fromBankTransactionID'?: string;
    /**
    * The Bank Transaction ID for the destination account
    */
    'toBankTransactionID'?: string;
    /**
    * Boolean to indicate if a Bank Transfer has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * UTC timestamp of creation date of bank transfer
    */
    'createdDateUTC'?: Date;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
