"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8930],{76808:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u5B98\u65B9\u63D0\u4F9B\u4E86 500M \u7684[\u514D\u8D39\u4E91\u6570\u636E\u5E93](https://www.mongodb.com/try)\u53EF\u4EE5\u4F7F\u7528\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5B66\u4E60\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\u672C\u5730\u6570\u636E\u5E93\u3002

MongoDB \u76F8\u5173\u7684 [Mongoose](https://github.com/Automattic/mongoose) \u662F\u8BBE\u8BA1\u7528\u4E8E\u5F02\u6B65\u73AF\u5883\u7684 MongoDB \u5BF9\u8C61\u5EFA\u6A21\u5DE5\u5177\uFF0C\u56E0\u4E3A\u6682\u672A\u5B66\u4E60\uFF0C\u6240\u4EE5\u672C\u7B14\u8BB0\u6682\u4E0D\u603B\u7ED3 Mongoose \u7528\u6CD5\u3002

[\u5B98\u65B9\u6587\u6863](https://docs.mongodb.com/guides/server/drivers/)

[\u6559\u7A0B\u5730\u5740](https://www.runoob.com/nodejs/nodejs-mongodb.html)

### \u4E0B\u8F7D\u4F9D\u8D56

\`\`\`
yarn add mongodb
\`\`\`

### \u8FDE\u63A5\u6570\u636E\u5E93

\`\`\`js
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, conn) {
  if (err) throw err;
  console.log('\u6570\u636E\u5E93\u5DF2\u8FDE\u63A5\uFF01');
  // \u5982\u679C\u6570\u636E\u5E93\u4E0D\u5B58\u5728\uFF0CMongoDB \u5C06\u521B\u5EFA\u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5
  var dbo = conn.db('frontend-notes');
  // TODO \u6267\u884C\u64CD\u4F5C
});
\`\`\`

### \u521B\u5EFA\u96C6\u5408\uFF08\u5728\u6267\u884C\u63D2\u5165\u3001\u67E5\u8BE2\u7B49\u64CD\u4F5C\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u5E93\u548C\u96C6\u5408\uFF0CMongoDB \u4F1A\u81EA\u52A8\u521B\u5EFA\u6570\u636E\u5E93\u548C\u96C6\u5408\uFF09

\`\`\`js
if (!dbo) {
  dbo.createCollection('comment', function(err, res) {
    if (err) throw err;
    console.log('\u96C6\u5408\u521B\u5EFA\u6210\u529F\uFF01');
    conn.close();
  });
}
\`\`\`

### \u63D2\u5165\u6570\u636E \u5982\u679C\u6CA1\u6709\u6307\u5B9A\\_id \u5B57\u6BB5\uFF0Cmongo \u4F1A\u81EA\u52A8\u751F\u6210\\_id\uFF0C\u7C7B\u578B\u4E3A ObjectID

\`\`\`js
var testData = [
  {
    title: 'react',
    comment: '\u975E\u5E38\u597D',
  },
  {
    title: 'vue',
    comment: '\u8FD8\u4E0D\u9519',
  },
];
dbo.collection('comment').insertMany(testData, function(err, res) {
  if (err) throw err;
  console.log('\u6570\u636E\u63D2\u5165\u6210\u529F\uFF01', res);
  conn.close();
});
\`\`\`

### \u67E5\u8BE2\u6570\u636E

\`\`\`js
var whereStr = { title: 'react' };
dbo
  .collection('comment')
  .find(whereStr)
  .toArray(function(err, res) {
    if (err) throw err;
    console.log("\u67E5\u8BE2'title'\u7B49\u4E8E'react'\u7684\u6570\u636E", res);
    conn.close();
  });
\`\`\`

### \u66F4\u65B0\u6570\u636E

\`\`\`js
var updateStr = { $set: { comment: '\u5199\u5F97\u975E\u5E38\u597D' } };
// \u66F4\u65B0\u6570\u636E updateOne \u66F4\u65B0\u4E00\u6761\u6570\u636E updateMany \u66F4\u65B0\u591A\u6761\u6570\u636E
dbo.collection('comment').updateOne(whereStr, updateStr, function(err, res) {
  if (err) throw err;
  console.log('\u6570\u636E\u66F4\u65B0\u6210\u529F\uFF01', res, '\u66F4\u65B0\u6761\u6570\uFF1A', res.result.nModified);
  conn.close();
});
\`\`\`

### \u5220\u9664\u6570\u636E deleteOne \u5220\u9664\u4E00\u6761\u6570\u636E deleteMany \u5220\u9664\u591A\u6761\u6570\u636E

\`\`\`js
dbo.collection('comment').deleteOne(whereStr, function(err, res) {
  if (err) throw err;
  console.log('\u6570\u636E\u5220\u9664\u6210\u529F\uFF01', '\u5220\u9664\u6761\u6570\uFF1A', res.result.n);
  conn.close();
});
\`\`\`

### \u5176\u4ED6\u64CD\u4F5C\uFF08\u6392\u5E8F\u3001\u5206\u9875\u3001\u8DF3\u8FC7\uFF09

\`\`\`js
var mySort = { comment: 1 };
dbo
  .collection('comment')
  .find()
  // \u6307\u5B9A\u8DF3\u8FC7\u6761\u6570 skip() \u8BE5\u65B9\u6CD5\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u6307\u5B9A\u4E86\u8DF3\u8FC7\u7684\u6761\u6570\u3002
  .skip(1)
  // \u67E5\u8BE2\u5206\u9875 limit() \u8BE5\u65B9\u6CD5\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u6307\u5B9A\u4E86\u8FD4\u56DE\u7684\u6761\u6570\u3002
  .limit(2)
  // \u6392\u5E8F \u4F7F\u7528 sort() \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u89C4\u5B9A\u662F\u5347\u5E8F(1)\u8FD8\u662F\u964D\u5E8F(-1)\u3002
  .sort(mySort)
  .toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    conn.close();
  });
\`\`\`

### \u5220\u9664\u96C6\u5408\uFF08\u5220\u9664\u8868\uFF09

\`\`\`js
dbo.collection('comment').drop(function(err, delOK) {
  // \u6267\u884C\u6210\u529F delOK \u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false
  if (err) throw err;
  if (delOK) console.log('\u96C6\u5408\u5DF2\u5220\u9664\uFF01');
  conn.close();
});
\`\`\`

\u5B8C\u6574\u9879\u76EE\u793A\u4F8B\uFF1A

\u9879\u76EE\u76EE\u5F55\u7ED3\u6784

\`\`\`
|__app.js
|__db.js
\`\`\`

\u542F\u52A8\u670D\u52A1\uFF1A

\`\`\`
node app.js // node \u9879\u76EE\u6587\u4EF6\u66F4\u65B0\u540E\u9700\u8981\u624B\u52A8\u91CD\u542F\u670D\u52A1
\u6216
npx nodemon app.js // nodemon \u5C06\u76D1\u542C node \u9879\u76EE\u6587\u4EF6\u66F4\u65B0\u5E76\u81EA\u52A8\u91CD\u542F\u670D\u52A1
\`\`\`

db.js

\`\`\`js
var MongoClient = require('mongodb').MongoClient;
var database_uri = 'mongodb://localhost:27017';
var database_name = 'frontend-notes';

const _connectDB = function(cb) {
  MongoClient.connect(database_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(conn => {
      console.log('\u6570\u636E\u5E93\u5DF2\u8FDE\u63A5\uFF01');
      var dbo = conn.db(database_name);
      cb(dbo);
    })
    .catch(err => {
      throw err;
    });
};

const insertOne = function(cName, data, cb) {
  // \u6CE8\u610F\uFF1A\u8FD9\u91CCtoLocaleString()\u5982\u679C\u4E0D\u52A0\u53C2\u6570\uFF0C\u4F20\u7684\u503C\u4F1A\u53D8\u6210\u8FD9\u79CD\u683C\u5F0F'2021-1-27 5:02:53 \u251CF10: PM\u2524'
  const insertData = {
    time: new Date().toLocaleString('zh', { hour12: false }),
    ...data,
  };
  console.log('----------\u63D2\u5165\u7684\u6570\u636E\uFF1A', insertData);
  _connectDB(db => {
    db.collection(cName).insertOne(insertData, function(err, res) {
      if (!err) console.log('\u6570\u636E\u63D2\u5165\u6210\u529F\uFF01');
      cb(err, res);
    });
  });
};

const getAllData = function(cName, query, cb) {
  console.log('----------\u67E5\u8BE2\u7684\u6761\u4EF6\uFF1A', query);
  _connectDB(db => {
    db.collection(cName)
      .find(query)
      .toArray(function(err, res) {
        if (!err) console.log('\u6570\u636E\u83B7\u53D6\u6210\u529F\uFF01');
        cb(err, res);
      });
  });
};

module.exports = {
  insertOne,
  getAllData,
};
\`\`\`

app.js\uFF1A

\`\`\`js
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dbData = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));

// \u5904\u7406post\u6570\u636E
app.use(bodyParser.json());

// \u8DE8\u57DF\u8BBE\u7F6E
app.use((req, res, next) => {
  //\u5224\u65AD\u8DEF\u5F84
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true, // \u5141\u8BB8\u540E\u7AEF\u53D1\u9001cookie
      'Access-Control-Allow-Origin': req.headers.origin || '*', // \u8BBE\u7F6E\u53EF\u4EE5\u8BBF\u95EE\u7684\u57DF\u540D
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', // \u8BBE\u7F6E\u8BF7\u6C42\u5934\u683C\u5F0F\u548C\u7C7B\u578B
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS', // \u5141\u8BB8\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u5F0F
      'Content-Type': 'application/json; charset=utf-8', // \u9ED8\u8BA4\u4E0E\u5141\u8BB8\u7684\u6587\u672C\u683C\u5F0Fjson\u548C\u7F16\u7801\u683C\u5F0F
    });
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next();
});

// \u63D2\u5165\u6570\u636E\u63A5\u53E3
app.post('/insertComment', (req, res, next) => {
  dbData.insertOne('comment', req.body, (err, result) => {
    const data = err
      ? { code: 0, message: err instanceof Object ? JSON.stringify(err) : err }
      : { code: 200, result };
    return res.send(data);
  });
});

// \u67E5\u8BE2\u6570\u636E\u63A5\u53E3
app.get('/getComment', (req, res, next) => {
  const articleId = Number(req.query.articleId);
  dbData.getAllData('comment', { articleId }, (err, result) => {
    const data = err
      ? { code: 0, message: err instanceof Object ? JSON.stringify(err) : err }
      : { code: 200, result };
    return res.send(data);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
\`\`\`

\u9875\u9762\u8C03\u7528\u63A5\u53E3

\`\`\`js
const requestInstance = new Request('http://localhost:3000/insertComment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    comment: '\u6D4B\u8BD5\u6570\u636E',
  }),
});
setSubmitting(true);
fetch(requestInstance)
  .then(res => {
    if (res && res.status === 200) {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    } else {
      message.error('\u63D0\u4EA4\u5931\u8D25\uFF01');
    }
  })
  .catch(err => {
    message.error('\u63D0\u4EA4\u5931\u8D25\uFF01');
  });
\`\`\`

\u6548\u679C\u5982\u56FE\uFF1A

![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_mongodb.png)
`}}]);
