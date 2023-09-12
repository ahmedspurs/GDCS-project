const router = require("express").Router();
const {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
} = require("../controllers/users")

router.get( "/" , getUsers )

router.get( "/:id" , getUser )

router.post( "/" , addUser )

router.put( "/:id" , editUser )

router.delete( "/:id" , deleteUser )

module.exports = router


