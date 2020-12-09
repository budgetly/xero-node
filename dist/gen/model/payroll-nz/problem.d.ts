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
import { InvalidField } from '././invalidField';
/**
* The object returned for a bad request
*/
export declare class Problem {
    /**
    * The type of error format
    */
    'type'?: string;
    /**
    * The type of the error
    */
    'title'?: string;
    /**
    * The error status code
    */
    'status'?: string;
    /**
    * A description of the error
    */
    'detail'?: string;
    'instance'?: string;
    'invalidFields'?: Array<InvalidField>;
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
