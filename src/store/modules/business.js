// import { home, getInitMsg, pushMsg } from '@/api'
// import { timeProcess } from '@/timeProcess'

const state = {
  newFood: [
  ],
  todayFood: [
  ],
  foodItems: [
    {isShelf: false, isSelected: false, imgUrl: '../../assets/new-1.jpg', foodName: '黄金虾', foodPrice: '20', index: 0},
    {isShelf: false, isSelected: false, imgUrl: '../../assets/new-1.jpg', foodName: '黄金牛', foodPrice: '30', index: 1},
    {isShelf: false, isSelected: false, imgUrl: '../../assets/new-1.jpg', foodName: '黄金猪', foodPrice: '18', index: 2},
    {isShelf: false, isSelected: false, imgUrl: '../../assets/new-1.jpg', foodName: '黄金狗', foodPrice: '40', index: 3},
    {isShelf: false, isSelected: false, imgUrl: '../../assets/new-1.jpg', foodName: '黄金鸡', foodPrice: '40', index: 4}
  ]
}

const getters = {
  getFoodItems: state => state.foodItems,
  getTodayFood: state => state.todayFood,
  getNewFood: state => state.newFood
}

const actions = {
  fetchNewslist ({ commit }, payload) {
  }
}

const mutations = {
  modifyNewFood (state, payload) {
    state.newFood[payload.index].isSelected = !state.newFood[payload.index].isSelected
  },
  modifyTodayFood (state, payload) {
    state.todayFood[payload.index].isSelected = !state.todayFood[payload.index].isSelected
  },
  modifyFoodItems (state, payload) {
    state.foodItems[payload.index].isSelected = !state.foodItems[payload.index].isSelected
  },
  addFoodItems (state, payload) {
    let keys = payload.keyArr
    for (let i in keys) {
      let item = state.foodItems[keys[i]]
      item.isShelf = true
      item.isSelected = false
      // obj.isShelf = false
      // 同步修改 今日菜单
      state.todayFood.push(item)
      console.log(item)
      // state.todayFood[state.todayFood.length - 1].isShelf = false
    }
  },
  addNewFood (state, payload) {
    let keys = payload.keyArr
    for (let i in keys) {
      let item = state.todayFood[keys[i]]
      item.isShelf = true
      item.isSelected = false
      // 同步修改 今日菜单
      state.newFood.push(item)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
