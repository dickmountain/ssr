import axios from 'axios'

export const getPosts = ({ commit }) => {
	return axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
		commit('setPosts', response.data)
	})
}

export const getPost = ({ commit }, id) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
		commit('setPost', response.data)
	})
}