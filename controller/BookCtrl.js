const Book = require('../model/BookModel')

exports.createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body)
        return res.status(200).json(
            {
                data: newBook
            }
        )
    }
    catch (e) {
        return res.status(404).json({
            msg: 'Internal server error',

        }, console.log(e))

    }
}

exports.filterBook = async (req, res) => {
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
    if (product) {
        return res.status(200).json({

            length: product.length
        })
    }
}

exports.page = async (req, res) => {



    const category_one = req.query.category_one
    const category_one_value = req.query.category_one_value
    const category_two = req.query.category_two
    const category_two_value = req.query.category_two_value
    const category_three = req.query.category_three
    const category_three_value = req.query.category_three_value
    const conditions = {};
    if (category_one !== "null") {
        conditions[category_one] = category_one_value;
    }
    if (category_two !== "null") {
        conditions[category_two] = category_two_value;
    }
    if (category_three !== "null") {
        conditions[category_three] = category_three_value;
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    console.log(conditions, "conditions page")
    const product = (await Book.find(conditions)).slice(startIndex, endIndex)
    if (product.length >= 1) {

        return res.status(200).json({
            data: product

        })
    }
    else {

        return res.status(200).json({
            data: []

        })
    }
}
