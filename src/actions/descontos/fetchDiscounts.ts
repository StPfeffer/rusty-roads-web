"use server"

import { DiscountService } from "@/services/DiscountService"

const discountService = new DiscountService();

export const fetchDiscounts = async (): Promise<Desconto[]> => {
    try{
        const discounts = await discountService.list();

        return discounts.data as Desconto[];
    } catch (error) {
        console.log(error);
        return[];
    }
};

export const fetchDiscount= async(id: number): Promise<Desconto> => {
    console.log(id);

    try {
        const discout = await discountService.findById(id);

        return discout.data as Desconto;
    } catch (err) {
        console.log(err);
        throw new Error("Não foi possível encontrar o desconto!")
    }

}