import { create } from 'zustand'

type CounterStore = {
  count: number
  increase: () => void
  incrementAsync: () => Promise<void>
  decrease: () => void
  decreaseAsync: () => Promise<void>

  reset: () => void
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),

    incrementAsync: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set((state) => ({ count: state.count + 1 }));
    },

    decrease: () => set((state) => ({ count: state.count - 1 })),

    decreaseAsync: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set((state) => ({ count: state.count - 1 }));
    },
    reset: () => set({ count: 0 }),
  })
);

