// 接口 描述对象的形状，根据接口，提供一些新的类 为别人使用

// 接口可以被实现 被继承 type不能
// type可以写联合类型

// 1) 描述对象
interface IFullName {
    firstName: string,
    lastName: string
}

// interface 可以描述 （属性 方法 类）

const fullName = (obj: IFullName): IFullName => {
    return obj
}

fullName({firstName: 'z', lastName: 'f'})

// 2) 描述函数
interface IFullName2 {
    (firstName: string, lastName: string): string
}
const fullName2: IFullName2 = (firstName: string, lastName: string): string => {
    return firstName + lastName
}

// 混合类型 计数器 一个函数返回一个函数，返回的函数有属性
interface ICount {
    (): number,
    count: number
}
const fn:ICount = () => {
    return ++fn.count
}
fn.count = 0;
console.log(fn())
console.log(fn())

// 接口特性
interface  IVegetables {
    taste: string,
    color: string
}

// 如果我定义的值比接口中的多可以采用 类型断言 直接断言成对应的接口
const tomato: IVegetables = ({
    size: 10,
    taste: 'sour',
    color: 'red'
} as IVegetables)

// 接口可以扩展
interface ITomato extends IVegetables {
    size: number
}

const tomato2: ITomato = {
    size: 10,
    taste: 'sour',
    color: 'red'
}

interface  IVegetables3 {   // 可选属性 只读属性
    taste: string,
    color: string,
    [key: string]: any  // 限制死的 其他的随意
    // readonly size?: number
    // type?: string
}

// 接口可以被类来实现
interface Speakable {   // 接口中的内容都是抽象，没有具体的实现
    name: string,
    speak(): void   // 描述类的原型方法，表示不关心方法的返回值
}

class Speak implements Speakable {
    name!: string;
    speak():void {
        throw new Error("Method not implemented.");
    }
}

// 类 抽象类 不能被实例化
abstract class Animal { // 抽象类中可以包含抽象方法和抽象属性
    abstract name: string // 可以没有实现
    eat() { // 有实现
        console.log('eat');
    }
}

// 父类一般都不会被实例化
class Tom extends Animal {
    name!: string
}

export {}
