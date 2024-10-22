import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
// tao store types 
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    
}

const useCounterStore = create<CounterState>()(
    persist(
        (set) => ({
        // khoi tao trang thai ban dau
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) =>{
            // tru 1 neu count > 0
            return  ({ count:state.count > 0 ? state.count - 1 : 0 })
        }),
        // decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
    
    }),
        {
            name: 'counter-storage',
            storage: createJSONStorage(() => localStorage),
        }
        
    )
);

export default useCounterStore