const { users } = require("../models");

const getUsers = async (req, res) => {
    try {
        const data = await users.findAll();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await users.findOne({
            where : {
                id: id
            }
        });
        if(!data) require.status(404).json({success:false,message:"user not found!"})
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "user not found !!!",
        });
    }
};

const addUser = async (req, res) => {
    try {
        await users.create(req.body);
        res.status(200).json({
            success: true,
            message: "user created",
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

const editUser = async (req, res) => {
    const id = req.params.id;
    try {
        await users.update(
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
            message: "user updated",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
        });
    }
};

const deleteUser = async (req,res) => {
    const id = req.params.id
    try {
        await users.destroy(
            {
                where : {
                    id : id
                }
            }
        )
        res.status(200).json({
            success: true,
            message: "user deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "network error",
            error : error
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}