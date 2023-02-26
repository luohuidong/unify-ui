export function intersection(set1: Set<string | number>, set2: Set<string | number>) {
  const tmpSet = new Set<string | number>();

  for (let i of set1) {
    if (set2.has(i)) {
      tmpSet.add(i);
    }
  }

  return tmpSet;
}
