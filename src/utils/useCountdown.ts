import { useEffect, useRef, useState, useCallback } from 'react';

interface UseCountdownOptions {
  totalSeconds: number;
  onExpire?: () => void;
  autoStart?: boolean;
}

export function useCountdown({ totalSeconds, onExpire, autoStart = true }: UseCountdownOptions) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(autoStart);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    setSecondsLeft(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (!running) return;
    if (secondsLeft <= 0) {
      onExpireRef.current?.();
      return;
    }
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(id);
          onExpireRef.current?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const pause = useCallback(() => setRunning(false), []);
  const resume = useCallback(() => setRunning(true), []);
  const reset = useCallback((next: number = totalSeconds) => setSecondsLeft(next), [totalSeconds]);

  const percentLeft = totalSeconds > 0 ? secondsLeft / totalSeconds : 0;
  const isCritical = percentLeft <= 0.25;

  const formatted = `${Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, '0')}:${(secondsLeft % 60).toString().padStart(2, '0')}`;

  return { secondsLeft, percentLeft, isCritical, formatted, running, pause, resume, reset };
}
