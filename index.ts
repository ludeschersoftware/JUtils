import { randomInt } from "@ludeschersoftware/math";
import Result from "@ludeschersoftware/result";
import { Box } from "@ludeschersoftware/types";

export function CreateUniqHash(length: number): string {
    let hash: string = '';

    for (let i = 0; i < length; i++) {
        if (i % 4 === 0) {
            hash += String.fromCharCode(randomInt(65, 90)); // A-Z
        } else if (i % 3 === 0) {
            hash += String.fromCharCode(randomInt(48, 57)); // 0-9
        } else {
            hash += String.fromCharCode(randomInt(97, 122)); // a-z
        }
    }

    return hash;
}

export function HashValue(value: string): number {
    let hash = 0;

    const len = value.length;

    for (let i = 0; i < len; i++) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0; // force 32-bit
    }

    return hash;
}

export function EmptyBox(): Box {
    return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
}

export async function ResolveAsync<T>(promise: Promise<T>): Promise<ReturnType<typeof Result.Ok<T>> | ReturnType<typeof Result.Err>> {
    try {
        const data = await promise;
        return Result.Ok(data);
    } catch (error) {
        return Result.Err(error);
    }
}