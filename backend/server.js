const express =require( 'express');

const mongoose =require( 'mongoose');

const config =require( './config');
const userRoute =require( './routes/userRoute');
const productRoute =require( './routes/productRoute');
const orderRoute =require( './routes/orderRoute');

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(console.log("database is running"))
.catch((error) => console.log(error.reason));


const app = express();
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});



app.listen(config.PORT, () => { console.log('Server started at http://localhost:5000'); });
