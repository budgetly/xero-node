"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Report {
    static getAttributeTypeMap() {
        return Report.attributeTypeMap;
    }
}
exports.Report = Report;
Report.discriminator = undefined;
Report.attributeTypeMap = [
    {
        "name": "reportID",
        "baseName": "ReportID",
        "type": "string"
    },
    {
        "name": "reportName",
        "baseName": "ReportName",
        "type": "string"
    },
    {
        "name": "reportType",
        "baseName": "ReportType",
        "type": "Report.ReportTypeEnum"
    },
    {
        "name": "reportTitle",
        "baseName": "ReportTitle",
        "type": "string"
    },
    {
        "name": "reportDate",
        "baseName": "ReportDate",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "contacts",
        "baseName": "Contacts",
        "type": "Array<TenNinetyNineContact>"
    }
];
(function (Report) {
    let ReportTypeEnum;
    (function (ReportTypeEnum) {
        ReportTypeEnum[ReportTypeEnum["AgedPayablesByContact"] = 'AgedPayablesByContact'] = "AgedPayablesByContact";
    })(ReportTypeEnum = Report.ReportTypeEnum || (Report.ReportTypeEnum = {}));
})(Report = exports.Report || (exports.Report = {}));
//# sourceMappingURL=report.js.map