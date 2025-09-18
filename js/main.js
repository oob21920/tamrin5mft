function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}


function factorial(num) {
    if (num < 0) return "فاکتوریل برای عدد منفی تعریف نشده";
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


let input = parseInt(prompt("یک عدد وارد کنید: "));


if (isPrime(input)) {
    alert(input + " یک عدد اول است ✅");
} else {
    alert(input + " عدد اول نیست ❌");
}

alert("فاکتوریل " + input + " = " + factorial(input));
