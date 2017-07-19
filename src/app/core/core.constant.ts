'use strict';

export const Constant = Object.freeze({
  ROLES: {
    ROLE_SYSTEM_ADMIN: [
      'CardbrandComponent',
      'CountryLanguageComponent',
      'CountryLanguageFormComponent',
      'WalletRankFormComponent',
      'CanaryManagementFormComponent'
    ],
    ROLE_SWITCH_ADMIN: [
      'AppconfigComponent',
      'CardbrandComponent',
      'CountryLanguageComponent',
      'CardBrandFormComponent',
      'WalletManagementFormComponent',
      'WalletManagementAuditComponent',
      'CanaryManagementFormComponent'
    ],
    ROLE_SWITCH_USER: [
      'CardbrandComponent',
      'WalletManagementComponent',
      'CountryLanguageComponent',
      'CanaryManagementComponent'
    ]
  },
  ACCOUNT_RANGE_MAXLENGTH: 19,
  BRAND_TYPE: {
    PRIVATE_LABEL_CARD: 'PRIVATE_LABEL_CARD',
    MAJOR_CARD_BRAND: 'MAJOR_CARD'
  },
  CVV_REQUIRED: 'cvvRequired',
  EXP_REQUIRED: 'expDateRequired',
  REGEX: 'regex',
  BIN_LIST: 'binList',
  ID: 'id',
  ERRORS: {
    DESC_500: 'Internal Server Error',
    DESC_404: 'Page Not Found',
    DESC_400: 'Invalid Input',
    DESC_413: 'Unauthorized Access',
    DESC_415: 'Unsupported Media Type'
  },
  TOASTER: {
    ERROR: 'error',
    SUCCESS: 'success'
  },
  walletExtraProperties: ['walletDetailId', 'guid', 'name', 'id', 'companyId', 'openApiClientId', 'apiWallet',
    'pldpWallet', 'mtpWallet', 'partnerLoginUrl', 'walletProviderUrl', 'addCardUrl',
    'addAddressUrl', 'deleteNotificationUrl', 'mobileEnabled', 'direct', 'isMobileEnabled',
    'isDirect'],
  LOGO_REF: 'logoRef',
  WALLET_PARTNER_NAME: 'walletPartnerName',
  SELECTED_LOCALE: 'selectedLocale',
  INVALID_ID: 'INVALID_ID',
  WALLET_MANAGEMENT: {
    BUTTON_ADD_WALLET_TEXT: 'Add Wallet',
    TITLE_ADD_WALLET: 'Add New Wallet'
  },
  EXPORT_FILE_NAME_LIMIT : 21
});

export const ApiConfig = Object.freeze({
  baseConfig: {
    basePath: '' // we set this in app run from the build data from conductor.
  },
  requestNames: {
    getUsers: {
      endpoint: 'getUsers'
    }
  }
});

