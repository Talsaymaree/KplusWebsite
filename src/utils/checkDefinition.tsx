const isDefined = (obj: any): boolean => {
  if (!isObject(obj) && !Array.isArray(obj)) {
    return !obj || typeof obj === "undefined" ? false : true
  }
  if (isObject(obj)) {
    return !isObjChildDefined(obj) ? false : true
  }
  if (Array.isArray(obj)) {
    obj.forEach((child: any) => {
      if (!isDefined(child)) return false
    })
    return true
  }

  return true
}

const isObjChildDefined = (obj: any): boolean => {
  for (var key in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(key)) continue

    if (!isDefined(obj[key])) return false
  }
  return true
}

const isObject = (val: any) => {
  if (val === null) {
    return false
  }
  return typeof val === "function" || typeof val === "object"
}

export default isDefined
