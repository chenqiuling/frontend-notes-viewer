"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6395],{85420:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u53EF\u4EE5\u901A\u8FC7\`tsc\`\u5DE5\u5177\u7F16\u8BD1 TypeScript \u4EE3\u7801\uFF0C\u751F\u6210 JavaScript \u6587\u4EF6\u3002

## \u63A5\u53E3 (Interface)

\`\`\`ts
interface User {
  id: number;
  name: string;
  email?: string; // \u53EF\u9009\u5C5E\u6027
  readonly registerDate: Date; // \u53EA\u8BFB\u5C5E\u6027
}

const alice: User = {
  id: 1,
  name: 'Alice',
  registerDate: new Date(),
};
// alice.registerDate = new Date();  \u53EA\u8BFB\u5C5E\u6027\u4E0D\u53EF\u4FEE\u6539
\`\`\`

## \u7C7B\u578B\u522B\u540D (Type Aliases)

\`\`\`ts
type Point = {
  x: number;
  y: number;
  [key: string]: string;
};

type ID = string | number; // \u8054\u5408\u7C7B\u578B

type IUser2 = Partial<Point>; // Point\u7684\u6240\u6709\u5C5E\u6027\u5747\u4E3A\u53EF\u9009\u5C5E\u6027
\`\`\`

### type \u4E0E interface \u7684\u533A\u522B

1. \u63A5\u53E3\uFF1A\u53EA\u80FD\u5B9A\u4E49\u5BF9\u8C61\u7C7B\u578B\uFF0Cinterface \u53EF\u4EE5\u91CD\u590D\u58F0\u660E
2. \u7C7B\u578B\u522B\u540D\uFF1A\u53EF\u4EE5\u5B9A\u4E49\u57FA\u672C\u7C7B\u578B\u3001\u8054\u5408\u7C7B\u578B\u3001\u4EA4\u53C9\u7C7B\u578B\u7B49\uFF0Ctype \u4E0D\u53EF\u4EE5\u91CD\u590D\u58F0\u660E
3. \u63A5\u53E3\u53EF\u4EE5\u88AB\u5B9E\u73B0\u548C\u7EE7\u627F\uFF08extends\uFF09\uFF0C\u7C7B\u578B\u522B\u540D\u4E0D\u80FD\uFF0C\u4E24\u8005\u90FD\u80FD\u901A\u8FC7 & \u5408\u5E76\u7C7B\u578B

## \u51FD\u6570\u7C7B\u578B

\`\`\`ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => \`Hello, \${name}!\`;

// \u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u503C
function createUser(name: string, age: number = 18, email?: string) { ... }
\`\`\`

## \u6CDB\u578B

\`\`\`ts
// \u6CDB\u578B\u63A5\u53E3
interface IResponse<T> {
  code: number;
  message: string;
  result: T;
}
const userResponse: IResponse<User> = { ... };

// \u6CDB\u578B\u51FD\u6570
function sum<T>(arg: T): T {
  return arg;
}
sum<number>(42); // \u4E5F\u53EF\u4EE5\u7701\u7565\u7C7B\u578Bsum(42)\uFF0C\u6839\u636E\u5B9E\u9645\u7C7B\u578B\u4F1A\u63A8\u65AD\u4E3Anumber
\`\`\`

## \u679A\u4E3E

\`\`\`ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
const move = (dir: Direction) => { ... };
move(Direction.Up);
\`\`\`

## \u7C7B\u578B\u65AD\u8A00

\`\`\`ts
const input = document.getElementById('input') as HTMLInputElement;

const value = (<HTMLInputElement>input).value;

const query = {} as Record<string, string>;

(window as any).location;
\`\`\`

## \u8054\u5408\u7C7B\u578B

\`\`\`ts
type ID = string | number;
\`\`\`

## \u7C7B\u578B\u5B88\u536B

\`\`\`ts
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // \u7C7B\u578B\u88AB\u6536\u7A84\u4E3A Fish
  } else {
    pet.fly(); // \u7C7B\u578B\u88AB\u6536\u7A84\u4E3A Bird
  }
}
\`\`\`

## \u5DE5\u5177\u7C7B\u578B

### keyof \u64CD\u4F5C\u7B26

\u83B7\u53D6\u5BF9\u8C61\u7C7B\u578B\u7684\u6240\u6709\u952E\u7684\u8054\u5408\u7C7B\u578B\uFF1A

\`\`\`ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function getUserProperty(user: User, key: keyof User) {
  return user[key];
}
\`\`\`

### typeof \u64CD\u4F5C\u7B26

\u83B7\u53D6\u53D8\u91CF\u6216\u5C5E\u6027\u7684\u7C7B\u578B\uFF1A

\`\`\`ts
const user = { name: 'Alice', age: 30 };
type UserType = typeof user; // { name: string; age: number }

function formatUser(u: typeof user) {
  return \`\${u.name} (\${u.age})\`;
}
\`\`\`

#### \u89E3\u51B3\u5BF9\u8C61\u7D22\u5F15 ts \u7C7B\u578B\u62A5\u9519

> \`Element implicitly has an 'any' type because expression of type 'number' can't be used to index type XXX\`

\`\`\`ts
const LEVEL = {
  high: '\u9AD8',
  middle: '\u4E2D',
  low: '\u4F4E',
};
const data = { level: 'high' };
// \u65B9\u6CD51\uFF1A\u5F15\u7528\u5904\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00
LEVEL[data.level as keyof typeof LEVEL];

// \u65B9\u6CD52\uFF1A\u5B9A\u4E49\u5904\u5B9A\u4E49\u7C7B\u578B
const LEVEL: Record<string, string> = {};
\`\`\`

### ReturnType<T>

\u83B7\u53D6\u51FD\u6570\u7C7B\u578B\u7684\u8FD4\u56DE\u7C7B\u578B\uFF1A

\`\`\`ts
function fetchUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id: 1, name: 'Alice' });
}

type FetchResult = ReturnType<typeof fetchUser>;
// Promise<{ id: number; name: string }>

type UnwrappedResult = Awaited<ReturnType<typeof fetchUser>>;
// { id: number; name: string }
\`\`\`

### Parameters<T>

\u83B7\u53D6\u51FD\u6570\u53C2\u6570\u7684\u7C7B\u578B\u5143\u7EC4\uFF1A

\`\`\`ts
function createUser(name: string, age: number, isAdmin = false) {
  return { name, age, isAdmin };
}

type CreateUserParams = Parameters<typeof createUser>;
// [name: string, age: number, isAdmin?: boolean]
\`\`\`

### ConstructorParameters<T>

\u83B7\u53D6\u6784\u9020\u51FD\u6570\u53C2\u6570\u7684\u7C7B\u578B\u5143\u7EC4\uFF1A

\`\`\`ts
class User {
  constructor(public id: number, public name: string, private email: string) {}
}

type UserCtorParams = ConstructorParameters<typeof User>;
// [id: number, name: string, email: string]
\`\`\`

### InstanceType<T>

\u83B7\u53D6\u6784\u9020\u51FD\u6570\u5B9E\u4F8B\u7C7B\u578B\uFF1A

\`\`\`ts
class User {
  /* ... */
}

type UserInstance = InstanceType<typeof User>; // User

function cloneUser(user: UserInstance) {
  return new User(user.id, user.name, user.email);
}
\`\`\`

### Partial<T>

\u4F7F\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EF\u9009\uFF1A

\`\`\`ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
/* \u7B49\u4EF7\u4E8E\uFF1A
{
  id?: number;
  name?: string;
  email?: string;
}
*/
\`\`\`

### Required<T>

\u4F7F\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009\uFF1A

\`\`\`ts
interface Config {
  apiUrl?: string;
  timeout?: number;
}

type RequiredConfig = Required<Config>;
/* \u7B49\u4EF7\u4E8E\uFF1A
{
  apiUrl: string;
  timeout: number;
}
*/
\`\`\`

### Readonly<T>

\u4F7F\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB\uFF1A

\`\`\`ts
interface MutableConfig {
  apiUrl: string;
  timeout: number;
}

type ImmutableConfig = Readonly<MutableConfig>;
/* \u7B49\u4EF7\u4E8E\uFF1A
{
  readonly apiUrl: string;
  readonly timeout: number;
}
*/
\`\`\`

### Record<K, T>

\u521B\u5EFA\u952E\u7C7B\u578B\u4E3A K\uFF0C\u503C\u7C7B\u578B\u4E3A T \u7684\u5BF9\u8C61\u7C7B\u578B\uFF1A

\`\`\`ts
type PageViews = Record<'home' | 'about' | 'contact', number>;
/* \u7B49\u4EF7\u4E8E\uFF1A
{
  home: number;
  about: number;
  contact: number;
}
*/

type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
// { [key: string]: 'admin' | 'user' | 'guest' }
\`\`\`

## declare \u5173\u952E\u5B57

\`\`\`ts
declare const APP_VERSION: string;

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// \u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\uFF0C\u907F\u514D\u7C7B\u578B\u6C61\u67D3\u3002\u4F7F\u7528 User.Info
declare namespace User {
  interface Info {
    age: number;
  }
}

// \u6269\u5C55\u539F\u6709\u6A21\u5757
declare module 'axios' {
  interface AxiosRequestConfig {
    isUseDefaultToast?: boolean;
  }
}

// \u6269\u5C55\u5DF2\u6709\u7C7B\u578B
declare global {
  interface Window {
    analytics: {
      track: (event: string, data?: object) => void;
    };
  }
}

// \u5B9A\u4E49 window \u7C7B\u578B
declare var window: Window & typeof globalThis;
\`\`\`

## \u6761\u4EF6\u7C7B\u578B

\`\`\`ts
type Flatten<T> = T extends (infer U)[] ? U : never; // \u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u591A\u7EF4\u6570\u7EC4\u53EA\u4F1A\u5C55\u5F00\u83B7\u53D6\u7B2C\u4E00\u5C42

type NonNullable<T> = T extends null | undefined ? never : T;

type ElementOfAry<T> = Flatten<NonNullable<T>>;

// \u793A\u4F8B\uFF1A
type APIResponse = Array<{ id: number; name: string }>;
type Item = ElementOfAry<APIResponse>; // { id: number; name: string }

type InferObjItem<T> = T extends infer U ? U : never;
type ElementOfObj<T> = InferObjItem<NonNullable<T>>;

// \u793A\u4F8B\uFF1A
type ResponseResult = { result?: { id: number } };
type ID = ElementOfObj<ResponseResult['result']>['id'];
\`\`\`

## \u503C\u7C7B\u578B\u63D0\u53D6

\`\`\`ts
type ValueOf<T> = T[keyof T];

interface UserRoles {
  admin: 'ADMIN';
  user: 'USER';
  guest: 'GUEST';
}

type Role = ValueOf<UserRoles>; // "ADMIN" | "USER" | "GUEST"
\`\`\`
`}}]);
