"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = void 0;
__exportStar(require("./accountingApi"), exports);
__exportStar(require("./assetApi"), exports);
__exportStar(require("./projectApi"), exports);
__exportStar(require("./filesApi"), exports);
__exportStar(require("./payrollAUApi"), exports);
__exportStar(require("./bankfeedsApi"), exports);
__exportStar(require("./payrollUKApi"), exports);
__exportStar(require("./payrollNZApi"), exports);
const accountingApi_1 = require("./accountingApi");
const assetApi_1 = require("./assetApi");
const filesApi_1 = require("./filesApi");
const projectApi_1 = require("./projectApi");
const payrollAUApi_1 = require("./payrollAUApi");
const bankfeedsApi_1 = require("./bankfeedsApi");
const payrollUKApi_1 = require("./payrollUKApi");
const payrollNZApi_1 = require("./payrollNZApi");
exports.APIS = [accountingApi_1.AccountingApi, assetApi_1.AssetApi, filesApi_1.FilesApi, projectApi_1.ProjectApi, payrollAUApi_1.PayrollAuApi, bankfeedsApi_1.BankFeedsApi, payrollUKApi_1.PayrollUkApi, payrollNZApi_1.PayrollNzApi];
//# sourceMappingURL=apis.js.map