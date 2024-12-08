import { LocalLoadPurchases } from "@/data/usecases";
import { CacheStoreSpy } from "@/data/testes";



type SutTypes = {
    sut: LocalLoadPurchases,
    cacheStore: CacheStoreSpy
}

const makeSut = (timeStamp = new Date()): SutTypes => {
    
    const cacheStore = new CacheStoreSpy();
    const sut = new LocalLoadPurchases(cacheStore, timeStamp);

    return {
        sut,
        cacheStore
    }
}

describe('LocalLoadPurchases', () => {

    test('Should not delete or insert cache on sut.init', () => {
        const { cacheStore } = makeSut()
        expect(cacheStore.actions).toEqual([]);
    });

    test('Should delete cache  if load fails ', () => {
        const { cacheStore,sut } = makeSut()
        cacheStore.simulateFetchError()
         sut.validate()
        expect(cacheStore.actions).toEqual([CacheStoreSpy.Action.fetch, CacheStoreSpy.Action.delete]);
        expect(cacheStore.deleteKey).toBe('purchases');
    });

    
  });
  