import { defineStore, acceptHMRUpdate } from 'pinia'
import { useAuth } from './auth'

export interface DocInfo {
    id: number,
    name: string,
    description: string,
    image: string,
}

export interface State {
    docList: DocInfo[]
    doc: DocInfo | null,
}

export const useDoc = defineStore('docs', {
    state: () => {
        return {
            docList: [],
            doc: null
        }
    },
    actions: {
        async getDocs(query = '') {
            const auth = useAuth()
            if (auth.isAuth) {
                let url = '/user/docs'
                if (query) {
                    url = url + '?search=' + query
                }
                const response = await fetch( url, {
                    method: 'get',
                    headers: { token: auth.token },
                })
                this.docList = await response.json();
            } else {
                throw new Error('User must be authenticated')
            }
        }
    }
})

// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useDoc, import.meta.hot))
}