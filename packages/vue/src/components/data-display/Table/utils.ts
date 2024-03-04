type SetType = Set<string | number>;

export class SetUtils {
  static intersection(set1: SetType = new Set(), set2: SetType = new Set()) {
    return new Set([...set1].filter((item) => set2.has(item)));
  }

  static difference(set1: SetType = new Set(), set2: SetType = new Set()) {
    return new Set([...set1].filter((item) => !set2.has(item)));
  }

  static equal(set1: SetType = new Set(), set2: SetType = new Set()) {
    const tmpSet = SetUtils.difference(set1, set2);
    return tmpSet.size === 0 && set1.size === set2.size;
  }
}
