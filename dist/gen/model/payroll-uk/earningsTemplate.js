"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class EarningsTemplate {
    static getAttributeTypeMap() {
        return EarningsTemplate.attributeTypeMap;
    }
}
exports.EarningsTemplate = EarningsTemplate;
EarningsTemplate.discriminator = undefined;
EarningsTemplate.attributeTypeMap = [
    {
        "name": "payTemplateEarningID",
        "baseName": "payTemplateEarningID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=earningsTemplate.js.map