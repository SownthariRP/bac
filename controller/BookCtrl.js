const Book = require('../model/BookModel')

exports.createBook = async(req,res) => {
    try {
        const newBook = await Book.create(req.body)
        return res.status(200).json(
            {
                data:newBook
            }
        )
    }
    catch(e)
    {
        return res.status(404).json({
            msg:'Internal server error',
            
    },console.log(e))
    
    }
}

exports.filterBook = async(req,res) => { 
        const category_one = req.body.category_one
        const category_one_value = req.body.category_one_value
        const category_two = req.body.category_two
        const category_two_value = req.body.category_two_value
        const category_three = req.body.category_three
        const category_three_value = req.body.category_three_value
        const conditions = {};
        conditions[category_one] = category_one_value;
        conditions[category_two] = category_two_value;
        conditions[category_three] = category_three_value;
        const product = await Book.find(conditions)
            if(product)
            {
                return res.status(200).json({
                    data:product,
                    length:product.length
            })
            }
}