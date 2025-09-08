import { randomInt } from "@ludeschersoftware/math";
import Result from "@ludeschersoftware/result";
export function CreateUniqHash(length) {
    let hash = '';
    for (let i = 0; i < length; i++) {
        if (i % 4 === 0) {
            hash += String.fromCharCode(randomInt(65, 90));
        }
        else if (i % 3 === 0) {
            hash += String.fromCharCode(randomInt(48, 57));
        }
        else {
            hash += String.fromCharCode(randomInt(97, 122));
        }
    }
    return hash;
}
export function HashValue(value) {
    let hash = 0;
    const len = value.length;
    for (let i = 0; i < len; i++) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}
export function EmptyBox() {
    return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
}
export async function ResolveAsync(promise) {
    return promise
        .then((data) => {
        return Result.Ok(data);
    })
        .catch((error) => {
        return Result.Err(error);
    });
}
;
//# sourceMappingURL=index.js.map