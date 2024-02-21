function countSubstring(mainString, substring) {
    let count = 0;
    let sub = "";
    let need_sub = false;

    for (let i = 0; i < mainString.length; i++) {
        if (mainString[i] === substring[0]) {
            need_sub = true;
        }
        if (need_sub) {
            if (sub.length == substring.length) {
                sub = "";
                need_sub = false;
            } else {
                sub += mainString[i];
            }
            if (sub == substring) {
                count++;
                sub = "";
                need_sub = false;
            }
        }
    }
    return count;
}

// Приклад використання
let mainString = "This is a some interesting text that is got fot testing counting";
let substring = "is";
let result = countSubstring(mainString, substring);
console.log('Кількість входжень підстроки: ' + result);
