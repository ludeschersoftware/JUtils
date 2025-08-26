import { randomInt } from "@ludeschersoftware/math";

export function CreateUniqHash(length: number): string {
    let hash: string = '';

    for (let i = 0; i < length; i++) {
        if (i % 4 === 0) {
            hash += String.fromCharCode(randomInt(65, 90)); // A-Z
        } else if (i % 3 === 0) {
            hash += String.fromCharCode(randomInt(97, 122)); // a-z
        } else if (i % 2 === 0) {
            hash += String.fromCharCode(randomInt(48, 57)); // 0-9
        } else {
            hash += '-';
        }
    }

    return hash;
}