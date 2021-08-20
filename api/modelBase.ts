
import axios from './axios';

// const HttpErrorMessage = {
//   200: "请求成功",
//   500: "服务器内部错误，请稍后重试",
//   502: "服务器网络错误，请稍后重试",
//   504: "服务器网络错误，请稍后重试",
//   404: "服务器资源未找到"
// }

// const NoAuth = "AuthFailure.UnauthorizedOperation";

export default class ModelBase {

  loading: boolean | undefined;

  async fetchByPost(url: string, params = {}, headers = {}, opts = {},) {
    try {
      // @ts-ignore
      return await axios.post(url, params).then((res: any) => {
        return this.handleResultJsonP(res);
      }).catch((err: any) => {
        return Promise.reject(err);
      })
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.withoutLoading();
    }
  }
  async fetchByGet(url: string, params = {}, headers = {}, opts = {},) {
    try {
      // @ts-ignore
      return await axios.get(url, params).then((res: any) => {
        return this.handleResultJsonP(res);
      }).catch((err: any) => {
        return Promise.reject(err);
      })
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.withoutLoading();
    }
  }
  async fetchByPut(url: string, params = {}, headers = {}, opts = {},) {
    try {
      // @ts-ignore
      return await axios.put(url, params).then((res: any) => {
        return this.handleResultJsonP(res);
      }).catch((err: any) => {
        return Promise.reject(err);
      })
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.withoutLoading();
    }
  }
  async fetchByDelete(url: string, params = {}, headers = {}, opts = {},) {
    try {
      // @ts-ignore
      return await axios.delete(url, params).then((res: any) => {
        return this.handleResultJsonP(res);
      }).catch((err: any) => {
        return Promise.reject(err);
      })
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.withoutLoading();
    }
  }
  handleResultJsonP(res: any) {
    if (res.status !== 200) {
      // 处理http的网络异常
      switch (res.status) {
        case 500:
          break;

        case 502:
          break;

        case 504:
          break;

        case 404:

          break;
        default:

      }
      return Promise.reject("Net work error");
    } else {
      return res.data
    }
  }

  withLoading() {
    this.loading = true;
    return this;
  }

  hideLoading(load: any) {
    // 时间太短会不显示
    if (load) {
      setTimeout(() => {
        load.stop();
      }, 50);
    }
  }

  withoutLoading() {
    this.loading = false;
    return this;
  }
}

