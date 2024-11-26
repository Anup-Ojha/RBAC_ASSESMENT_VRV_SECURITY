const router = require('express').Router();
const User = require('../models/user.model');
const mongoose = require('mongoose');
const {roles} = require('../utils/constants');

router.get('/users', async(req, res, next)=>{
    try {
        const users = await User.find();
        // res.send(users); 
        res.render('manage-users',{users});

    } catch (error) {
        next(error);
    }
})

router.get('/user/:id',async(req, res, next)=>{
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            req.flash('error', 'Invalid id');
            res.redirect('/admin/users');
            return;
        }
        const person = await User.findById(id);
        res.render('profile', {person});

        } catch (error) {
            next(error);
        }
});


router.post('/update-role',async(req,res,next)=>{
    const{id, role } =req.body;
    //check for id and roles in the body 
    if(!id || !role){
        req.flash('error','Invalid request')
        return res.redirect('back')
    }

    //check for the valid mongoose objectID
    if(!mongoose.Types.ObjectId.isValid(id)){
        req.flash('error','Invalid id')
        return res.redirect('back')
    }

    //check for valid role
    const rolesArray = Object.values(roles)
    if(!rolesArray.includes(role)){
        req.flash('error','Invalid role')
        return res.redirect('back') 
    }

    //admin cannot remove himself as an admin 
    if(req.user.id === id){
        req.flash('error','Admins cannot remove themselves from Admin, ask anpther Admin.');
        return res.redirect('back');
    }
    //finally update the user
    const user = await User.findByIdAndUpdate(id, {role}, {new:true, runValidators: true});
    req.flash('info',`updated role for ${user.email} to ${user.role}`);
    res.redirect("back")
});
module.exports = router