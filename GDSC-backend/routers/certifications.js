const router = require("express").Router();
const {
    getCertifications,
    getCertification,
    addCertification,
    editCertification,
    deleteCertification
} = require("../controllers/certifications")

router.get( "/" , getCertifications )

router.get( "/:id" , getCertification )

router.post( "/" , addCertification )

router.put( "/:id" , editCertification )

router.delete( "/:id" , deleteCertification )

module.exports = router

