const state = {
    users: [
        {
            username: 'Top',
            email: 'akinsiku.o@yahoo.com'
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