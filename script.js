// Questions?

// How do we access the user's input?
console.log(document.getElementsByClassName("input_container"))


// How can we store the value of the bill?
// How can we write a function that calculates the tip amount based on bill and tip button selected

// How can we target tip amount and update it to the correct amount
// How can we target total and update the display

// Function that give the total amount per person






























// function calcTipSplitter(bill, numberOfPeople, tipPercentage) {
//     bill = parseFloat(bill);
//     numberOfPeople = parseInt(numberOfPeople);
//   ​
//     // calc tip amount per person
//     let tipPerPerson = (bill * tipPercentage) / numberOfPeople;
//     let totalTip = numberOfPeople * tipPerPerson;
//   ​
//     // calc total per person
//     let totalPerPerson = (bill + totalTip) / numberOfPeople;
//   ​
//     document.getElementById("tip-amount-pp").innerText =
//       "$" + tipPerPerson.toFixed(2);
//     document.getElementById("total-per-person-right").innerText =
//       "$" + totalPerPerson.toFixed(2);
//   ​
//     console.log("tip per person", tipPerPerson);
//     console.log("total per person", totalPerPerson);
//   }
//   ​
//   function getInputs() {
//     const bill = billInput.value;
//     console.log("bill", bill);
//   ​
//     if (isNaN(bill) == true) {
//       return (document.getElementById("bill").value = "Please enter a number");
//     }
//   ​
//     const numberOfPeople = numberOfPeopleInput.value;
//     console.log("number of people", numberOfPeople);
//   ​
//     const customTip = customInput.value * 0.01;
//   ​
//     console.log("custom tip", customTip);
//   ​
//     if (customTip) {
//       calcTipSplitter(bill, numberOfPeople, customTip);
//     } else {
//       buttons.forEach((button) => {
//         button.addEventListener("click", function () {
//           let tipPercentage = button.dataset.num;
//           console.log(button.dataset.num);
//           calcTipSplitter(bill, numberOfPeople, tipPercentage);
//         });
//       });
//     }
//   }
//   ​
//   const billInput = document.getElementById("bill");
//   billInput.addEventListener("change", getInputs);
//   ​
//   const numberOfPeopleInput = document.getElementById("number-of-people");
//   numberOfPeopleInput.addEventListener("change", getInputs);
//   ​
//   const customInput = document.getElementById("custom");
//   customInput.addEventListener("change", getInputs);
//   ​
//   let buttons = document.querySelectorAll(".button");
//   console.log(buttons);
//   ​
//   const reset = document.getElementById("reset-btn");
//   reset.addEventListener("click", function () {
//     document.getElementById("bill").value = "";
//     document.getElementById("number-of-people").value = "";
//     document.getElementById("custom").value = "";
//     document.getElementById("tip-amount-pp").innerText = "$0.00";
//     document.getElementById("total-per-person-right").innerText = "$0.00";
//   });


  let buttons = document.querySelectorAll(".row")[0].children;
  console.log(typeof buttons);

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function () {
      let tipPercentage = parseInt(button.innerText,10) * .01;
      
      console.log(tipPercentage);
    });
  });

  