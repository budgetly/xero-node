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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("././amount"), exports);
__exportStar(require("././chargeType"), exports);
__exportStar(require("././currencyCode"), exports);
__exportStar(require("././modelError"), exports);
__exportStar(require("././pagination"), exports);
__exportStar(require("././project"), exports);
__exportStar(require("././projectCreateOrUpdate"), exports);
__exportStar(require("././projectPatch"), exports);
__exportStar(require("././projectStatus"), exports);
__exportStar(require("././projectUser"), exports);
__exportStar(require("././projectUsers"), exports);
__exportStar(require("././projects"), exports);
__exportStar(require("././task"), exports);
__exportStar(require("././taskCreateOrUpdate"), exports);
__exportStar(require("././tasks"), exports);
__exportStar(require("././timeEntries"), exports);
__exportStar(require("././timeEntry"), exports);
__exportStar(require("././timeEntryCreateOrUpdate"), exports);
const amount_1 = require("././amount");
const chargeType_1 = require("././chargeType");
const currencyCode_1 = require("././currencyCode");
const modelError_1 = require("././modelError");
const pagination_1 = require("././pagination");
const project_1 = require("././project");
const projectCreateOrUpdate_1 = require("././projectCreateOrUpdate");
const projectPatch_1 = require("././projectPatch");
const projectStatus_1 = require("././projectStatus");
const projectUser_1 = require("././projectUser");
const projectUsers_1 = require("././projectUsers");
const projects_1 = require("././projects");
const task_1 = require("././task");
const taskCreateOrUpdate_1 = require("././taskCreateOrUpdate");
const tasks_1 = require("././tasks");
const timeEntries_1 = require("././timeEntries");
const timeEntry_1 = require("././timeEntry");
const timeEntryCreateOrUpdate_1 = require("././timeEntryCreateOrUpdate");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "ChargeType": chargeType_1.ChargeType,
    "CurrencyCode": currencyCode_1.CurrencyCode,
    "ProjectStatus": projectStatus_1.ProjectStatus,
    "Task.StatusEnum": task_1.Task.StatusEnum,
    "TimeEntry.StatusEnum": timeEntry_1.TimeEntry.StatusEnum,
};
let typeMap = {
    "Amount": amount_1.Amount,
    "ModelError": modelError_1.ModelError,
    "Pagination": pagination_1.Pagination,
    "Project": project_1.Project,
    "ProjectCreateOrUpdate": projectCreateOrUpdate_1.ProjectCreateOrUpdate,
    "ProjectPatch": projectPatch_1.ProjectPatch,
    "ProjectUser": projectUser_1.ProjectUser,
    "ProjectUsers": projectUsers_1.ProjectUsers,
    "Projects": projects_1.Projects,
    "Task": task_1.Task,
    "TaskCreateOrUpdate": taskCreateOrUpdate_1.TaskCreateOrUpdate,
    "Tasks": tasks_1.Tasks,
    "TimeEntries": timeEntries_1.TimeEntries,
    "TimeEntry": timeEntry_1.TimeEntry,
    "TimeEntryCreateOrUpdate": timeEntryCreateOrUpdate_1.TimeEntryCreateOrUpdate,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            if (subType === 'string') {
                return transformedData.join(',');
            }
            else {
                return transformedData;
            }
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserializeDateFormats(type, data) {
        const isDate = new Date(data);
        if (isNaN(isDate.getTime())) {
            const re = /-?\d+/;
            const m = re.exec(data);
            return new Date(parseInt(m[0], 10));
        }
        else {
            return isDate;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            if (type === "string" && data.toString().substring(0, 6) === "/Date(") {
                return this.deserializeDateFormats(type, data); // For MS dates that are of type 'string'
            }
            else {
                return data;
            }
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            // Asset API returns string even for Array<Model>
            const dataFormatted = typeof data == 'string' ? JSON.parse(data) : data;
            for (let index in dataFormatted) {
                let currentData = dataFormatted[index];
                transformedData.push(ObjectSerializer.deserialize(currentData, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return this.deserializeDateFormats(type, data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map