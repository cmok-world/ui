export const unit = (v: number, u: string): string => v + u;
export const px = (v: number) => unit(v, 'px');
export const em = (v: number) => unit(v, 'em');
export const rem = (v: number) => unit(v, 'rem');
export const vh = (v: number) => unit(v, 'vh');
export const vw = (v: number) => unit(v, 'vw');
export const pp = (v: number) => unit(v, '%');
