const state = {
    users: []
}

const getters = {
    allUsers: (state) => state.users
}

const actions = {
    fetchUsers({commit}) {
      let users = JSON.parse(localStorage.getItem('allUsers'))
        alert(users)
        console.log(users)
        commit('')
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