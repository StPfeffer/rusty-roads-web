"use server"

import { BenefitService } from "@/services/BenefitService";

const benefitService = new BenefitService();

export const fetchBenefits = async (): Promise<Beneficio[]> => {
    try{
        const discounts = await benefitService.list();

        return discounts.data as Beneficio[];
    } catch (error) {
        console.log(error);
        return[];
    }
};

export const fetchBenefit= async(id: number): Promise<Beneficio> => {
    console.log(id);

    try {
        const discout = await benefitService.findById(id);

        return discout.data as Beneficio;
    } catch (err) {
        console.log(err);
        throw new Error("Não foi possível encontrar o beneficio!")
    }

}