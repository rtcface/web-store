import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useStore = create<State>((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () =>
    set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
