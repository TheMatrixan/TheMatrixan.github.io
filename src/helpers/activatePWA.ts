import { showToast } from '@services/Notification.service';

const onSWUpdate = (registration?: ServiceWorkerRegistration) => {
  showToast({
    canBeClosed: false,
    message: 'pwa.newContent.message',
    onClick: () => {
      if (registration?.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    },
    title: 'pwa.newContent.title',
  });
};

const activatePWA = (): void => {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    onSWUpdate(registration);
                    let refreshing = false;
                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                      if (!refreshing) {
                        window.location.reload();
                        refreshing = true;
                      }
                    });
                  } else {
                    // eslint-disable-next-line no-console
                    console.debug('Content is now available offline with ServiceWorker!');
                  }
                  break;
                default:
                  break;
              }
            };
          }
        };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.debug('Cannot register ServiceWorker', error);
      }
    });
  }
};

export default activatePWA;
