import storage from 'good-storage'

const SELLER_KEY = '__seller__'

export function saveToLocal(id, key, val) {
    // 取
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    seller[id] = {}
  }
//   修改
  seller[id][key] = val
//   存储
  storage.set(SELLER_KEY, seller)
}

export function loadFromLocal(id, key, def) {
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    return def
  }
  return seller[id][key] || def
}
