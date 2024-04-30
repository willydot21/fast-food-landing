
export const $$ = (selector: string, context: HTMLElement | Document = document) =>
  context.querySelectorAll(selector);

export const $ = (selector: string, context: HTMLElement | Document = document) =>
  context.querySelector(selector) as HTMLElement;