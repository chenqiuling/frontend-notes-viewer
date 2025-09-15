"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9175],{52774:function(r,n,e){e.r(n),n.default=`\u88C5\u9970\u5668\uFF08Decorators\uFF09\u662F\u4E00\u79CD\u5143\u7F16\u7A0B\u5DE5\u5177\uFF0C\u5141\u8BB8\u4F60\u5728\u4E0D\u4FEE\u6539\u539F\u6709\u4EE3\u7801\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF0C\u52A8\u6001\u5730\u4E3A\u7C7B\u3001\u65B9\u6CD5\u3001\u5C5E\u6027\u7B49\u6DFB\u52A0\u989D\u5916\u529F\u80FD\u3002

- JavaScript\uFF1A\u9700\u8981\u901A\u8FC7 Babel \u6216 TypeScript \u8F6C\u8BD1\u624D\u80FD\u4F7F\u7528\u88C5\u9970\u5668\u3002
- TypeScript\uFF1A\u652F\u6301\u88C5\u9970\u5668\uFF0C\u4F46\u9700\u8981\u5728 tsconfig.json \u4E2D\u542F\u7528 experimentalDecorators \u9009\u9879\u3002

1. \u4F9D\u8D56\u6CE8\u5165
\`\`\`ts
// NestJS \u98CE\u683C\u7684\u4F9D\u8D56\u6CE8\u5165
function Injectable() {
  return function (target: Function) {
    // \u6CE8\u518C\u7C7B\u5230\u5BB9\u5668\u7684\u903B\u8F91
  };
}

@Injectable()
class DatabaseService {}

@Injectable()
class UserRepository {
  constructor(private db: DatabaseService) {}
}
\`\`\`

2. \u65E5\u5FD7\u76D1\u63A7
\`\`\`ts
function Log(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`[LOG] Calling \${name} with args: \${JSON.stringify(args)}\`);
    const result = originalMethod.apply(this, args);
    console.log(\`[LOG] \${name} returned: \${result}\`);
    return result;
  };
  return descriptor;
}

class UserService {
  @Log
  getUser(id: string) {
    return { id, name: "John" };
  }
}

// \u4F7F\u7528\u65F6\u81EA\u52A8\u8BB0\u5F55\u65E5\u5FD7
const service = new UserService();
service.getUser("123"); 
// \u8F93\u51FA\uFF1A
// [LOG] Calling getUser with args: ["123"]
// [LOG] getUser returned: { id: "123", name: "John" }
\`\`\`

3. \u6743\u9650\u6821\u9A8C
\`\`\`ts
function Auth(requiredRole: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (this.currentUser?.role !== requiredRole) {
        throw new Error("Permission denied");
      }
      return originalMethod.apply(this, args);
    };
  };
}

class AdminController {
  currentUser = { role: "admin" };

  @Auth("admin")
  deleteUser(id: string) {
    // \u5220\u9664\u7528\u6237\u903B\u8F91
  }
}
\`\`\`

4. \u8868\u5355\u6821\u9A8C
\`\`\`ts
function MinLength(length: number) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];
    const descriptor: PropertyDescriptor = {
      get() { return value; },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(\`\${propertyKey} must be at least \${length} characters\`);
        }
        value = newValue;
      },
      enumerable: true,
      configurable: true,
    };
    Object.defineProperty(target, propertyKey, descriptor);
  };
}

class User {
  @MinLength(3)
  username: string;
}

const user = new User();
user.username = "ab"; // \u629B\u51FA\u9519\u8BEF\uFF1Ausername must be at least 3 characters
\`\`\`

5. \u7F13\u5B58\u7ED3\u679C
\`\`\`ts
function CacheResult(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const cache = new Map();

  descriptor.value = function (...args: any[]) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = originalMethod.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

class MathUtils {
  @CacheResult
  factorial(n: number): number {
    console.log(\`Calculating \${n}!\`);
    return n <= 1 ? 1 : n * this.factorial(n - 1);
  }
}

const utils = new MathUtils();
utils.factorial(5); // \u8BA1\u7B97\u5E76\u7F13\u5B58\u7ED3\u679C
utils.factorial(5); // \u76F4\u63A5\u4ECE\u7F13\u5B58\u83B7\u53D6
\`\`\`

6. \u7B80\u5316\u5F00\u53D1
\`\`\`ts
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {}
\`\`\`
`}}]);
