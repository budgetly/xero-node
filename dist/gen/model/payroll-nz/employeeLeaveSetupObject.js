"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeLeaveSetupObject {
    static getAttributeTypeMap() {
        return EmployeeLeaveSetupObject.attributeTypeMap;
    }
}
exports.EmployeeLeaveSetupObject = EmployeeLeaveSetupObject;
EmployeeLeaveSetupObject.discriminator = undefined;
EmployeeLeaveSetupObject.attributeTypeMap = [
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
        "name": "leaveSetup",
        "baseName": "leaveSetup",
        "type": "EmployeeLeaveSetup"
    }
];
//# sourceMappingURL=employeeLeaveSetupObject.js.map