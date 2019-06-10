const express = require('express');
const router = express.Router();
const User = require('../../models/NomalUser');
const Kakao_User = require('../../models/Kakao');
var Board = require('../../models/board');
var Comment = require('../../models/comment');
const crypto = require('crypto'); //Node.js 에서 제공하는 암호화 모듈

// mapping 
// Login
router.post('/login', function (req, res, next) {
  console.log('login router 입장');
  if (req.body.check === undefined) {
    User.findOne({ id: req.body.id, password: req.body.password }, function (err, user) {
      // 구문 error
      if (err) return res.status(500).json({ error: err });
      // User가 없으면 error
      if (!user) return res.json({ error: 'user not found' });
      req.session.user = user;
      res.redirect('/');
      console.log('로그인 성공!');
    });
  }
  else {
    res.render('main');
  }

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
        res.render('main', { sess: req.session });
        console.log('회원가입 성공!');
      }
      /*
      req.session.user = user;
      res.json(user);
      */
    });
  }
  else {
    console.log("카카오 회원가입 및 로그인");

    Kakao_User.findOne({ id: req.body.id }, function (err, user) {
      // 구문 error
      if (err) return res.status(500).json({ error: err });
      // User가 없으면 회원추가
      if (!user) {
        const kakao_user = new Kakao_User();
        kakao_user.id = req.body.id;
        kakao_user.nickname = req.body.nickname;
        kakao_user.save(function (err) {
          if (!err) {
            // result = 1 성공적응답, result = 2 실패
            res.json({ result: 1 });
            console.log('카카오 회원가입 성공!');
          }
        });
      }
      // User가 있으면 로그인 
      else {
        req.session.user.id = user.nickname;
        res.json({ result: 1 });
        //res.render('main', { sess: req.session });
        //res.redirect('/');
        console.log('카카오 로그인 성공!');
      }
    });
  }
});

//form action으로 들어온 요청에 대한 페이지 이동 응답이 없어서 에러 로그가 뜸
//주석 res.redirect나 res.render로 페이지 이동을 시키면 에러가 생기지 않음.
router.post('/anxiety', function (req, res, next) {
  console.log('불안에 들어옴');
  console.log(req.body);
  var sum = 0;
  for (key in req.body) {
    sum += parseInt(req.body[key]);
  }
  if (sum < 8) {
    //res.redirect('/');
    res.send("경미한 수준의 불안입니다. 일시적으로 불안할 수 있지만 친구들과 이야기를 한다든지의 행동을 통해 충분히 해결할 수 있습니다.");
  }
  if (9 <= sum && sum <= 15 ) {
    res.send("불안의 위험이 있습니다. 마음을 편안하게 가지고 상담과 치유를 통해 불안의 위험에서 벗어나길 바랍니다. 상담사 선생님을 찾아보세요.")
  }
  // if (9 <= sum && sum <= 17) {
  //   res.send("불안의 위험이 있습니다. 마음을 편안하게 가지고 상담과 치유를 통해 불안의 위험에서 벗어나길 바랍니다. 상담사 선생님을 찾아보세요.");
  // }
  else {
    res.send("극심한 불안에 시달리고 있습니다. 가까운 병원을 찾거나 상담을 통해 치료하시길 권장드립니다. 상담사 선생님을 찾아보세요.");
  }

  console.log(sum);
});

router.post('/depress', function (req, res, next) {
  console.log('우울에 들어옴');
  console.log(req.body);
  var sum = 0;
  for (key in req.body) {
    sum += parseInt(req.body[key]);
  }
  if (sum < 8) {
    res.send("경미한 수준의 우울입니다. 일시적인 우울감이 있을 수 있지만 친구들과 이야기를 한다든지 행동을 통해 충분히 해결할 수 있습니다.");
  }
  if (9 <= sum && sum <= 17) {
    res.send("우울의 위험이 있습니다. 마음을 편한하게 가지고 상담과 치유를 통해 우울 위험에서 벗어나길 바랍니다. 상담사 선생님을 찾아보세요.");
  }
  else {
    res.send("우울증이 의심됩니다. 가까운 병원을 찾거나 상담을 통해 치료하시길 권장드립니다. 상담사 선생님을 찾아보세요.");
  }

  console.log(sum);
});

router.post('/suicide', function (req, res, next) {
  console.log('자살에 들어옴');
  console.log(req.body);
  var sum = 0;
  for (key in req.body) {
    sum += parseInt(req.body[key]);
  }
  if (sum < 8) {
    //res.redirect('/');
    res.send("경미한 수준의 자살충동입니다. 현재의 삶에 만족하는 경향이 강하며, 현재를 즐기며 충분히 자살생각을 잠재울 수 있습니다.");
  }
  if (9 <= sum && sum <= 16 ) {
    res.send("자살충동이 종종 일어나는 상태입니다. 마음을 편안하게 가지고 상담과 치유를 통해 자살충동의 위험에서 벗어나길 바랍니다. 상담사 선생님을 찾아보세요.")
  }
  else {
    res.send("자주 자살을 생각하고 있는 상태입니다. 가까운 병원을 찾거나 상담을 통해 치료하시길 권장드립니다. 상담사 선생님을 찾아보세요.");
  }

  console.log(sum);
});

router.post('/alcoholic', function (req, res, next) {
  console.log('알코올 중독에 들어옴');
  console.log(req.body);
  var sum = 0;
  for (key in req.body) {
    sum += parseInt(req.body[key]);
  }
  if (sum < 11) {
    //res.redirect('/');
    res.send("술을 즐기면서 자제할 수 있는 수준입니다. 앞으로도 기분좋은 만큼만 술을 즐기세요.");
  }
  if (12 <= sum && sum <= 23 ) {
    res.send("경미한 수준의 알코올 중독입니다. 중독의 위험성은 적지만, 조금씩 절제하는 습관을 들이세요.24-35: 알코올 중독의 위험이 있습니다. 스스로 자제하는 방법과 상담을 통해서 알코올 중독의 위험에서 벗어나세요.")
  }
  else {
    res.send("심각한 알코올 중독이 의심됩니다. 가까운 병원을 찾거나 상담을 통해 치료하시길 권장드립니다. 상담사 선생님을 찾아보세요.");
  }

  console.log(sum);
});

module.exports = router;