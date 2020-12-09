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
class BenefitObject {
    static getAttributeTypeMap() {
        return BenefitObject.attributeTypeMap;
    }
}
exports.BenefitObject = BenefitObject;
BenefitObject.discriminator = undefined;
BenefitObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "benefit",
        "baseName": "benefit",
        "type": "Benefit"
    }
];
//# sourceMappingURL=benefitObject.js.map