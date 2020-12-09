export * from '././account';
export * from '././accounts';
export * from '././address';
export * from '././bankAccount';
export * from '././benefit';
export * from '././deduction';
export * from '././deductionLine';
export * from '././deductionObject';
export * from '././deductions';
export * from '././earningsLine';
export * from '././earningsOrder';
export * from '././earningsOrderObject';
export * from '././earningsOrders';
export * from '././earningsRate';
export * from '././earningsRateObject';
export * from '././earningsRates';
export * from '././earningsTemplate';
export * from '././earningsTemplateObject';
export * from '././employee';
export * from '././employeeEarningsTemplates';
export * from '././employeeLeave';
export * from '././employeeLeaveBalance';
export * from '././employeeLeaveBalances';
export * from '././employeeLeaveObject';
export * from '././employeeLeaveSetup';
export * from '././employeeLeaveSetupObject';
export * from '././employeeLeaveType';
export * from '././employeeLeaveTypeObject';
export * from '././employeeLeaveTypes';
export * from '././employeeLeaves';
export * from '././employeeObject';
export * from '././employeeOpeningBalance';
export * from '././employeeOpeningBalancesObject';
export * from '././employeePayTemplate';
export * from '././employeePayTemplateObject';
export * from '././employeePayTemplates';
export * from '././employeeStatutoryLeaveBalance';
export * from '././employeeStatutoryLeaveBalanceObject';
export * from '././employeeStatutoryLeaveSummary';
export * from '././employeeStatutoryLeavesSummaries';
export * from '././employeeStatutorySickLeave';
export * from '././employeeStatutorySickLeaveObject';
export * from '././employeeStatutorySickLeaves';
export * from '././employeeTax';
export * from '././employeeTaxObject';
export * from '././employees';
export * from '././employment';
export * from '././employmentObject';
export * from '././grossEarningsHistory';
export * from '././invalidField';
export * from '././leaveAccrualLine';
export * from '././leaveEarningsLine';
export * from '././leavePeriod';
export * from '././leavePeriods';
export * from '././leaveType';
export * from '././leaveTypeObject';
export * from '././leaveTypes';
export * from '././pagination';
export * from '././payRun';
export * from '././payRunCalendar';
export * from '././payRunCalendarObject';
export * from '././payRunCalendars';
export * from '././payRunObject';
export * from '././payRuns';
export * from '././paySlip';
export * from '././paySlipObject';
export * from '././paySlips';
export * from '././paymentLine';
export * from '././paymentMethod';
export * from '././paymentMethodObject';
export * from '././problem';
export * from '././reimbursement';
export * from '././reimbursementLine';
export * from '././reimbursementObject';
export * from '././reimbursements';
export * from '././salaryAndWage';
export * from '././salaryAndWageObject';
export * from '././salaryAndWages';
export * from '././settings';
export * from '././statutoryDeduction';
export * from '././statutoryDeductionCategory';
export * from '././statutoryDeductionLine';
export * from '././statutoryDeductionObject';
export * from '././statutoryDeductions';
export * from '././superannuationLine';
export * from '././superannuationObject';
export * from '././superannuations';
export * from '././taxCode';
export * from '././taxLine';
export * from '././taxSettings';
export * from '././timesheet';
export * from '././timesheetEarningsLine';
export * from '././timesheetLine';
export * from '././timesheetLineObject';
export * from '././timesheetObject';
export * from '././timesheets';
export * from '././trackingCategories';
export * from '././trackingCategory';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserializeDateFormats(type: string, data: any): Date;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
