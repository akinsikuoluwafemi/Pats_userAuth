const state = {
    users: [
        {
            username: 'Top'
        }
    ]
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers({commit}) {
        
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