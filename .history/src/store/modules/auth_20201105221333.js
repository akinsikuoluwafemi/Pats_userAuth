const state = {
    users: []
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers({commit}) {
        console.log()
    }
}

const mutations = {}


export default {
  state,
  getters,
  actions,
  mutations,
};