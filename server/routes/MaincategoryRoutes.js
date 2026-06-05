const MaincategoryRouter = require("express").Router()
const { maincategoryUploader } = require("../middlewares/fileUploader")
const {
    
    authAdmin,
    authSuperAdmin
} = require("../middlewares/authentication")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
} = require("../controllers/MaincategoryController")

MaincategoryRouter.post("", authAdmin, maincategoryUploader.single("pic"), createRecord)
MaincategoryRouter.get("",  getRecord)
MaincategoryRouter.get("/:_id",  getSingleRecord)
MaincategoryRouter.put("/:_id", authAdmin, maincategoryUploader.single("pic"), updateRecord)
MaincategoryRouter.delete("/:_id", authSuperAdmin, deleteRecord)

module.exports = MaincategoryRouter