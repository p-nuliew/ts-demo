// 泛型

// 以数组的map方法回调函数的第一个参数item为例，
// 当面临一些不同数组调用map时，item数据类型必然不一样，
// 所以，单一使用某种数据类型约束数组肯定不行，这种情况，必须借助「泛型」来帮助我们。

const a1: number[] = [1, 2, 3]
const a2: string[] = ['a', 'b', 'c']
const d1 = a1.map(item => item)
const d2 = a2.map(item => item)

// 单一明确的类型约束理解起来必然更简单，但是在实践中我们需要对约束稍微放宽一点限制。
// 泛型，即更为广泛的类型约束，可以理解泛型是一个变量

const d3 = [1, 2, 3].map(item => item)
// 此时，自动推导出map的类型：map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]

// 也就是说，这里的item，必然使用了泛型进行了更为宽松的约束

// 解读map方法的类型约束
// interface Array<T> {
//   map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
// }
// 在声明数组类型时，定义了一个泛型变量T，T为原数组item的类型，也是callbackfn的第一个参数value的类型。又定义了一个变量U，这是返回值数组item的类型。

// 语法实践
// 声明数组
interface Array<T> {
  length: number,
  pop(): T | undefined,
  some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean,
  reduce(callbackfn: (previousValue: T, value: T, index: number, array: T[]) => T, initialValue: T): T
}
d3.pop()
d3.some(item => item)
d3.reduce((previous, item) => previous + item, 0)

function demo03 () {
  return (
    <div>demo03</div>
  )
}
export default demo03
