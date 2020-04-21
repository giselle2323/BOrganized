import { Item } from "../models/listItem";

export default class listItemServices {
    static async createItem(data) {
        const item = await Item.create(data);
        return item;

    }

    static async getItem(category_id) {
        const item = await Item.findOne({ _id: category_id });
        return item;

    }

    static async getItemAndUpdate(id, data) {
        const item = await Item.findByIdAndUpdate(id, data, { returnOriginal: false })
        return item;

    }

    static async getItemAndDelete(id) {
        const item = await Item.findByIdAndDelete(id)
        return item;

    }


}
