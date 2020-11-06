const state = {
    users: []
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers
}

const mutations = {}


export default {
  state,
  getters,
  actions,
  mutations,
};