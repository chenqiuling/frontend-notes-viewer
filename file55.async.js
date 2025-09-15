"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5896],{40245:function(n,e,t){t.r(e),e.default=`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>\u65E5\u671F\u8F6C\u4E2D\u6587</title>
  </head>

  <body>
    <script>
      function changeDateToText(dateNumber, type) {
        if (type === 'week') {
          var weekStr = '\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D';
          return '\u661F\u671F' + weekStr[today.getDay()];
        }
        var dateString = '\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D';
        var result = '';
        var numArr = String(dateNumber).split('');
        if (type === 'year') {
          numArr.forEach(n => (result += dateString[n]));
          result += '\u5E74';
        } else {
          if (dateNumber < 10) {
            result = dateString[dateNumber];
          } else if (dateNumber < 20) {
            result = '\u5341' + dateString[dateNumber - 10];
          } else if (dateNumber < 30) {
            result = '\u4E8C\u5341' + dateString[dateNumber - 20];
          } else {
            result = '\u4E09\u5341' + dateString[dateNumber - 30];
          }
          result += type === 'month' ? '\u6708' : '\u65E5';
        }
        return result;
      }

      // \u83B7\u53D6\u5F53\u524D\u65E5\u671F
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var date = today.getDate();
      var week = today.getDay();
      document.write(
        '\u4ECA\u5929\u662F' +
          changeDateToText(year, 'year') +
          changeDateToText(month, 'month') +
          changeDateToText(date) +
          changeDateToText(week, 'week'),
      );
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
