"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1445],{33606:function(t,n,e){e.r(n),n.default=`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>\u91D1\u989D\u8F6C\u5927\u5199</title>
  </head>

  <body>
    <script>
      function transformMoneyUpper(n) {
        if (!n || isNaN(n)) return '';
        const fraction = ['\u89D2', '\u5206'];
        const digit = [
          '\u96F6',
          '\u58F9',
          '\u8D30',
          '\u53C1',
          '\u8086',
          '\u4F0D',
          '\u9646',
          '\u67D2',
          '\u634C',
          '\u7396',
        ];
        const unit = [
          ['\u5143', '\u4E07', '\u4EBF'],
          ['', '\u62FE', '\u4F70', '\u4EDF'],
        ];
        const head = n < 0 ? '\u6B20' : '';
        n = Math.abs(n);
        let s = '';
        for (let i = 0; i < fraction.length; i++) {
          s += (
            digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
          ).replace(/\u96F6./, '');
        }
        s = s || '\u6574';
        n = Math.floor(n);
        for (let i = 0; i < unit[0].length && n > 0; i++) {
          let p = '';
          for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }
          s = p.replace(/(\u96F6.)*\u96F6$/, '').replace(/^$/, '\u96F6') + unit[0][i] + s;
        }
        return (
          head +
          s
            .replace(/(\u96F6.)*\u96F6\u5143/, '\u5143')
            .replace(/(\u96F6.)+/g, '\u96F6')
            .replace(/^\u6574$/, '\u96F6\u5143\u6574')
        );
      }

      document.write(
        '1234567890 \u8F6C\u6362\u6210\uFF1A' + transformMoneyUpper(1234567890) + '<br/>',
      );
      document.write(
        '-5678.90 \u8F6C\u6362\u6210\uFF1A' + transformMoneyUpper(-5678.9) + '<br/>',
      );
      document.write("'1234' \u8F6C\u6362\u6210\uFF1A" + transformMoneyUpper('1234') + '<br/>');
      document.write("'abc' \u8F6C\u6362\u6210\uFF1A" + transformMoneyUpper('abc') + '<br/>');
      document.write(
        'undefined \u8F6C\u6362\u6210\uFF1A' + transformMoneyUpper(undefined) + '<br/>',
      );
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
