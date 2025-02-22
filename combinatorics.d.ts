/**
 * combinatorics.js
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  @author: Dan Kogai <dankogai+github@gmail.com>
 *
 *  References:
 *  @link: http://www.ruby-doc.org/core-2.0/Array.html#method-i-combination
 *  @link: http://www.ruby-doc.org/core-2.0/Array.html#method-i-permutation
 *  @link: http://en.wikipedia.org/wiki/Factorial_number_system
 */
export declare const version = "1.5.7";
/**
 * BigInt Workaround
 *
 * https://github.com/streamich/memfs/issues/275
 */
declare type anyint = number | bigint;
/**
 * Optional<T> will not be official so
 * @link: https://github.com/microsoft/TypeScript/issues/19944
 */
declare type Optional<T> = T | undefined;
/**
 * calculates `P(n, k)`.
 *
 * @link https://en.wikipedia.org/wiki/Permutation
 */
export declare function permutation(n: anyint, k: anyint): anyint;
/**
 * calculates `C(n, k)`.
 *
 * @link https://en.wikipedia.org/wiki/Combination
 */
export declare function combination(n: anyint, k: anyint): anyint;
/**
 * calculates `n!` === `P(n, n)`.
 *
 * @link https://en.wikipedia.org/wiki/Factorial
 */
export declare function factorial(n: anyint): anyint;
/**
 * returns the factoradic representation of `n`, least significant order.
 *
 * @link https://en.wikipedia.org/wiki/Factorial_number_system
 * @param {number} l the number of digits
 */
export declare function factoradic(n: anyint, l?: number): number[];
/**
 * `combinadic(n, k)` returns a function
 * that takes `m` as an argument and
 * returns the combinadics representation of `m` for `n C k`.
 *
 * @link https://en.wikipedia.org/wiki/Combinatorial_number_system
 */
export declare function combinadic(n: number, k: number): (m: anyint) => number[];
/**
 * returns random integer `n` where `min` <= `n` < `max`:
 *
 * if the argument is `BigInt` the result is also `BigInt`.
 *
 * @param {anyint} min
 * @param {anyint} max
 */
export declare function randomInteger(min?: anyint, max?: anyint): any;
/**
 * Base Class of `js-combinatorics`
 */
declare class _CBase<T, U> {
    /**
     * does `new`
     * @param args
     */
    static of(...args: any[]): any;
    /**
     * Same as `of` but takes a single array `arg`
     *
     * cf. https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
     */
    static from(arg: any): any;
    /**
     * Common iterator
     */
    [Symbol.iterator](): Generator<U[], void, unknown>;
    /**
     * returns `[...this]`.
     */
    toArray(): U[][];
    /**
     * tells wether you need `BigInt` to access all elements.
     */
    get isBig(): boolean;
    /**
     * tells wether it is safe to work on this instance.
     *
     * * always `true` unless your platform does not support `BigInt`.
     * * if not, `true` iff `.isBig` is `false`.
     */
    get isSafe(): boolean;
    /**
    * check n for nth
    */
    _check(n: anyint): Optional<anyint>;
    /**
     * get the `n`th element of the iterator.
     * negative `n` goes backwards
     */
    nth(n: anyint): Optional<U[]>;
    /**
     * the seed iterable
     */
    seed: T[];
    /**
     * the size (# of elements) of each element.
     */
    size: number;
    /**
     * the number of elements
     */
    length: anyint;
    /**
     * pick random element
     */
    sample(): Optional<U[]>;
    /**
     * an infinite steam of random elements
     */
    samples(): Generator<U[], never, unknown>;
}
/**
 * Permutation
 */
export declare class Permutation<T> extends _CBase<T, T> {
    constructor(seed: Iterable<T>, size?: number);
    nth(n: anyint): Optional<T[]>;
}
/**
 * Combination
 */
export declare class Combination<T> extends _CBase<T, T> {
    comb: (anyint: any) => number[];
    constructor(seed: Iterable<T>, size?: number);
    /**
     * returns an iterator which is more efficient
     * than the default iterator that uses .nth
     *
     * @link https://en.wikipedia.org/wiki/Combinatorial_number_system#Applications
     */
    bitwiseIterator(): Generator<any[], void, unknown>;
    nth(n: anyint): Optional<T[]>;
}
/**
 * Base N
 */
export declare class BaseN<T> extends _CBase<T, T> {
    base: number;
    constructor(seed: Iterable<T>, size?: number);
    nth(n: anyint): Optional<T[]>;
}
/**
 * Power Set
 */
export declare class PowerSet<T> extends _CBase<T, T> {
    constructor(seed: Iterable<T>);
    nth(n: anyint): Optional<T[]>;
}
/**
 * Cartesian Product
 */
export declare class CartesianProduct<T> extends _CBase<T[], T> {
    constructor(...args: Iterable<T>[]);
    nth(n: anyint): Optional<T[]>;
}
export {};
