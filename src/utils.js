export function isChildOf(elmt, parent) {

  let testElmt = elmt

  while (testElmt) {

    if (testElmt === parent) return true
    testElmt = testElmt.parentNode

  }

  return false

}
