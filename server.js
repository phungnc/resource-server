var express = require('express');

var app = express();

app.get('/employees', function(req, res) {
  res.send(
    [
      {
        "id":"1",
        "name": "Pho Vinh Huy",
        "birthday": "1989",
        "gender": "male",
        "rank": "3.3",
        "skill": {
          "HTML": "8",
          "CSS": "8",
          "Javascript": "6",
          "Jade": "6",
          "Less": "6"
        },
        "project": ["Azure", "Z-Kai", "xhtml"]
      },
    {
      "id":"2",
      "name": "Nguyen Phi Ho",
      "birthday": "1986",
      "gender": "male",
      "rank": "3.0",
      "skill": {
        "HTML": "5",
        "CSS": "5",
        "Javascript": "5",
        "Jade": "5",
        "Less": "5"
      },
      "project": ["TOL", "xhtml"]
    },
    {
      "id":"3",
      "name": "Nguyen Tan Dat",
      "birthday": "1990",
      "gender": "male",
      "rank": "2.0",
      "skill": {
        "HTML": "3",
        "CSS": "3",
        "Javascript": "3",
        "Jade": "3",
        "Less": "3"
      },
      "project": ["Dejirire", "Azure", "Aimstar"]
    },
    {
      "id":"4",
      "name": "Nguyen Duc Hy",
      "birthday": "1990",
      "gender": "male",
      "rank": "2.0",
      "skill": {
        "HTML": "3",
        "CSS": "3",
        "Javascript": "3",
        "Jade": "3",
        "Less": "3"
      },
      "project": ["Dejirire", "Azure", "Aimstar"]
    },
    {
      "id":"5",
      "name": "Cao Thi Hong Hanh",
      "birthday": "1990",
      "gender": "female",
      "rank": "2.0",
      "skill": {
        "HTML": "3",
        "CSS": "3",
        "Javascript": "3",
        "Jade": "3",
        "Less": "3"
      },
      "project": ["TOL", "Azure", "Aimstar"]
    },
    {
      "id":"6",
      "name": "Nguyen Thi Phuong Dung",
      "birthday": "1992",
      "gender": "female",
      "rank": "2.0",
      "skill": {
        "HTML": "3",
        "CSS": "3",
        "Javascript": "3",
        "Jade": "3",
        "Less": "3"
      },
      "project": ["Azure", "Aimstar"]
    }
    ]
  )
});

app.listen(3000);
console.log('Listening on port 3000....');
