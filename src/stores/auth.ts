import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export interface State {
    userList: string
    user: UserInfo,
    isAuth: boolean,
}

interface UserInfo {
    email: string
    password: number
}

export const useAuth = defineStore('auth', {
    state: () => {
        return {
            email: '',
            password: '',
            token: useLocalStorage('pinia/auth/token', ''),
        }
    },
    getters: {
        isAuth: (state) => state.token && Boolean(state.token.length),
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        async login() {
            try {
                const response = await fetch( '/user/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({email: this.email, password: this.password}),
                })

                return await response.json();
            } catch (error) {
                return { error }
            }
        }
    }
})

// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}