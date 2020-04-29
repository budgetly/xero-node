/**
 * Bank Feeds API
 * This specifing endpoints Xero Bank feeds API
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.
*/
export enum CurrencyCode {
    AED = <any> 'AED',
    AFN = <any> 'AFN',
    ALL = <any> 'ALL',
    AMD = <any> 'AMD',
    ANG = <any> 'ANG',
    AOA = <any> 'AOA',
    ARS = <any> 'ARS',
    AUD = <any> 'AUD',
    AWG = <any> 'AWG',
    AZN = <any> 'AZN',
    BAM = <any> 'BAM',
    BBD = <any> 'BBD',
    BDT = <any> 'BDT',
    BGN = <any> 'BGN',
    BHD = <any> 'BHD',
    BIF = <any> 'BIF',
    BMD = <any> 'BMD',
    BND = <any> 'BND',
    BOB = <any> 'BOB',
    BRL = <any> 'BRL',
    BSD = <any> 'BSD',
    BTN = <any> 'BTN',
    BWP = <any> 'BWP',
    BYN = <any> 'BYN',
    BZD = <any> 'BZD',
    CAD = <any> 'CAD',
    CDF = <any> 'CDF',
    CHF = <any> 'CHF',
    CLP = <any> 'CLP',
    CNY = <any> 'CNY',
    COP = <any> 'COP',
    CRC = <any> 'CRC',
    CUC = <any> 'CUC',
    CUP = <any> 'CUP',
    CVE = <any> 'CVE',
    CZK = <any> 'CZK',
    DJF = <any> 'DJF',
    DKK = <any> 'DKK',
    DOP = <any> 'DOP',
    DZD = <any> 'DZD',
    EGP = <any> 'EGP',
    ERN = <any> 'ERN',
    ETB = <any> 'ETB',
    EUR = <any> 'EUR',
    FJD = <any> 'FJD',
    FKP = <any> 'FKP',
    GBP = <any> 'GBP',
    GEL = <any> 'GEL',
    GGP = <any> 'GGP',
    GHS = <any> 'GHS',
    GIP = <any> 'GIP',
    GMD = <any> 'GMD',
    GNF = <any> 'GNF',
    GTQ = <any> 'GTQ',
    GYD = <any> 'GYD',
    HKD = <any> 'HKD',
    HNL = <any> 'HNL',
    HRK = <any> 'HRK',
    HTG = <any> 'HTG',
    HUF = <any> 'HUF',
    IDR = <any> 'IDR',
    ILS = <any> 'ILS',
    IMP = <any> 'IMP',
    INR = <any> 'INR',
    IQD = <any> 'IQD',
    IRR = <any> 'IRR',
    ISK = <any> 'ISK',
    JEP = <any> 'JEP',
    JMD = <any> 'JMD',
    JOD = <any> 'JOD',
    JPY = <any> 'JPY',
    KES = <any> 'KES',
    KGS = <any> 'KGS',
    KHR = <any> 'KHR',
    KMF = <any> 'KMF',
    KPW = <any> 'KPW',
    KRW = <any> 'KRW',
    KWD = <any> 'KWD',
    KYD = <any> 'KYD',
    KZT = <any> 'KZT',
    LAK = <any> 'LAK',
    LBP = <any> 'LBP',
    LKR = <any> 'LKR',
    LRD = <any> 'LRD',
    LSL = <any> 'LSL',
    LYD = <any> 'LYD',
    MAD = <any> 'MAD',
    MDL = <any> 'MDL',
    MGA = <any> 'MGA',
    MKD = <any> 'MKD',
    MMK = <any> 'MMK',
    MNT = <any> 'MNT',
    MOP = <any> 'MOP',
    MRU = <any> 'MRU',
    MUR = <any> 'MUR',
    MVR = <any> 'MVR',
    MWK = <any> 'MWK',
    MXN = <any> 'MXN',
    MYR = <any> 'MYR',
    MZN = <any> 'MZN',
    NAD = <any> 'NAD',
    NGN = <any> 'NGN',
    NIO = <any> 'NIO',
    NOK = <any> 'NOK',
    NPR = <any> 'NPR',
    NZD = <any> 'NZD',
    OMR = <any> 'OMR',
    PAB = <any> 'PAB',
    PEN = <any> 'PEN',
    PGK = <any> 'PGK',
    PHP = <any> 'PHP',
    PKR = <any> 'PKR',
    PLN = <any> 'PLN',
    PYG = <any> 'PYG',
    QAR = <any> 'QAR',
    RON = <any> 'RON',
    RSD = <any> 'RSD',
    RUB = <any> 'RUB',
    RWF = <any> 'RWF',
    SAR = <any> 'SAR',
    SBD = <any> 'SBD',
    SCR = <any> 'SCR',
    SDG = <any> 'SDG',
    SEK = <any> 'SEK',
    SGD = <any> 'SGD',
    SHP = <any> 'SHP',
    SLL = <any> 'SLL',
    SOS = <any> 'SOS',
    SPL = <any> 'SPL',
    SRD = <any> 'SRD',
    STN = <any> 'STN',
    SVC = <any> 'SVC',
    SYP = <any> 'SYP',
    SZL = <any> 'SZL',
    THB = <any> 'THB',
    TJS = <any> 'TJS',
    TMT = <any> 'TMT',
    TND = <any> 'TND',
    TOP = <any> 'TOP',
    TRY = <any> 'TRY',
    TTD = <any> 'TTD',
    TVD = <any> 'TVD',
    TWD = <any> 'TWD',
    TZS = <any> 'TZS',
    UAH = <any> 'UAH',
    UGX = <any> 'UGX',
    USD = <any> 'USD',
    UYU = <any> 'UYU',
    UZS = <any> 'UZS',
    VEF = <any> 'VEF',
    VND = <any> 'VND',
    VUV = <any> 'VUV',
    WST = <any> 'WST',
    XAF = <any> 'XAF',
    XCD = <any> 'XCD',
    XDR = <any> 'XDR',
    XOF = <any> 'XOF',
    XPF = <any> 'XPF',
    YER = <any> 'YER',
    ZAR = <any> 'ZAR',
    ZMW = <any> 'ZMW',
    ZMK = <any> 'ZMK',
    ZWD = <any> 'ZWD',
    Empty = <any> ''
}
