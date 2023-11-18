import { create } from "zustand";

export const useStore = create((set) => ({
  loggedIn: false,
  user: null,
  setUser: (user) => {
    if (!user) {
      set({ loggedIn: false });
    } else {
      set({ loggedIn: true });
    }

    set({ user });
  },
}));
