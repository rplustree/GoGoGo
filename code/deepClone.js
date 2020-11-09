function deepClone(target, map = new Map()) {
  if (typeof target === 'object') {
    let newTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) return map.get(target)
    map.set(target, newTarget)
    for (const key in target) {
      newTarget[key] = deepClone(target[key], map)
    }
    return newTarget
  } else {
    return target
  }
}
const target = {
  field1: 1,
  field2: undefined,
  fieled3: {
    child: 'child',
  },
  fiele4: [1, 2, 3, 4],
}
target.target = target
console.log(deepClone(target))
