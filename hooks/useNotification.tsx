import { notification } from 'antd';

type Notification = 'success' | 'info' | 'warning' | 'error';
type Config = {
  duration: number;
};

function useNotification(): (
  type: Notification,
  title: string,
  message: string,
  config?: Config
) => void {
  return (type: Notification, title: string, message: string, config) =>
    notification[type]({
      message: title,
      description: message,
      duration: config?.duration
    });
}

export default useNotification;
