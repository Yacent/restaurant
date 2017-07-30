import axios from 'axios'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
const api = 'http://119.29.0.211:8001/'

export const login = (userId) => {
  return axios.post(api, {
    action: 'login',
    userId
  })
}

// 设置喜欢的食物
export const setFavoriteFood = (userId, taste) => {
  return axios.post(api + 'change_taste/' + taste + '/', qs.stringify({
    user_id: userId
  }))
}

// 设置喜欢的食物
export const setFavoriteTaste = (userId, taste) => {
  return axios.post(api + 'change_taste/' + taste + '/', qs.stringify({
    user_id: userId
  }))
}

// 用户登录
export const userLogin = (user) => {
  return axios.post(api + 'login/', qs.stringify(user))
}
// 获取用户信息
// 积分兑换
