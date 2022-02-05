let url_base =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8080'
    : 'http://dwstack.top:8080';

export const AXIOS_BASE = url_base;
