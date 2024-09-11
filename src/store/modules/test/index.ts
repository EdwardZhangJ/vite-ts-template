
import { defineStore } from 'pinia'

interface ITestState {
  test: string
}

// 测试 store
export const useTestStore = defineStore({
  id: 'test',
  state: (): ITestState => ({
    test: ''
  }),


  getters: {

  },
  actions: {
    /** 重置dash状态 */
    resetDashStore() {
      this.$reset()
    },

  },
})

