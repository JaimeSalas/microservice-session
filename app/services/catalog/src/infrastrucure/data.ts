export interface Data {
  id?: number;
}

let _data: Data[] = [];

const entryExists = (data: Data) => {
  return _data.some((entry) => entry.id === data.id);
};

interface IDataOperations<T extends Data> {
  getAll(): T[];
  getById(id: number): T;
  update<T>(data: T): void;
  delete(id: number): void;
}

export const operations = (): IDataOperations<Data> => ({
  getAll() {
    return _data;
  },
  getById(id: number) {
    const [entry] = _data.filter((d) => d.id === id);
    return entry;
  },
  update(data: Data) {
    if (!entryExists(data)) {
      _data = [..._data, data];
    } else {
      _data = _data.map((d) => {
        if (d.id === data.id) {
          return data;
        }

        return d;
      });
    }
  },
  delete(id: number) {
    _data = _data.filter((d) => d.id !== id);
  },
});
