interface IToastProps {
  onClick?: () => void;
  title: string;
  message: string;
  canBeClosed?: boolean;
}
