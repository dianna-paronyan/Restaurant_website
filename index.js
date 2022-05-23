import express from "express";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import { Breakfast } from "./models/breakfastCards.js";
import { Appetizer } from "./models/appetizerCards.js";
import { Burger } from "./models/burgerCards.js";
import { Salad } from "./models/saladCards.js";
import { Soup } from "./models/soupCards.js";
import { Meal } from "./models/hotMealCards.js";
import { Pasta } from "./models/pastaCards.js";
import { Pizza } from "./models/pizzaCards.js";
import { Dessert } from "./models/dessertCards.js";
import { Coffee } from "./models/coffee.js";
import { Tea } from "./models/tea.js";
import { Juice } from "./models/juice.js";
import { Lemonad } from "./models/lemonad.js";
import { Coctail } from "./models/coctail.js";
import { Baverage } from "./models/baverage.js";

mongoose.connect("mongodb://localhost:27017/restaurantData");

let db = mongoose.connection;

db.once("open", () => console.log("Mongodb is connected"));
db.on("error", (err) => console.log(err));

const app = express();

app.use(express.static("frontfiles"));

app.use(express.static("views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // req.redirect("/frontFiles/index.html")
  res.render("index");
});

app.get("/reservation", (req, res) => {
  // req.redirect("/frontFiles/index.html")
  res.render("reservation");
});

app.post("/reservation", async (req, res) => {
  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "01234dianna@gmail.com",
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "01234dianna@gmail.com",
    to: `${req.body.email}`,
    subject: "Osterio Mario",
    text: `Հարգելի ${req.body.fullname} ${req.body.quantity}ի համար սեղանն ամրագրված է։ Մենք Ձեզ սիրով սպասում ենք ${req.body.date}-ին 
    ժամը ${req.body.time}-ին:`,
  });

  console.log("Message sent: %s", info.messageId);
  res.render("reservationRes", { msg: "Խնդրում ենք ստուգել էլ․ փոստը" });
});

app.get("/breakfast", (req, res) => {
  Breakfast.find({}, (err, breakfasts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("breakfast", {
        title: "Նախաճաշ",
        breakfasts: breakfasts,
      });
    }
  });
});

app.get("/appetizer", (req, res) => {
  Appetizer.find({}, (err, appetizers) => {
    if (err) {
      console.log(err);
    } else {
      res.render("appetizer", {
        title: "Նախուտեստ",
        appetizers: appetizers,
      });
    }
  });
});

app.get("/salad", (req, res) => {
  Salad.find({}, (err, salads) => {
    if (err) {
      console.log(err);
    } else {
      res.render("salad", {
        title: "Աղցաններ",
        salads: salads,
      });
    }
  });
});

app.get("/soup", (req, res) => {
  Soup.find({}, (err, soups) => {
    if (err) {
      console.log(err);
    } else {
      res.render("soup", {
        title: "Ապուրներ",
        soups: soups,
      });
    }
  });
});

app.get("/burger", (req, res) => {
  Burger.find({}, (err, burgers) => {
    if (err) {
      console.log(err);
    } else {
      res.render("burger", {
        title: "Բուրգեր",
        burgers: burgers,
      });
    }
  });
});

app.get("/hotMeal", (req, res) => {
  Meal.find({}, (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      res.render("hotMeal", {
        title: "Տաք ուտեստներ",
        meals: meals,
      });
    }
  });
});

app.get("/pasta", (req, res) => {
  Pasta.find({}, (err, pastas) => {
    if (err) {
      console.log(err);
    } else {
      res.render("pasta", {
        title: "Պաստա",
        pastas: pastas,
      });
    }
  });
});

app.get("/pizza", (req, res) => {
  Pizza.find({}, (err, pizzas) => {
    if (err) {
      console.log(err);
    } else {
      res.render("pizza", {
        title: "Պիցցա",
        pizzas: pizzas,
      });
    }
  });
});

app.get("/dessert", (req, res) => {
  Dessert.find({}, (err, desserts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("dessert", {
        title: "Աղանդեր",
        desserts: desserts,
      });
    }
  });
});

app.get("/coffee", (req, res) => {
  Coffee.find({}, (err, coffees) => {
    if (err) {
      console.log(err);
    } else {
      res.render("coffee", {
        title: "Սուրճ",
        coffees: coffees,
      });
    }
  });
});

app.get("/tea", (req, res) => {
  Tea.find({}, (err, teas) => {
    if (err) {
      console.log(err);
    } else {
      res.render("tea", {
        title: "Թեյ",
        teas: teas,
      });
    }
  });
});

app.get("/juice", (req, res) => {
  Juice.find({}, (err, juices) => {
    if (err) {
      console.log(err);
    } else {
      res.render("juice", {
        title: "Հյութեր",
        juices: juices,
      });
    }
  });
});

app.get("/lemonad", (req, res) => {
  Lemonad.find({}, (err, lemonads) => {
    if (err) {
      console.log(err);
    } else {
      res.render("lemonad", {
        title: "Լիմոնադներ",
        lemonads: lemonads,
      });
    }
  });
});

app.get("/coctail", (req, res) => {
  Coctail.find({}, (err, coctails) => {
    if (err) {
      console.log(err);
    } else {
      res.render("coctail", {
        title: "Կոկտեյլներ",
        coctails: coctails,
      });
    }
  });
});

app.get("/alcoholicBaverage", (req, res) => {
  Baverage.find({}, (err, baverages) => {
    if (err) {
      console.log(err);
    } else {
      res.render("alcoholicBaverage", {
        title: "Ալկոհոլային Խմիչքներ",
        baverages: baverages,
      });
    }
  });
});

app.listen(process.env.PORT);














// db.coffees.insertMany([
//     {
//         name:"Արևելյան սուրճ",
//         price: 500,
//     },
//     {
//         name:"Էսպրեսսո",
//         price: 800,
//     },
//     {
//         name:"Գլասե",
//         price: 1200,
//     },
//     {
//         name:"Լատե",
//         price: 1000,
//     },
//     {
//         name:"Կապուչինո",
//         price: 1000,
//     },
//     {
//         name:"Տաք շոկոլադ",
//         price: 900,
//     },
//     {
//         name:"Օրեո",
//         price: 1300,
//     },
// ])

// db.teas.insertMany([
//     {
//         name:"Նռան թեյ",
//         price: 1000,
//     },
//     {
//         name:"Թեյերի ընտրանի",
//         price: 1200,
//     },
//     {
//         name:"Հայկական թեյերի ընտրանի",
//         price: 1200,
//     },
//     {
//         name:"Սառը թեյերի ընտրանի",
//         price: 1000,
//     },
//     {
//         name:"Հնդկաձավարի թեյ",
//         price: 1300,
//     },

// ])

// db.juices.insertMany([
//     {
//         name:"Նարինջ",
//         price: 1500,
//     },
//     {
//         name:"  Արքայախնձոր",
//         price: 2300,
//     },
//     {
//         name:"Խնձոր",
//         price: 1300,
//     },
//     {
//         name:"Գազար",
//         price: 1200,
//     },
//     {
//         name:"Բանան",
//         price: 1500,
//     },
//     {
//         name:"Կիվի",
//         price: 1600,
//     },
//     {
//         name:"Նեխուր",
//         price: 1700,
//     },

// ])

// db.lemonads.insertMany([
//     {
//         name:"Ցիտրուսային",
//         price: 1400,
//     },
//     {
//         name:"Մանգո ելակ",
//         price: 1500,
//     },
//     {
//         name:"Հատապտղային",
//         price: 1500,
//     },
//     {
//         name:"Արևադարձային",
//         price: 1600,
//     },
//     {
//         name:"Լայմ նանա",
//         price: 1500,
//     },
//     {
//         name:"Կանաչ նարինջ",
//         price: 1500,
//     },

// ])

// db.coctails.insertMany([
//     {
//         name:"Կակադու",
//         price: 2300,
//     },
//     {
//         name:"Մադոնա",
//         price: 2500,
//     },
//     {
//         name:"Կիվի ռոմ",
//         price: 2600,
//     },
//     {
//         name:"Լորդ",
//         price: 3200,
//     },
//     {
//         name:"Մոհիտո",
//         price: 2700,
//     },
//     {
//         name:"Կոսմոպոլիտան",
//         price: 2900,
//     },
//     {
//         name:"Վիսկի սաուեր",
//         price: 2700,
//     },
//     {
//         name:"Բելինի",
//         price: 2800,
//     },
//     {
//         name:"Ռոյալ մարտինի",
//         price: 3300,
//     },
//     {
//         name:"Լոնգ այլնդ",
//         price: 3200,
//     },
//     {
//         name:"Սփեշլ Գուստո",
//         price: 7000,
//     },

// ])

// db.baverages.insertMany([
//     {
//         name:"Ռոմ Բակարդի",
//         price: 1500,
//     },
//     {
//         name:"Ռոմ Հավանա քլաբ 3",
//         price: 2400,
//     },
//     {
//         name:"Ջին Բիֆիտեր",
//         price: 1600,
//     },
//     {
//         name:"Ջին Հենդրիքս",
//         price: 2700,
//     },
//     {
//         name:"Թեքիլա Օլմեկա",
//         price: 2000,
//     },
//     {
//         name:"Թեքիլա Պատրոն Սիլվեր",
//         price: 4000,
//     },
//     {
//         name:"Վիսկի Ջեք Դենիլս (Honey)",
//         price: 2300,
//     },
//     {
//         name:"Վիսկի Մակալան 12",
//         price: 6000,
//     },
//     {
//         name:"Վիսկի Բալանտայնս",
//         price: 2400,
//     },
//     {
//         name:"Վիսկի Ջեք Դենիլս",
//         price: 2300,
//     },
//     {
//         name:"Վիսկի Բլեք Լեյբլ",
//         price: 2400,
//     },
//     {
//         name:"Վիսկի Չիվաս Ռեգալ 18",
//         price: 4500,
//     },
//     {
//         name:"Օղի Բելուգա",
//         price: 2500,
//     },
//     {
//         name:"Օղի Գրեյ Գուս",
//         price: 3000,
//     },
//     {
//         name:"Օղի Աբսալյուտ",
//         price: 1200,
//     },

//     {
//         name:"Օ-ԴԵ-ՎԻ Կալվադոս",
//         price: 2200,
//     },
//     {
//         name:"Օ-ԴԵ-ՎԻ Գրապպա",
//         price: 2000,
//     },

//     {
//         name:"Ամառո Ռամազոտտի",
//         price: 1300,
//     },
//     {
//         name:"Ամառո Յագերմաստեր",
//         price: 2000,
//     },
//     {
//         name:"Կոնյակ Արարատ 5",
//         price: 1500,
//     },
//     {
//         name:"Կոնյակ Ախթաամար",
//         price: 1500,
//     },
//     {
//         name:"Կոնյակ Հենեսի V S",
//         price: 2500,
//     },
//     {
//         name:"Կոնյակ Հենեսի V S O P",
//         price: 4500,
//     },
//     {
//         name:"Գարեջուր Ջերկի",
//         price: 1500,
//     },
//     {
//         name:"Գարեջուր Միլլեր",
//         price: 1300,
//     },
//     {
//         name:"Գարեջուր Հեյնիկեն",
//         price: 1400,
//     },
//     {
//         name:"Գարեջուր Լցնովի գարեջուր",
//         price: 1000,
//     },
// ])
