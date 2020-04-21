import { Category } from "../models/category";

export default class categoryServices {
    static async createCategory() {
        const category = await Category.create([{name: 'read'}]);
        return category;

    }

    static async getCategory() {
        const data = await Category.find();
        return data;

    }


}
