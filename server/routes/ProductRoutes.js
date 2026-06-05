const ProductRouter = require("express").Router()
const { productUploader } = require("../middlewares/fileUploader")
const {
    
    authAdmin,
    authSuperAdmin,
    authBuyer
} = require("../middlewares/authentication")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
} = require("../controllers/ProductController")

ProductRouter.post("", authAdmin, productUploader.array("pic"), createRecord)
ProductRouter.get("",  getRecord)
ProductRouter.get("/:_id",  getSingleRecord)
ProductRouter.put("/:_id", authBuyer, productUploader.array("pic"), updateRecord)
ProductRouter.delete("/:_id", authSuperAdmin, deleteRecord)

module.exports = ProductRouter
