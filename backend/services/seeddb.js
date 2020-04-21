import Category from '../models/category';

export default class setCategory {
    static async findAllCategory() {
        try{
            let allCategories = await Category.find({ name: { $all: ["Urgent and Important", "Time sensitive but less important", "Important but not time sensitive", "Not important and not urgent"] } })
            .then(console.log('connected'));
            console.log(allCategories);
            if(!allCategories) {
                Category.insertMany([
                    {
                        name: 'Urgent and Important'
                    },
                    {
                        name: 'Time sensitive but less important'
                    },
                    {
                        name: 'Important but not time sensitive'
                    },
                    {
                        name: 'Not important and not urgent'
                    }
                ]);
            }
        } catch(error) {
            console.log(error.message)
        }
       
            
    }
}
