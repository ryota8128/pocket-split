export const COLLECTIONS = {
  USERS: 'users',
  ACCOUNTS: 'accounts',
  TRANSFER_MANAGEMENT: 'transfer_management',
} as const;

export const SUB_COLLECTIONS = {
  USERS: {
    TEMPLATE_TRANSFER: 'template_transfer',
  },
  TRANSFER_MANAGEMENT: {
    TRANSFER_DETAIL: 'transfer_detail',
    OPTIMIZED_TRANSFER: 'optimized_transfer',
    SUMMARY: 'summary',
  },
};


export const FIELDS = {
  USERS: {
    USERNAME: 'username',
    PAYROLL_ACCOUNT_ID: 'payroll_account_id',
    CREATED_AT: 'created_at',
  },
  TEMPLATE_TRANSFER: {
    FROM: 'from',
    TO: 'to',
    DESCRIPTION: 'description',
    AMOUNT: 'amount',
    CREATED_AT: 'created_at',
    UPDATED_AT: 'updated_at',
  },
  ACCOUNT: {
    ACCOUNT_NAME: 'account_name',
    VIA_ACCOUNT_ID: 'via_account_id',
    CREATED_AT: 'created_at',
    UPDATED_AT: 'updated_at',
  },
  TRANSFER_MANAGEMENT: {
    USER_ID: 'user_id',
    TITLE: 'title',
    CREATED_AT: 'created_at',
    UPDATED_AT: 'updated_at',
    INCOME: 'income',
  },
  TRANSFER_DETAIL: {
    FROM: 'from',
    TO: 'to',
    DESCRIPTION: 'description',
    AMOUNT: 'amount',
    CREATED_AT: 'created_at',
    UPDATED_AT: 'updated_at',
  },
  OPTIMIZED_TRANSFER: {
    FROM: 'from',
    TO: 'to',
    AMOUNT: 'amount',
  },
  SUMMARY: {
    ACCOUNT_ID: 'account_id',
    AMOUNT: 'amount',
  },
};
