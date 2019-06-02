const express = require('express');
const router = express.Router();
const User = require('../../models/NomalUser');
const Kakao_User = require('../../models/Kakao');
var Board = require('../../models/board');
var Comment = require('../../models/comment');
const crypto = require('crypto'); //Node.js 에서 제공하는 암호화 모듈
//const properties = require('../properties/key.js');
// mapping 
// Login
router.post('/login', function (req, res, next) {
  console.log('login router 입장');
  if(req.body.check === undefined) {
    User.findOne({ id: req.body.id, password: req.body.password }, function (err, user) {
      //console.log(req.body);
      // 구문 error
      if (err) return res.status(500).json({ error: err });
      // User가 없으면 error
      if (!user) return res.json({ error: 'user not found' });
      req.session.user = user;
      console.log(req.session.user);
      res.render('main',{name: req.session.user.id});
      console.log('로그인 성공!');
    });
  }
  /*
  switch (req.body.check) {
    case '0':
      console.log("로그인 세션 확인");

      Kakao_User.findOne({ id: req.body.user.id, nickname: req.body.user.nickname }, function (err, user) {
        console.log(req.body.id);
        // 구문 error
        if (err) return res.status(500).json({ error: err });
        // User가 없으면 error
        if (!user) return res.json({ error: 'user not found' });
      });
      req.session.user = user;
      res.json(user);
      break;

    case '2':
      console.log("카카오 회원가입");

      const kakao_user = new Kakao_User();
      kakao_user.id = req.body.id;
      kakao_user.nickname = req.body.nickname;
      kakao_user.save(function (err) {
        if (err) {
          console.log(err);
          res.json({ result: 0 });
          return;
        } else {
          res.json({ result: 1 });
        }
        req.session.user = kakao_user;
        res.json(kakao_user);
      })
      break;
  }
  */
  //DB에 암호화 하여 저장하였으니 DB에서 확인할때도 암호화 된 키로 확인한다
  //let cipher = crypto.createCipher('aes192', 'key');
  //cipher.update(req.body.user.password, 'utf8', 'base64');
  //let cipherPw = cipher.final('base64');

  // find user in MongoDB
  //User.findOne({ email: req.body.user.email, password: cipherPw }, function (err, user) {
    // 구문 error
    //if (err) return res.status(500).json({ error: err });
    // User가 없으면 error
    //if (!user) return res.status(404).json({ error: 'user not found' });
    //req.session.user = user;
   // res.json(user);
 // })
});

// Sign Up
// Post로만 받는다
router.post('/signup', function (req, res, next) {
  console.log('signUp에 들어옴');
  console.log(req.body);
  
  if (req.body.type === undefined) {
    console.log("일반 회원가입");

      const user = new User();
      user.id = req.body.id;
      user.nickname = req.body.nickname;
      user.email = req.body.email;
      user.password = req.body.password;
      user.confirm = req.body.confirm;
      user.gender = req.body.gender;
      user.tel = req.body.tel;
      user.save(function (err) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        } else {
          res.render('main',{name: 'LOGIN'});
          console.log('회원가입 성공!');
        }
        /*
        req.session.user = user;
        res.json(user);
        */
      });
  }
  else {
    console.log("카카오 회원가입");

      const kakao_user = new Kakao_User();
      kakao_user.id = req.body.id;
      kakao_user.nickname = req.body.nickname;
      kakao_user.save(function (err) {
        if (err) {
          console.log(err);
          res.json({ result: 0 });
          req.session.user = kakao_user;
          console.log(req.session.user);
          //res.json(kakao_user);
          return;
        } else {
          res.json({ result: 1 });
        }
      });
  }
/*
  switch (req.body.type) {
    case '1':
      console.log("일반 회원가입");

      const user = new User();
      user.id = req.body.id;
      user.nickname = req.body.nickname;
      user.save(function (err) {
        if (err) {
          console.log(err);
          res.json({ result: 0 });
          return;
        } else {
          res.json({ result: 1 });
        }
        req.session.user = user;
        res.json(user);
      });
      break;
    case '2':
      console.log("카카오 회원가입");

      const kakao_user = new Kakao_User();
      kakao_user.id = req.body.id;
      kakao_user.nickname = req.body.nickname;
      kakao_user.save(function (err) {
        if (err) {
          console.log(err);
          res.json({ result: 0 });
          req.session.user = kakao_user;
          console.log(req.session.user);
          //res.json(kakao_user);
          return;
        } else {
          res.json({ result: 1 });
        }
      });
      break;
  }
*/
  // // encryption 
  // let  cipher = crypto.createCipher('aes192', 'key');
  // cipher.update(user.password, 'utf8', 'base64');
  // let cipheredOutput = cipher.final('base64');
  // user.password = cipheredOutput;
  /*  
    //혹시 모를 복호화를 통해 남겨놓음
    //decryption
    let decipher = crypto.createDecipher('aes192', 'key');
    decipher.update(cipheredOutput, 'base64', 'utf8');
    let decipheredOutput = decipher.final('utf8');
  */
  // user.save(function(err){
  // if(err) {
  //     console.log(err);
  //     res.json({result: 0});
  //     return;
  // }
  // res.json({result: 1});
  // });     
});
router.get("/checkUser", function (req, res, next) {
  console.log('checkUser에 들어옴');
  console.log('세션값'+req.session);
  res.json(req.session.user);
});
router.post("/clearSession", function (req, res, next) {
  req.session.user = undefined;
  res.json(req.session.user);
})
//checkLogin
router.post('/checkLogin', function(req, res, next) {
    console.log(req.session);
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        //res.status(404).json({error:"not login"});
    }
});
// //Business Login Check
// router.post('/BusinessLogin', function(req, res, next) {
//     //console.log(req.session);
//     if (req.session.user) {
//         res.json(req.session.user);
//     } else {
//         //console.log('로그인이 필요합니다.');
//         res.json(req.session.user);
//         //res.status(404).json({error:"not login"});
//     }
// });

module.exports = router;