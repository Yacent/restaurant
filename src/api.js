import axios from 'axios'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
const api = 'http://119.29.0.211:8002/'

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

// 获取B端 菜品库
export const fetchBusinessFoodItems = (id) => {
  return axios.post(api + 'get_food_list/', qs.stringify({
    building_id: id
  }))
}

// 上架 菜品
export const postBusinessFoodItems = (payload) => {
  console.log(payload)
  return axios.post(api + 'set_daily_food_list/', qs.stringify({
    build_id: payload.build_id,
    food_ids: payload.foodIds
  }))
}

// 获取今日菜单
export const fetchBusinessTodayFood = (payload) => {
  return axios.post(api + 'get_daily_food_list1/', qs.stringify({
    build_id: payload
  }))
}

// 获取新品推荐
export const fetchBusinessNewFood = (payload) => {
  return axios.post(api + 'get_new_food_recommendation_info/', qs.stringify({
    building_id: payload
  }))
}

// 推荐菜品
export const postBusinessTodayFood = (payload) => {
  console.log(payload)
  return axios.post(api + 'recommend_food/', qs.stringify({
    building_id: payload.building_id,
    food_ids: payload.foodIds,
    opr_method: payload.opr_method
  }))
}

// 取消推荐菜品
export const postBusinessUnTodayFood = (payload) => {
  console.log(payload)
  return axios.post(api + 'recommend_food/', qs.stringify({
    building_id: payload.building_id,
    food_ids: payload.foodIds,
    opr_method: payload.opr_method
  }))
}
