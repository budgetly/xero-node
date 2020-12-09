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
class LeaveAccrualLine {
    static getAttributeTypeMap() {
        return LeaveAccrualLine.attributeTypeMap;
    }
}
exports.LeaveAccrualLine = LeaveAccrualLine;
LeaveAccrualLine.discriminator = undefined;
LeaveAccrualLine.attributeTypeMap = [
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    }
];
//# sourceMappingURL=leaveAccrualLine.js.map