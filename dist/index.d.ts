declare function useSyncedState<T>(key: string, defaultValue: T): [T, (value: T) => void];

export { useSyncedState };
