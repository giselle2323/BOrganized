import categoryServices from "../services/categoryServices";

class CategoryController {
    
    static async createCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await categoryServices.createCategory({ name });
            return res.status(201).send({ category });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getCategory(req, res) {
        try {
            const categories = await categoryServices.getCategory();
            return res.status(200).send(categories);
        } catch(error){
            return res.status(500).send(error.message);
        }
    }

}

export default CategoryController;
