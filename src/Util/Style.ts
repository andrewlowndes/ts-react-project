import { CSSProperties, StyleDeclarationValue } from 'aphrodite';

export type DefaultStyle<T> = { [ K in keyof T]: CSSProperties };
export type StyleObject<T = string> = { [ K in T & string ]: StyleDeclarationValue };
