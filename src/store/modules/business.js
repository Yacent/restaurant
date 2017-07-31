import { postBusinessUnTodayFood, postBusinessTodayFood, fetchBusinessFoodItems, postBusinessFoodItems, fetchBusinessTodayFood, fetchBusinessNewFood } from '@/api'
// import { timeProcess } from '@/timeProcess'

const state = {
  newFood: [
  ],
  todayFood: [
  ],
  foodItems: [
  ]
}

const getters = {
  getFoodItems: state => state.foodItems,
  getTodayFood: state => state.todayFood,
  getNewFood: state => state.newFood
}

const actions = {
  fetchFoodItems ({ commit }, id) {
    fetchBusinessFoodItems(id).then(response => {
      commit('initFoodItems', response.data)
    })
  },
  addFoodItems ({ commit }, payload) {
    postBusinessFoodItems(payload).then(response => {
      // commit('addFoodItems', payload.foodIds.split(' '))
      console.log(response)
    })
  },
  fetchTodayFood ({ commit }, payload) {
    fetchBusinessTodayFood(payload).then(response => {
      commit('initTodayFood', response.data)
    })
  },
  fetchNewFood ({ commit }, payload) {
    fetchBusinessNewFood(payload).then(response => {
      commit('initNewFood', response.data)
    })
  },
  addRecommendFood ({ commit }, payload) {
    postBusinessTodayFood(payload).then(response => {
      // commit('addFoodItems', payload.foodIds.split(' '))
      console.log(response)
    })
  },
  unTodayFood ({ commit }, payload) {
    console.log(1111)
    postBusinessUnTodayFood(payload).then(response => {
      console.log(response)
    })
  }
}

const mutations = {
  initFoodItems (state, payload) {
    state.foodItems = []
    payload.forEach(item => {
      state.foodItems.push({
        isShelf: item.isActive === 'Y',
        isSelected: false,
        imgUrl: 'http://119.29.0.211:8001/upload/' + item.pic_urls.split(' ')[0],
        foodName: item.name,
        foodPrice: item.price,
        id: item.id
      })
    })
  },
  initTodayFood (state, payload) {
    state.todayFood = []
    payload.forEach(item => {
      state.todayFood.push({
        isShelf: false,
        isSelected: false,
        imgUrl: 'static/' + item.pic_urls.split(' ')[0],
        foodName: item.name,
        foodPrice: item.price,
        id: item.id
      })
    })
  },
  initNewFood (state, payload) {
    state.newFood = []
    console.log(payload)
    payload.forEach(item => {
      state.newFood.push({
        isShelf: false,
        isSelected: false,
        imgUrl: 'static/' + item.pic_urls.split(' ')[0],
        foodName: item.name,
        foodPrice: item.price,
        id: item.id
      })
    })
  },
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
    for (let i in payload) {
      let value = payload[i]
      state.foodItems.forEach(ins => {
        if (ins.id === value) {
          ins.isShelf = true
          ins.isSelected = false
        }
      })
      // let item = state.foodItems[keys[i]]
      // let ins = payload.items

      // item.isShelf = true
      // item.isSelected = false
      // 同步修改 今日菜单
      // state.todayFood.push(ins[keys[i]])
      // console.log(state.todayFood)
    }
  },
  addNewFood (state, payload) {
    for (let i in payload) {
      let value = payload[i]
      state.todayFood.forEach(ins => {
        if (ins.id === value) {
          ins.isShelf = true
          ins.isSelected = false
        }
      })
      // let item = state.todayFood[payload[i]]
      // item.isShelf = true
      // item.isSelected = false
      // // 同步修改 今日菜单
      // state.newFood.push(item)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
