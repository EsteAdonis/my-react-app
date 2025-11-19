import create from 'zustand';

// ...existing code...
// create a local Zustand store (if you already have a shared store, import it instead)
export const useCounterStore = create((set) => ({
	count: 0,
	increment: () => set((s) => ({ count: s.count + 1 })),
	decrement: () => set((s) => ({ count: s.count - 1 })),
}));
