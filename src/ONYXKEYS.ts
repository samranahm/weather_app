const ONYXKEYS = {
    /** Holds information about the users account that is logging in */
    ACCOUNT: 'account',

    /** Holds the reportID for the report between the user and their account manager */
    ACCOUNT_MANAGER_REPORT_ID: 'accountManagerReportID',

    /** Holds an array of client IDs which is used for multi-tabs on web in order to know
     * which tab is the leader, and which ones are the followers */
    ACTIVE_CLIENTS: 'activeClients',

    /** A unique ID for the device */
    DEVICE_ID: 'deviceID',

    /** Boolean flag set whenever the sidebar has loaded */
    IS_SIDEBAR_LOADED: 'isSidebarLoaded',

    /** Boolean flag set whenever we are searching for reports in the server */
    IS_SEARCHING_FOR_REPORTS: 'isSearchingForReports',

    /** Note: These are Persisted Requests - not all requests in the main queue as the key name might lead one to believe */
    PERSISTED_REQUESTS: 'networkRequestQueue',
    PERSISTED_ONGOING_REQUESTS: 'networkOngoingRequestQueue',

    /** Stores current date */
    CURRENT_DATE: 'currentDate',

    /** Credentials to authenticate the user */
    CREDENTIALS: 'credentials',
    STASHED_CREDENTIALS: 'stashedCredentials',

    /** Keeps track if there is modal currently visible or not */
    MODAL: 'modal',

    /** Has information about the network status (offline/online) */
    NETWORK: 'network',

    // draft status
    CUSTOM_STATUS_DRAFT: 'customStatusDraft',

    // keep edit message focus state
    INPUT_FOCUSED: 'inputFocused',

    // Holds data for the currently logged-in user
    CURRENT_USER: 'currentUser',

    // Keeps track of whether the app is loading
    IS_LOADING: 'isLoading',

    // Stores the theme preference (dark or light mode)
    THEME: 'theme',

    // Stores the language preference
    LANGUAGE: 'language',

    // Stores authentication token for API requests
    AUTH_TOKEN: 'authToken',

    // Holds details of ongoing requests for specific operations
    ONGOING_REQUESTS: 'ongoingRequests',

    // Stores session-specific data
    SESSION_DATA: 'sessionData',

    // Stores the last active time of the user
    LAST_ACTIVE_TIME: 'lastActiveTime',
};

export default ONYXKEYS;
