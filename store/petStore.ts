import { Toast } from './../node_modules/react-hot-toast/src/core/types';
import { Product } from "@/types/types"
import { stat } from 'fs';
import toast from 'react-hot-toast';
import { create } from "zustand"
import { persist } from 'zustand/middleware';


interface PetItem {
    quantity:number,
    id: number,
    title: string,
    price: number,
    image: string,
}

interface PetSate {
    pets: PetItem[];
    addPet: (product:Product) => void;
    removePet: (id: number) => void;
    updateQuantity: (type:"increment" | "decrement" , id: number) => void;
    
}

const usePetStore = create<PetSate>()(
    persist(
        (set,get) => ({
            pets: [
            ],
            addPet: (product) => {
                const existingPet = get().pets.find((item) => item.id === product.id);
                
                set({
                    pets: existingPet ? get().pets : [
                        ...get().pets,
                        {
                            quantity: 1,
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.images?.[0] || 'https://via.placeholder.com/150',
                        }
                    ]
                });
                if(existingPet){
                    toast.error("loi roi");
                }else{
                    toast.success("Them thanh cong");
                }
                
            },
            removePet: (id) => {
                set({
                    pets: get().pets.filter((item) => item.id !== id)
                });
                toast.success("Xóa 1 bé rồi");
            },
            updateQuantity: (type,id) => {
                const pet = get().pets.find((item) => item.id === id)
                // const updatePet = {...pet, quantity: type === "increment" ? pet.quantity + 1 : pet.quantity - 1}
                if(!pet) return;
                if (pet.quantity === 1 && type === "decrement") {
                    get().removePet(id);
                } else {
                    pet.quantity = type === "decrement" ? pet.quantity - 1 : pet.quantity + 1
                    set({
                    pets: [...get ().pets]
                    });
                }
            }
        }), {
            name: "pet",
        }
    )
);
export default usePetStore