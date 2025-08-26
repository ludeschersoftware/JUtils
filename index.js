import { randomInt } from "@ludeschersoftware/math";
export function CreateUniqHash(length) {
    let hash = '';
    for (let i = 0; i < length; i++) {
        if (i % 4 === 0) {
            hash += String.fromCharCode(randomInt(65, 90));
        }
        else if (i % 3 === 0) {
            hash += String.fromCharCode(randomInt(97, 122));
        }
        else if (i % 2 === 0) {
            hash += String.fromCharCode(randomInt(48, 57));
        }
        else {
            hash += '-';
        }
    }
    return hash;
}
//# sourceMappingURL=index.js.map