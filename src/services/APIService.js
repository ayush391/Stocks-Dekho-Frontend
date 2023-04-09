import { create } from 'apisauce';

export const api = create({
  baseURL: import.meta.env.VITE_BASE_URL
});
