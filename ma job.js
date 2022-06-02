// let x = 10;
// let y = 20;

// // const result = x +y;

// console.log(x + y);
// console.log(x * y);
// console.log(x - y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// console.log(x == y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);

// let z = 5
// console.log(++z);
// // y = y * z
// y *= z
// // x = x + y
// x += y
// console.log(x)

// b = '4'
// console.log(x+b)
// console.log(typeof x+b)
// console.log(typeof b+x)
// console.log(typeof (x+b))

// console.log(x==10 )


// const age = prompt("tell me son")

// if (age >= 18 && age < 60){
//     console.log("you are in ,come on")
// } 
// else if (age >= 60){
//     console.log("hey grandpa ,go do some pray")
// }
// else{
// console.log("fuck off kid")
// }

// if (12){console.log("ok")}
// console.log(Boolean(0))

// const day = Number(prompt("enter number of week"))

// switch(day%7){
//     case 0:
//         console.log("shanbe")
//         break;
//     case 1:
//         console.log("1shanbe")
//         break;
//     case 3:
//         console.log("2shanbe")
//         break;
//     case 4:
//         console.log("4shanbe")
//     case 5:
//         console.log("5shanbe")
//         break;
//     case 6:
//         console.log("jome")
//         break;
//     default:
//         console.log("ridi golam")
// }




// let counter = 9

// while(counter>0){

//     console.log("how much?");
//     counter--;
// }


<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>