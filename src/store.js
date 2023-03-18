import { create } from 'zustand'
import {devtools,persist} from 'zustand/middleware'

let store = (set) => ({
  usuario: [],

 registerUsuario : (user) =>  set({usuario: user}),
 deleteUsuario: () => set({ usuario: [] }),
})
store=devtools(store);
store = persist(store,{name: 'user_seting'});
const useStore = create(store)
export default useStore;