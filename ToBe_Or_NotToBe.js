// To Be Or Not to be

var expect = function(val) {
    return {
        toBe: function(expected){
            if (val === expected) {
                return true
            }
            else {
                throw new Error ("Not Equal");
            }
        },
        notToBe: function(expected){
            if (val !== expected) {
                return true
            }
            else {
                throw new Error ("Equal");
            }
        }
    }
}

try {
    expect(10).toBe(10);    
    expect(10).toBe(20);    
} catch (e) {
    console.error(e.message);  
}

try {
    expect(10).notToBe(20);  
    expect(10).notToBe(10);  
} catch (e) {
    console.error(e.message);  
}