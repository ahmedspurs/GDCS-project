const { courses } = require("../models");

const getCourses = async (req, res) => {
    try {
        const data = await courses.findAll();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const getCourse = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await courses.findOne({
            where : {
                id: id
            }
        });
        if(!data) require.status(404).json({success:false,message:"Course not found!"})
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Course not found !!!",
        });
    }
};

const addCourse = async (req, res) => {
    try {
        await courses.create(req.body);
        res.status(200).json({
            success: true,
            message: "Course created",
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

const editCourse = async (req, res) => {
    const id = req.params.id;
    try {
        await courses.update(
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
            message: "Course updated",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const deleteCourse = async (req,res) => {
    const id = req.params.id
    try {
        await courses.destroy(
            {
                where : {
                    id : id
                }
            }
        )
        res.status(200).json({
            success: true,
            message: "Course deleted",
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
    getCourses,
    getCourse,
    addCourse,
    editCourse,
    deleteCourse
}