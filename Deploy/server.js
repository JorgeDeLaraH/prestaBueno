const express = require('express');
const path = require('path');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { AppServerModule } = require('../dist/presta-bueno/server/main');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
  providers: [
    provideModuleMap(require('../dist/presta-bueno/server/main'))
  ]
}));

app.set('view engine', 'html');
app.set('views', path.join(path.resolve(), 'dist/presta-bueno/browser'));

app.use(express.static(path.join(path.resolve(), 'dist/presta-bueno/browser')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
