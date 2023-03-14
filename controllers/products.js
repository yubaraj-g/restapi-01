const Product = require("../models/product")

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query
    const queryObj = {}

    if (company) {
        queryObj.company = company
    }
    if (name) {
        queryObj.name = { $regex: name, $options: 'i' }
    }
    if (featured) {
        queryObj.featured = featured
    }

    // This is for finding products using names as query parameter
    let defaultQuery = Product.find(queryObj)
    if (sort) {
        const sortFix = sort.split(",").join(" ")
        defaultQuery = defaultQuery.sort(sortFix)
    }
    if (select) {
        const selectFix = select.split(",").join(" ")
        defaultQuery = defaultQuery.select(selectFix)
    }

    // const page = Number(req.query.page) || 1
    // const limit = Number(req.query.limit) || 6
    // let skip = (page - 1) * limit
    //keep it default page 1 and limit 3
    // defaultQuery = defaultQuery.skip(skip).limit(limit)

    // we running the query here only. none above.
    const allProducts = await defaultQuery
    res.status(200).json({ allProducts })
}

const getAllProductsTesting = async (req, res) => {
    const allProducts = await Product.find(req.query)
    res.status(200).json({ allProducts })
}

module.exports = { getAllProducts, getAllProductsTesting }