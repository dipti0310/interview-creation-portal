// const express = require('express');
// const router = express.Router();
// // const {createUser,listUser,listUserById} = require('../controller/user');
// // const {userValidation,tokenDecode,typeCheck} = require('../middleware/validation');

// router.get('/',(req,res)=>{
//     obj={
//         a:"DVCGD",
//         number:45
//     }
//     res.json(obj)
// })


// // routes.post('/',userValidation,createUser);
// // // routes.get('/',tokenDecode,typeCheck,listUser);
// // // routes.get('/:id',tokenDecode,typeCheck,listUserById);

// module.exports = router;

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {createInterview,getAllUpcomingInterviews,listInterviewById} = require('../controller/interview');
const {interviewValidation,interviewUpdateValidation} = require('../middleware/validation');

// routes.use(tokenDecode,typeCheckForAdmin);
router.post('/',interviewValidation,createInterview);
router.patch('/:uid',interviewUpdateValidation,createInterview);
router.get('/',getAllUpcomingInterviews);
router.get('/:uid',listInterviewById);


module.exports = router;