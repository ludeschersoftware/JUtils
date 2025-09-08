import Result from "@ludeschersoftware/result";
import { Box } from "@ludeschersoftware/types";
export declare function CreateUniqHash(length: number): string;
export declare function HashValue(value: string): number;
export declare function EmptyBox(): Box;
export declare function ResolveAsync<T>(promise: Promise<T>): Promise<ReturnType<typeof Result.Ok<T>> | ReturnType<typeof Result.Err>>;
//# sourceMappingURL=index.d.ts.map