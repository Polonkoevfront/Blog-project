export type Mods = Record<string, boolean | string | number>;
export function classNames(
    baseClass: string,
    mods: Mods,
    additionalClasses?: string[]
): string {
    const modClasses = Object.entries(mods)
        .filter(([_, value]) => value)
        .map(([key]) => key);

    return [baseClass, ...modClasses, ...(additionalClasses || [])].join(" ");
}