/// <reference types="node" />
import { JwtVerifierOptions } from './jwt-verifier.js';
export type JWKSOptions = Required<Pick<JwtVerifierOptions, 'cooldownDuration' | 'timeoutDuration' | 'cacheMaxAge'>> & Pick<JwtVerifierOptions, 'agent' | 'secret'>;
declare const _default: ({ agent, cooldownDuration, timeoutDuration, cacheMaxAge, secret, }: JWKSOptions) => (jwksUri: string) => ((protectedHeader?: import("jose").JWSHeaderParameters | undefined, token?: import("jose").FlattenedJWSInput | undefined) => Promise<import("jose").KeyLike>) | (() => import("crypto").KeyObject);
export default _default;
