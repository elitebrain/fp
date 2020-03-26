const express = require("express");
const app = express();

app.use("/", (req, res) => {
  console.log("~~~~~~~~~~~~");
  res.send(`<!DOCTYPE html>
  <html>
  <head>
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '520982495231381');
    fbq('track', 'PageView');
  </script>
  <!-- End Facebook Pixel Code -->
  </head>
  <body>
  <div>Hello</div>
  </body>
  </html>`);
});

app.listen(4000, () => {
  console.log("listening 4000");
});
