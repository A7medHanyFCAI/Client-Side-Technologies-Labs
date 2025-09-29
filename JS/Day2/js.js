// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var x = "258.90";
var y = parseInt(x);
var z = parseFloat(x);
console.log(y, z);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var num = 7.45678;
var ans = +num.toFixed(2);
console.log(ans);

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log(isNaN('abc'));
console.log(isNaN(""));
// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
var num1 = 0.1;
var num2 = 0.2;
console.log((num1 + num2) === 0.3);
console.log((num1 + num2).toFixed(1));

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function parseFun(s) {

    var res = parseInt(s);
    if (isNaN(res)) {
        return null;
    }
    else {
        return res
    }
}
var s = "120px";
console.log(parseFun(s));
// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value) {

    return typeof value === 'number' && value === value && value !== Infinity && value !== -Infinity;
}

//Passing examples
console.log(isFiniteNumber(0));
console.log(isFiniteNumber(3.14));
console.log(isFiniteNumber(-42));
console.log(isFiniteNumber(1e308));

//Failing examples
console.log(isFiniteNumber("123"));
console.log(isFiniteNumber(NaN));
console.log(isFiniteNumber(Infinity));
console.log(isFiniteNumber(null));

// 7. Remove leading and trailing spaces from the string "   hello world  ".
var x = "   hello world  ";
console.log(x.trim());

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
x = "javascript";
console.log(x.slice(4))
console.log(x.substring(4))
// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
x = "Banana Mania".toLowerCase();
console.log(x.split('a').length - 1)

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {

    var reversed_s = "";
    for (var i = s.length - 1; i >= 0; i--) {
        reversed_s += s[i]
    }
    return reversed_s;
}
var s = "Ahmed";
console.log(reverseString(s));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
    var lst = sentence.split(" ");
    for (var i = 0; i < lst.length; i++) {
        lst[i] = lst[i][0].toUpperCase() + lst[i].slice(1);
    }
    return lst.join(" ")
}
var sentence = "hello there friend";
console.log(capitalizeWords(sentence));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
x = "https://example.com/path/to/page";
var start = x.indexOf('//') + 2;
var end = x.indexOf('/', start);
console.log(end);
console.log(x.slice(start, end));
// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    start = 0
    end = needle.length
    while (end <= haystack.length) {
        if (haystack.slice(start, end) === needle) {
            return start;
        }
        else {
            start += 1;
            end += 1;
        }
    }
    return -1
}
console.log(naiveIndexOf("hello world", "world"));
console.log(naiveIndexOf("abcdef", "gh"));
// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
// Fixed Code
var s = 'hello';
if (s.toUpperCase() === 'HELLO') {
    console.log('match');
}
// The Explanation => - used '=' (assignment operator) instead of '==='
//                    - forgot the '()' after toUperCase function
// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
console.log(arr);

// 16. Remove the last element and store it. Remove the first element and store it.
var last = arr.pop();
var first = arr.shift();
console.log(first, last);

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
arr = [10, 20, 30, 40, 50];
var newArr = arr.slice(0, 3);
console.log(newArr);
// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b');
console.log(arr);
// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); //return elements from index 1 to 3
console.log(arr);
console.log(arr.splice(1, 3)); // starting from index 1 remove 3 elements (the original array will be modified)
console.log(arr);
// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var sparseArr = [];
sparseArr[7] = 'A';
console.log(sparseArr.length)
// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            res.push(arr[i]);
        }
    }
    return res;
}
arr = [0, "", NaN, null, undefined, 1, 2, 3, 4, 5]
console.log(compact(arr))


// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(a) {
    var res = [];
    for (var i = 0; i < a.length; i++) {
        res.push(a[i]);
    }
    return res
}
arr = [1, 2, 3, 4];
console.log(deepClone1D(arr));
console.log(deepClone1D(arr) === arr);
// 23. Map [1,2,3] to their squares using map.
arr = [1, 2, 3];
var res = arr.map(function (num) {
    return num * num;
}
)
console.log(res);
// 24. Filter [5,10,15,20] to keep values >= 12.
arr = [5, 10, 15, 20];
res = arr.filter(function (num) {
    return num >= 12;
})
console.log(res)
// 25. Reduce [2,4,6] to product.
arr = [2, 4, 6];
res = arr.reduce(function (acc, num) {
    return acc * num;
}, 1)
console.log(res)
// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
    var res = a.reduce(function (acc, num) {
        return acc + num
    }, 0);
    return res;
}
function arraySumLoop(a) {
    var res = 0;
    for (var i = 0; i < a.length; i++) {
        res += a[i];
    }
    return res
}
arr = [1, 2, 3]
var res1 = arraySum(arr);
var res2 = arraySumLoop(arr)
console.log(res1 === res2);

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
function firstLetter(lst) {
    var res = [];
    for (var i = 0; i < lst.length; i++) {
        res.push(lst[i][0]);
    }
    return res
}
arr = ['Ali', 'Sara', 'Kareem'];
console.log(firstLetter(arr));
// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function noDup(lst) {
    var res = [];
    res.push(lst[0]);
    for (var i = 1; i < lst.length; i++) {
        var found = false;
        for (var j = 0; j < res.length; j++) {
            if (lst[i] === res[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            res.push(lst[i]);
        }
    }
    return res;
}
arr = [1, 1, 2, 2, 3, 4, 5, 'ahmed', 'ahmed', 'hany'];
console.log(noDup(arr));
// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(lst) {
    var res = [];
    for (var i = 0; i < lst.length; i++) {
        if (typeof lst[i] === 'object') {
            for (var j = 0; j < lst[i].length; j++) {
                res.push(lst[i][j]);
            }
        }
        else {
            res.push(lst[i]);
        }
    }
    return res
}
arr = [1, [2, 3], [4], 5];
console.log(flatten1(arr));

// 31. Create object person with name and age; add a new property city after creation.
var person = {
    "name": "Ahmed",
    "age": 22
}
person['city'] = "Cairo";
console.log(person);
// 32. Access a property via bracket notation with a dynamic key variable.
x = "name";
console.log(person[x]);
// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
    var count = 0;
    for (var c in obj) {
        count += 1
    }
    return count
}
console.log(countKeys(person));
// 39. List (as comments) 5 different values that coerce to false in ES5.
/*
   - 0
   - ""
   - null
   - undefined
   - NaN
*/
// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
    return v === true || v === 'true' || v === 1 || v === '1';
}
console.log(safeToBoolean(true));
console.log(safeToBoolean('true'));
console.log(safeToBoolean(1));
console.log(safeToBoolean('1'));

// 41. Create a Date for Jan 1, 2025 00:00 local.
var d = new Date(2025, 0, 1);
console.log(d.toString());

// 42. Get the current year from new Date().
var currYear = new Date().getFullYear();
console.log(currYear);
// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
    var milli = 1000 * 60 * 60 * 24;
    var diff = Math.abs(d2.getTime() - d1.getTime())
    return Math.floor(diff / milli);
}
var a = new Date(2025, 0, 1);
var b = new Date(2025, 0, 10);
console.log(daysBetween(a, b));
// 44. Generate a random integer 1..100.
x = parseInt(Math.random() * 100 + 1);
console.log(x);
// 45. Round 4.567 to nearest integer, round down, and round up (three results).
x = 4.567;
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x));
// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
    var res = [];
    for (var i = 0; i < n; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        res.push(num);
    }
    return res;
}
console.log(randomIntArray(10, 10, 20));
// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
    var res = {};
    var items = str.split(";");
    for (var i = 0; i < items.length; i++) {
        var pair = items[i].split(':');
        res[pair[0]] = parseFloat(pair[1]);
    }
    return res;
}
x = "Apple:2.50;Orange:1.75;Banana:3"
console.log(parsePriceList(x));
// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
    return mixedArray.filter(function (elem) {
        return typeof elem === 'number' && isFinite(elem);
    }).sort(function (x, y) {
        return x - y;
    });
}
var input = [20, 10, 'Ahmed', -1, undefined, null, 15, 5];
var output = filterAndSortNumbers(input);
console.log(output);