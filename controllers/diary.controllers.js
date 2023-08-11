const db = require('../models/index')
const Diary =  db.diary
//myDiary
//Get
//url = GET/diary/my
const myRoutes = async (req , res)=>{
    const diaries = await Diary.findAll({
        raw: true
    })
    res.render('diary/my-diary' , {
        title: "My diary",
        diaries: diaries
    })
}

//newDiary
//POST
//url = POST/diary/my
const addNewDiary =  async (req , res)=>{
    try {
        const {imageUrl, text} = req.body
        await Diary.create({
            imageUrl: imageUrl,
            text: text
         })
        res.redirect('/diary/my')
    } catch (error) {
        console.log(error);
    }
}

//openDiary
//Get
//url = GET/diary/my
const oneRoutes = async (req , res)=>{
    const diary = await Diary.findByPk(req.params.id,{
        raw: true
    })
    res.render('diary/one-diary' , {
        title: "One diary",
        diary: diary
    })
}

//openDiary
//Get
//url = GET/diary/my
const updateRoutespage = async (req , res)=>{
    const diary = await Diary.findByPk(req.params.id,{
        raw: true
    })
    res.render('diary/update-diary' , {
        title: "Update diary",
        diary: diary
    })
}

//updateDiary
//POST
//url = POST/diary/update/id
const updateRoutes = async (req , res)=>{
    try {    
        await Diary.update({text: req.body.text} , {
         where: {
             id: req.params.id
         }
        })
    res.redirect('/diary/my')
    } catch (error) {
        console.log(error);
    }
}

const deleteDiary = async (req, res) =>{
    try {
        await Diary.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/diary/my')
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    myRoutes,
    addNewDiary,
    oneRoutes,
    updateRoutespage,
    updateRoutes,
    deleteDiary
}