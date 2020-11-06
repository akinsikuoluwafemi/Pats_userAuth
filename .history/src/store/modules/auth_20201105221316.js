const state = {
    users: []
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers({commit})
}

const mutations = {}


export default {
  state,
  getters,
  actions,
  mutations,
};