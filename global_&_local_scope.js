
// let a = 10;
// const b = 20;
// var c = 30;

const a = 200 ;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("inner.value: " + a)
}

console.log(a)
// console.log(b)
console.log(c)


function one () {
  userName = "Ali Yahya"
  
  function two () {
    websiteName = "CodebyAliyah"
    console.log(userName)
    console.log(websiteName)
  }
}
  // *yehan pr websiteName kbi be print nahi ga hum sirf parent
  // ka varible child ma print kr sakty hyn*  *child ko parent ma nahi*
  // console.log(WebsiteName) ko function two () ma print krvana hu ga.

  // console.log(websiteName)
//   two()
//   console.log(userName)
// }

// one()

// // if_else_Scope 




if (true) {
  const userName = "Ali Yahya"
  if(userName==="Ali Yahya") {
    const websiteName = "CodebyAliyah"
    console.log(websiteName)
    console.log(userName)
  }
}

  console.log(userName)
  // isetrha hum yehan pr websiteNmae ko nahi access kr sakty q k uska 
  // scope child ha aur hum child ko parent ma nahi access kr sakty hyn.
  // hum userName ko child ma access kr sakty hyn q k wo parent ha iska.
  console.log(websiteName)
// }

console.log(userName)

// ********** Interseting notes ************ //

console.log (addOne(5))

function addOne (num1) {
  return num1 + 1 ;
}
// is sorat ma hum function ko execute kr sakty hynn 
console.log (addOne(5))


// ***
console.log (addOne(5))

const addTwo = function (num2) {
  return num2 + 1
}

// is sorat ma agr hum pehly call kry gy to wo nahi chly ga 
// ****** JavaScript ma isko hoisting kehty hyn.













