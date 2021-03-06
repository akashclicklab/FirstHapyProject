/**
 * Created by harekam on 26/08/15.
 */

var BOOKING_STATUS = {
    PENDING: 'PENDING',
    CANCELED: 'CANCELED',
    REJECTED: 'REJECTED',
    ACCEPTED: 'ACCEPTED',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    EXPENSES_ADDED: 'EXPENSES_ADDED'
};


var PRICING_UNIT = {
    PER_HOUR: 'PER_HOUR',
    FLAT: 'FLAT',
    PER_SQ_FT: 'PER_SQ_FT',
    PER_PIECE: 'PER_PIECE',
    PER_PT: 'PER_PT',
    PER_POINT: 'PER_POINT',
    PER_CHANNEL: 'PER_CHANNEL',
    PER_FT: 'PER_FT',
    PERCENTAGE: 'PERCENTAGE'
};

var PAYMENT_STATUS = {
    PENDING: 'PENDING',
    PAID: 'PAID'
};

var STATUS = {
    ACTIVATE: 'ACTIVATE',
    DEACTIVATE: 'DEACTIVATE'
};

var TRANSACTION_STATUS = {
    PENDING: 'PENDING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    CANCELED: 'CANCELED'
};
var DEVICES = {
    ANDROID: 'ANDROID',
    IOS: 'IOS'
};
var SOCIAL = {
    FACEBOOK: 'FACEBOOK',
    GOOGLE_PLUS: 'GOOGLE_PLUS',
    TWITTER: 'TWITTER'

};

var CALL_REQUEST = {
    PENDING: 'PENDING',
    ON_CALL: 'ON_CALL',
    END_CALL: 'END_CALL'

};


var USER_TYPE = {
    CUSTOMER: "CUSTOMER",
    SERVICE_PROVIDER: "SERVICE_PROVIDER",
    COMMUNICATOR: 'COMMUNICATOR',
    ADMIN: 'ADMIN'
};
var STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    DO_NOT_PROCESS: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_FAILURE: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ALREADY_EXISTS_CONFLICT: 409,
    UNSUPPORTED_MEDIA_TYPE: 415,
    SERVER_ERROR: 500
};
var TIME_UNITS = {
    MONTHS: 'months',
    HOURS: 'hours',
    MINUTES: 'minutes',
    SECONDS: 'seconds',
    WEEKS: 'weeks',
    DAYS: 'days'
};
var SCREENS = {
    BOOKING: 'BOOKING',
    CHAT: 'CHAT'
};
var SORT_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
var SOCKET_EVENTS = {
    'NEW_MESSAGE': 'new message',
    'ERROR': 'fatal error',
    'SEND_MESSAGE': 'send message',
    'NEW_USER_ASSIGNED': 'new user',
    'DISCONNECT': 'disconnect',
    'UNAUTHORIZED': 'unauthorized',
    'AUTHENTICATION': 'authentication',
    'AUTHENTICATED': 'authenticated',
    'CONNECTION': 'connection',
    'GET_CURRENT_LOCATION': 'get current location',
    'SET_CURRENT_LOCATION': 'set current location',
    'FETCH_CURRENT_LOCATION': 'fetch current location',
    'SEND_CURRENT_LOCATION': 'send current location',
    'CONNECT_WITH_CUSTOMER': 'connect customer',
    'REFRESH_LIST': 'refresh list',
    'FILE_UPLOAD': 'file upload'
};
var PRIORITY = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH'
};
var DATE_FORMAT = 'DD-MM-YYYY';
var TIMESTAMP_FORMAT = 'DD-MM-YYYY HH:mm';
var MAX_DISTANCE = 10 * 1000; //10 km distance in metres
var CAP_BEFORE_TIME = -4;
var CAP_AFTER_TIME = 4;
var READABLE_DATETIME_FORMAT = "dddd, MMMM Do YYYY, hh:mm A";
var TIMEZONE_INDIA = "Asia/Kolkata";
var JAVASCRIPT_TIMESTAMP_FORMAT = 'YYYY/MM/DD HH:mm';


module.exports = {
    DEVICES: DEVICES,
    TIME_UNITS: TIME_UNITS,
    DATE_FORMAT: DATE_FORMAT,
    TIMESTAMP_FORMAT: TIMESTAMP_FORMAT,
    PRICING_UNIT: PRICING_UNIT,
    USER_TYPE: USER_TYPE,
    SOCIAL: SOCIAL,
    SCREENS: SCREENS,
    PAYMENT_STATUS: PAYMENT_STATUS,
    MAX_DISTANCE: MAX_DISTANCE,
    BOOKING_STATUS: BOOKING_STATUS,
    SORT_ORDER: SORT_ORDER,
    SOCKET_EVENTS: SOCKET_EVENTS,
    STATUS_CODE: STATUS_CODE,
    CAP_BEFORE_TIME: CAP_BEFORE_TIME,
    CAP_AFTER_TIME: CAP_AFTER_TIME,
    TIMEZONE_INDIA: TIMEZONE_INDIA,
    READABLE_DATETIME_FORMAT: READABLE_DATETIME_FORMAT,
    JAVASCRIPT_TIMESTAMP_FORMAT: JAVASCRIPT_TIMESTAMP_FORMAT,
    TRANSACTION_STATUS: TRANSACTION_STATUS,
    PRIORITY: PRIORITY,
    CALL_REQUEST: CALL_REQUEST,
    STATUS: STATUS
};