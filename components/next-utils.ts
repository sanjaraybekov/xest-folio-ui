export function isClientSide() {
  return typeof window !== "undefined";
}

const NextJSWindow = {} as any;

export function getWindow() {
  if (isClientSide()) {
    return window;
  }
  return NextJSWindow;
}

