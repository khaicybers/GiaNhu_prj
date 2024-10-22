import { create } from 'zustand';

// tao store types 
interface CounterState {
    count: number;
    // increment: () => void; 
    
}

const useCounterStore = create<CounterState>((set) => ({
    // khoi tao trang thai ban dau
    count: 0,
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 })),
    // reset: () => set({ count: 0 }),
}));

export default useCounterStore