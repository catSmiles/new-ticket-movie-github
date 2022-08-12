/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';
import { GROUPID } from '../util/settings/config';

class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get('/api/QuanLyPhim/LayDanhSachBanner');
  };
  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}
export const quanLyPhimService = new QuanLyPhimService();