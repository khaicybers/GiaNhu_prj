import { Toast } from './../node_modules/react-hot-toast/src/core/types';
import { Product } from "@/types/types"
import { stat } from 'fs';
import toast from 'react-hot-toast';
import { create } from "zustand"


interface PetItem {
    quantity:number,
    id: number,
    title: string,
    price: number,
    image: string,
}

interface PetSate {
    pets: PetItem[];
    addPet: (product:Product) => void
    
}

const usePetStore = create<PetSate>((set,get) => ({
    pets: [
        {
            id: 1,
            title: "Product 1",
            price: 19.99,
            quantity: 2,
            image: "/images/red.jpeg?height=80&width=80",
          },
          {
            id: 2,
            title: "Product 2",
            price: 29.99,
            quantity: 1,
            image: "/images/gray.jpeg?height=80&width=80",
          },
          {
            id: 3,
            title: "Product 3",
            price: 39.99,
            quantity: 3,
            image: "/images/black.jpeg?height=80&width=80",
          },
    ],
    addPet: (product) => {
        set((state)=> {
            const existingProduct = state.pets.find((item) => item.id === product.id)
            if (existingProduct) {
                toast.error("Giỏ hàng đặt quá số lượng");
                return {
                        pets: state.pets,
                    };
                }else {
                    toast.success("Thêm 1 bé nhỏ thành công"); 
                    return {
                         pets:[
                             ...get().pets,
                                 {
                                     quantity:1,
                                     id: product.id,
                                     title: product.title,
                                     price: product.price,
                                     image: product.images[0],
                                 },
                             ]
                         
                         }
                }
        })
    }
}))
export default usePetStore