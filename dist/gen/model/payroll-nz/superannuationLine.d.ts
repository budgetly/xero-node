/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export declare class SuperannuationLine {
    /**
    * Xero identifier for payroll superannucation type
    */
    'superannuationTypeID'?: string;
    /**
    * Benefit display name
    */
    'displayName'?: string;
    /**
    * The amount of the superannuation line
    */
    'amount'?: number;
    /**
    * Superannuation fixed amount
    */
    'fixedAmount'?: number;
    /**
    * Superannuation rate percentage
    */
    'percentage'?: number;
    /**
    * manual adjustment made
    */
    'manualAdjustment'?: boolean;
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
