export const partial = (fn, ...args) => fn.bind(null, ...args)
export const pipe = (...fns) => fns.reduce(_pipe)

const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))
