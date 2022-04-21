const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const isDesktop = !isMobile;

export { isMobile, isDesktop };
