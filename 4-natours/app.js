const fs = require("fs");
const morgan = require("morgan");
const express = require("express");

const app = express();
//// logging middleware
app.use(morgan("dev"));

app.use(express.json());

////middlewares
// app.use((req, res, next)=> {
//     console.log('hello from middleware')
//     next()
// })

// app.use((req, res, next)=> {
//     req.requestTime = new Date().toISOString()
//     next()
// })
/////////////////////////////////////////////////////////////////

// send string to server
// app.get('/', (req, res) => {
//     res.status(200).send('hello from serev side');
// })

//  send json to server -> HTTP method , get method
// app.get('/', (req, res) => {
//     res.status(200).json({message: 'hello from serev side', app: 'NATOURS'});
// })

// first api -> get
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

/////////////// users

// const allUsers = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
// );
///////////////

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "OK",
    results: tours.length,
    data: {
      tours,
    },
  });
});

///// get the id of data from url path
/// /:id/:x/:y/:z? -> last one is optional
app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  // if (id > tours.length)
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

/// post
app.post("/api/v1/tours", (req, res) => {
  // console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours: newTour,
        },
      });
    }
  );
});

/////////Mounting the Routers
//////other way of
// app.route("/api/v1/tours").get().post() blah blah
// is...
//
// app.use("/api/v1/tours", tourRouter)
// const tourRouter = express.Router()
// tourRouter.route('/').post().get()  -> here we dont need to write full route bcz it parent has it!
// tourRouter.route('/:id').delete().get()

//// users
// const getAllUsers = (req, res) => {
//   res.status(200).json({
//     allUsers,
//   });
// };
// const createUser = (req, res) => {};

// app.route("/api/v1/users").get(getAllUsers).post(createUser);
// app
//   .route("/api/v1/users/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// app.post('/', (req, res) =>{
//     res.json({message: 'you can post to this endpoint....', app: 'NATOURS' });
// })

const port = 3000;
app.listen(port, () => {
  console.log("listening on port  " + port);
});

/////////////////////////////////////////////////////refactoring///////////////////////////////////////////////
///// we have this

// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json(
//         {
//             status: 'OK',
//             results: tours.length,
//             data: {
//                 tours
//             }
//         }
//     );
// })

/// changed to this

// const getAllTours = (req, res) => {
//     res.status(200).json(
//         {
//             status: 'OK',
//             results: tours.length,
//             data: {
//                 tours
//             }
//         }
//     );
// }

// app.get('/api/v1/tours',getAllTours)

/////////////// and now route!!!

// when we make changes like above, we have s.th like this:
//app.get('/api/v1/tours',getAllTours)
//app.get('/api/v1/tours/:id',getTour)
//app.get('/api/v1/tours/:id',updateTour)
//app.get('/api/v1/tours/:id',deleteTour)
//app.get('/api/v1/tours',createTour)

/// we can refactor it again!!!
// like these function:
// app
//     .route('/api/v1/tours')
//     .get(getAllTours)
//     .post(createTour)

// app
//    .route('/api/v1/tours/:id')
//    .patch(updateTour)
//    .delete(deleteTour)
