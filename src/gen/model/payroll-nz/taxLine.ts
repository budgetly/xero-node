/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TaxLine {
    /**
    * Xero identifier for payroll tax line
    */
    'taxLineID'?: string;
    /**
    * Tax line description
    */
    'description'?: string;
    /**
    * The amount of the tax line
    */
    'amount'?: number;
    /**
    * Tax type ID
    */
    'globalTaxTypeID'?: string;
    /**
    * Identifies if the tax line is a manual adjustment
    */
    'manualAdjustment'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "taxLineID",
            "baseName": "taxLineID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "globalTaxTypeID",
            "baseName": "globalTaxTypeID",
            "type": "string"
        },
        {
            "name": "manualAdjustment",
            "baseName": "manualAdjustment",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TaxLine.attributeTypeMap;
    }
}
