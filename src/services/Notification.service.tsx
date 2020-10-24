import Toast from '@components/toast/Toast.component';
import React, { Fragment, PureComponent } from 'react';

export const showToast = (props: IToastProps): void => NotificationService.show(props);

class NotificationService extends PureComponent<unknown, IToastProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toastInstance: any;

  state: any = null;

  static show(config: IToastProps): void {
    this.toastInstance?.setState(config);
  }

  static close(): void {
    this.toastInstance?.setState(null);
  }

  render(): JSX.Element {
    return this.state ? <Toast {...this.state} /> : <Fragment />;
  }
}

export default NotificationService;
