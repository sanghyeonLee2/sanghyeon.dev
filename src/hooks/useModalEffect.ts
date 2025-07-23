import { useEffect } from 'react';

export default function useModalEffect(active: boolean) {
  useEffect(() => {
    if (active) {
      const originalHtml = document.documentElement.style.overflow;

      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.documentElement.style.overflow = originalHtml;
      };
    }
  }, [active]);
}
