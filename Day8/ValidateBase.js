function validateBase(numStr, base) {
    if (typeof numStr !== "string" || typeof base !== "number") return false;
    if (base < 2 || base > 32 || !Number.isInteger(base)) return false;
    s = numStr.trim();
    if (s.startsWith("+")) s = s.slice(1);
    if (s.length === 0) return false;
    s = s.toUpperCase();
    for (const ch of s){
        const code = ch.charCodeAt(0);
        let val;
        if (code >= 48 && code <= 57){
            val = code - 48
        }else if(code >= 65 && code <= 90){
            val = 10 + (code - 65);
        }else{
            return false;
        }
        if (val >= base) return false;
    }
    return true
}

re = validateBase("+12a3", 8)
console.log(re)