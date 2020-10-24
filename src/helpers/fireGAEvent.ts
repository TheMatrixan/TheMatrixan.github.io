const fireGAEvent = (event: string, data = {}): void => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

export default fireGAEvent;
