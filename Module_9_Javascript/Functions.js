function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole');

  //default parameters

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  makeShoppingList();

  //return statement

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  const numOfMonitors = monitorCount(4, 5);
  console.log(numOfMonitors);

  //helper functions

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

  //function expressions

  const plantNeedsWater = function(day) {
    if (day == 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));

  //arrow functions

  const plantsNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  //concise arrow functions;

  const plantNeedsWaterrr = day => day === 'Wednesday' ? true : false;