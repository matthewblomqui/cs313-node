function get_math(req, res) {
   sum = Number(req.query.num1) + Number(req.query.num2)
   res.render('pages/calcResults', {num1: req.query.num1, num2: req.query.num2, sum: sum})
}

function lookUp(stuff) {
   if (stuff <= 1) {
      return 0.55
   } else if (stuff <= 2) {
      return 0.70
   } else if (stuff <= 3) {
      return 0.85
   } else if (stuff <= 3.5) {
      return 1.00
   }
}

function calc_rate(req, res) {
   console.log(req.query)
   let weight = Number(req.query.oz)
   let mail = req.query.mail
   let upgrade = "hidden"
   let price = 0.00

   // Check if upgrade is needed
   if (weight > 3.5 && (mail == 'stamp' || mail == 'meter')) {
      mail = 'flat'
      upgrade = ""
   }

   // Calc Price for type of mail
   if (mail == 'stamp') {
      price = lookUp(weight).toFixed(2) //console.log(lookUp(weight))
      mail = 'Letters (Stamped)'
   } else if (mail == 'meter') {
      price = lookUp(weight).toFixed(2) - 0.05 // console.log((lookUp(weight) - 0.05))
      mail = 'Letters (Metered)'
   } else if (mail == 'flat') {
      let num = Math.ceil(weight) - 1
      price = (1.00 + num * 0.2).toFixed(2) // console.log((1.00 + num * 0.2).toFixed(2))
      mail = 'Large Envelopes (Flats)'
   } else {
      mail = 'First-Class Package Service - Retail'
      switch (Math.ceil(Number(req.query.oz))) {
         case 1:
         case 2:
         case 3:
         case 4:
            price = 3.8 // console.log(3.80)
            break
         case 5:
         case 6:
         case 7:
         case 8:
            price = 4.6 // console.log(4.60)
            break
         case 9:
         case 10:
         case 11:
         case 12:
         case 13:
            price = 5.3 // console.log(5.30)
            break
         default:
            price = 5.9 // console.log(5.90)
            break;
      }
   }

   console.log(Number(price).toFixed(2))
   // Off to the results page
   res.render('pages/postalResults', { price: Number(price).toFixed(2), mail: mail, upgrade: upgrade} )
}

module.exports = { get_math: get_math, calc_rate: calc_rate };
