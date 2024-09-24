// hooks/useNotificationPermission.js
import { useEffect, useState } from 'react';

const useNotificationPermission = () => {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    // Update permission on initial render
    setPermission(Notification.permission);

    // Listen for permission changes (this might not work in all browsers)
    const handlePermissionChange = () => {
      setPermission(Notification.permission);
    };

    // Check if the Notification API is supported
    if ('Notification' in window) {
      Notification.requestPermission().then(handlePermissionChange);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return permission;
};

export default useNotificationPermission;
