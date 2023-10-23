/// <reference types="react" />
export default function useLocalStorage<LocalStorageT>(key: string, initialValue: LocalStorageT): [LocalStorageT, React.Dispatch<React.SetStateAction<LocalStorageT>>];
