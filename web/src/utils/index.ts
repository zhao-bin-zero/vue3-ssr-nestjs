export const isPromise = (obj: any) =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export const isMobile = (userAgent: string) => {
  console.log(userAgent);
  if (userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true; // 移动端
  } else {
    return false; // PC端
  }
};