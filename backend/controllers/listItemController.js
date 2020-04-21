import listItemServices from "../services/listItemServices";

export default class listItemController {
    //Signup 
    static async createItem(req, res) {
        try {
            const { name } = req.body;
            const { category_id } = req.body;
            const { user_id } = req.body;
            const { status } = req.body;
            const item = await listItemServices.createItem({ name, category_id, user_id, status });
            return res.status(201).send({ item });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async editItem(req, res) {
        try {
            const _id  = req.params.id;
            const data = {
                name: req.body.name,
                category_id: req.body.category_id,
                user_id: req.body.user_id,
                status: req.body.status
            }
            const item = await listItemServices.getItemAndUpdate(_id, data)
            return res.status(200).send({ item });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async deleteItem(req, res) {
        try {
            const _id = req.params.id;
            await listItemServices.getItemAndDelete(_id)
            return res.status(200).send('The item has been deleted successfully');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

}
