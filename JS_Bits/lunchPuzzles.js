const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log(`No lunches to remove.`);
  } else {
    let str = arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
  }
  return arr;  
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log(`No lunches to remove.`);
  } else {
    let str = arr.shift();
    console.log(`${str} removed from the start of the lunch menu.`);
  }
  return arr;  
}

function getRandomLunch(arr) {
  let arrSize = arr.length;
  let randomInt = Math.floor(Math.random() * (arrSize));
  if (arr.length === 0) {
    console.log(`No lunches available.`)
  } else {
    console.log(`Randomly selected lunch: ${arr[randomInt]}`);
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log(`The menu is empty.`)
  } else {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
}

