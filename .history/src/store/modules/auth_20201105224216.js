const state = {
    users: []
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers({commit}) {
      JSON.parse(localStorage.getItem('allUsers')
        
    }
}

const mutations = {
    setUsers: (state, users) => (state.users = users)
}


export default {
  state,
  getters,
  actions,
  mutations,
};