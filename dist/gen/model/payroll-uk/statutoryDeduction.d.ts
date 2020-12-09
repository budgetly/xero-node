/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { StatutoryDeductionCategory } from '././statutoryDeductionCategory';
export declare class StatutoryDeduction {
    /**
    * The Xero identifier for earnings order
    */
    'id'?: string;
    /**
    * Name of the earnings order
    */
    'name'?: string;
    'statutoryDeductionCategory'?: StatutoryDeductionCategory;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId'?: string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
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
