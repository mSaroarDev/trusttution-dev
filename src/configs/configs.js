
export const configs = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "My Market Admin",
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",

  API_BASE_URL: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL_PRODUCTION,
  CLIENT_BASE_URL: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_CLIENT_BASE_URL : process.env.NEXT_PUBLIC_CLIENT_BASE_URL_PRODUCTION,

  TIMEOUT: Number(process.env.NEXT_PUBLIC_TIMEOUT) || 5000,
  
  NODE_ENV: process.env.NODE_ENV || "development",
};