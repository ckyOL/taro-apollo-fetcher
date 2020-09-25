import Taro from "@tarojs/taro";

export default async function taroApolloFetcher(url, { body, method, headers }) {
    const {data, statusCode, errMsg} = await Taro.request({
      url,
      header: headers,
      method,
      data: body,
      dataType: '其他'
    });
  
    return {
      ok: () => statusCode >= 200 && statusCode < 300,
      statusText: () => errMsg,
      text: () => Promise.resolve(data)
    }
  }