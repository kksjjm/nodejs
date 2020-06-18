const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/main', (req, res) => {
    res.send([
        {
            'id': 1,
            'ap': '아침',
            'main': '김치찌게',
            'main_img': 'https://placeimg.com/64/64/any',
            'sub1': '제육볶음',
            'sub1_img': 'https://placeimg.com/64/64/any',
            'sub2': '미나리무침',
            'sub2_img': 'https://placeimg.com/64/64/any',
            'chef1': 'Tune',
            'chef2': '짱짱맨'
          },
          {
            'id': 2,
            'ap': '저녘',
            'main': '불고기',
            'main_img': 'https://placeimg.com/64/64/any',
            'sub1': '된장찌개',
            'sub1_img': 'https://placeimg.com/64/64/any',
            'sub2': '감자셀러드',
            'sub2_img': 'https://placeimg.com/64/64/any',
            'chef1': '에드워드',
            'chef2': '이윤복'
          }
    ])
});


app.listen(port, ( ()=> console.log(`Listening on port: ${port}`)));