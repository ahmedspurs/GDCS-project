const router = require("express").Router();
const {
    getCourses,
    getCourse,
    addCourse,
    editCourse,
    deleteCourse
} = require("../controllers/courses")
router.get( "/" , getCourses )

router.get( "/:id" , getCourse )

router.post( "/" , addCourse )

router.put( "/:id" , editCourse )

router.delete( "/:id" , deleteCourse )

module.exports = router


