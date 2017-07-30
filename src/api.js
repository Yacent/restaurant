import axios from 'axios'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
const api = 'http://119.29.0.211:8001/'

export const login = (userId) => {
  return axios.post(api, {
    action: 'login',
    userId
  })
}

// 设置喜欢的食物
export const setFavoriteFood = (taste) => {
  return axios.post(api + 'change_style/', qs.stringify({
    style: taste,
    token: localStorage.TOKEN
  }))
}

// 设置喜欢的食物
export const setFavoriteTaste = (taste) => {
  return axios.post(api + 'change_taste/', qs.stringify({
    taste: taste,
    token: localStorage.TOKEN
  }))
}

// 用户登录
export const userLogin = (user) => {
  return axios.post(api + 'login/', qs.stringify(user))
}

// 获取用户信息
export const getUserInfo = () => {
  return axios.post(api + 'get_personal_info/', qs.stringify({
    token: localStorage.TOKEN
  }))
}
// 积分兑换
export const exchangeVoucher = (count) => {
  return axios.post(api + 'exchange_voucher/', qs.stringify({
    token: localStorage.TOKEN,
    count
  }))
}

// 推荐菜品
export const recommendFood = (count) => {
  return axios.post(api + 'exchange_voucher/', qs.stringify({
    token: localStorage.TOKEN,
    count
  }))
}

// 根据食堂获取新品
export const getNewByRestId = (restId) => {
  return axios.get(api + 'get_hot_food_list/' + restId)
}

// 根据食堂获取菜单
export const getListByRestId = (restId) => {
  return axios.get(api + 'get_daily_food_list/' + restId)
}

// 获取食堂列表
export const getResList = () => {
  return axios.get(api + 'get_building_list/')
}
