export class SetUtils {
  static intersection<T>(set1: Set<T>, set2: Set<T>) {
    return new Set([...set1].filter((item) => set2.has(item)));
  }

  static difference<T>(set1: Set<T>, set2: Set<T>) {
    return new Set([...set1].filter((item) => !set2.has(item)));
  }

  static equal<T>(set1: Set<T>, set2: Set<T>) {
    const tmpSet = SetUtils.difference(set1, set2);
    return tmpSet.size === 0 && set1.size === set2.size;
  }
}
