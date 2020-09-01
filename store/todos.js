export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, index) {    
    state.list.splice(index, 1)
  },
  toggle(state, index) {
    state.list[index].done = !state.list[index].done    
  }
}