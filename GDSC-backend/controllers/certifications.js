const { certifications  , courses} = require("../models");

const getCertifications = async (req, res) => {
    try {
        const data = await certifications.findAll({
            include : {
                model : courses , as : "course"
            }
        });
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const getCertification = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await certifications.findOne({
            where : {
                id: id
            }
        });
        if(!data) require.status(404).json({success:false,message:"Certifications not found!"})
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Certifications not found !!!",
        });
    }
};

const addCertification = async (req, res) => {
    try {
        await certifications.create(req.body);
        res.status(200).json({
            success: true,
            message: "Certifications created",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
            error 
        });
    }
};

const editCertification = async (req, res) => {
    const id = req.params.id;
    try {
        await certifications.update(
            {
                ...req.body,
            },
            {
                where: {
                    id: id,
                },
            }
        );
        res.status(200).json({
            success: true,
            message: "Certifications updated",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const deleteCertification = async (req,res) => {
    const id = req.params.id
    try {
        await certifications.destroy(
            {
                where : {
                    id : id
                }
            }
        )
        res.status(200).json({
            success: true,
            message: "Certifications deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
}

module.exports = {
    getCertifications,
    getCertification,
    addCertification,
    editCertification,
    deleteCertification
}