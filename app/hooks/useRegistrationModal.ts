import { create } from "zustand"

interface IRegistrationModalStore {
   isOpen: boolean
   onOpen: () => void
   onClose: () => void
}

const UseRegistrationModal = create<IRegistrationModalStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))

export default UseRegistrationModal
