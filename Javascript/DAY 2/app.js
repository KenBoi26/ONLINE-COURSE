// Callbacks
// Function that is called by the handler

const print = (txt) => {
  console.log(txt);
};

const add = (a,b) => {
    const result = a + b;
    return result;
}

const multiply = (a,b) => {
    const result = a * b;
    return result;
}
const ans = 10;

const calculateBill = (a,b,cb) =>{
    const ans = add(a,b);
    const res = cb(ans,1.8);
    return res;
}

const foodBill = (baseAmount) => {
    return multiply(baseAmount, 1.05);
};

const result = calculateBill(400, 300, foodBill);
print(result);
