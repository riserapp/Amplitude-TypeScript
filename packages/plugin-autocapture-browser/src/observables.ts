import { Observable, fromEvent } from 'rxjs';

/**
 * Creates an observable that tracks DOM mutations on the document body.
 */
export const createMutationObservable = (): Observable<MutationRecord[]> => {
  return new Observable<MutationRecord[]>((observer) => {
    const mutationObserver = new MutationObserver((mutations) => {
      observer.next(mutations);
    });
    mutationObserver.observe(document.body, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
    });
    return () => mutationObserver.disconnect();
  });
};

/**
 * Creates an observable that tracks click events on the document.
 */
export const createClickObservable = (): Observable<MouseEvent> => {
  return fromEvent<MouseEvent>(document, 'click', { capture: true });
};
