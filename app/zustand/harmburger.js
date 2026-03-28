import { create } from 'zustand'



export const harmburger = create((set) => ({
    isOpen : false,


    openHarmburger : () => set({isOpen : true}),
    closeHarmburger : () => set({isOpen : false})
}))