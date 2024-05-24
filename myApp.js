require('dotenv').config()
var bodyParser = require("body-parser");
let express = require('express');
let app = express();

const path = require("path");
const indexPath = path.resolve("./views/index.html");


app.use((req, res, next) => {
	let string = req.method + " " + req.path + " - " + req.ip;
	console.log(string);
	next();
});

console.log("Hello World");


//app.get('/', function(req, res) {
//    res.send("Hello Express");
//  });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });


app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var message = 'Hello json';
  if ( process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
  }
  res.json({ "message": message });
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => { res.send({
      time: req.time
    });
  }
);

app.get("/:word/echo", (req, res) => {

  const { word } = req.params;
  res.json({
    echo: word
  });
});


app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // sailing gets smooth
  var { first: firstName, last: lastName } = req.query;
  // ill be there before I know it
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/name", function(req, res) {
  // Handle the data in the request dfbd
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});



















                                                                                        
                                                                                          
                                                                                          
//        =%@                    .                                                     
// -.    %@@.             @%-    *@@*     =-                    -@@                     
// *@%   *@@.             =@@*  *@@@@*   @@%                   *@%-                     
// %@* *@@-               *@@--@@**@@- *@@.                  *@@.      =@@=            
// =@@%@@@#.               =%@@%: .=@@%@#.                  *@@@#=: .*@@%=.            
// .@@@@.@@%                .**.    .**.                  .*@@*==@@@@@@=               
//  %@@  .@@%-                        .-----             -%@@.   -%@@=                 
//  =@@-   =@@%                   =%@@@@@@@@@@=-         .***.  -%@@*.                  
//   =@@-   .==                .*@@*::::.    -%@%=-          .*@@*:                     
//    =*-                    .*@%-.             =@@*         .**                        
//                          -@@%. =*        -*-   %@@                                   
//                         #@@=   @@        @@=   .@@=                                  
//                        =@@-    %@        *@=    *@@                                  
//                       *@@-                      =@@.                                 
//                      @@=                        @@=                                 
//                   .   @@=                 -:     @@=                                 
//.*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@       -@@-----*@@------=*********************=.   
// ------------%@@@@@@@=----------%@@        @@@@@@@@@@@@@@@@@@@@@@@@@%*************-   
//             @@@@*@@*          *@@         @@              -*@@@@@@@@@                
//             .-====:          .@@=         @@                :======-:                
//                              =@@          @@                                         
//                              %@%          @@                                         
//                              @@=          @@                                         
//                              @@=          @@                                         
//                              @@*         *@@                                         
//                             =@@        -@@=                                         
//                             :@@#:     -@@=                                          
//                              =@@*-.=@@%-                                           
//                               .*@@@@@=                                             
//                                  --.                                               
                                                                               





















 module.exports = app;
