/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';

class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get('/api/QuanLyPhim/LayDanhSachBanner');
  };
}
export const quanLyPhimService = new QuanLyPhimService();
