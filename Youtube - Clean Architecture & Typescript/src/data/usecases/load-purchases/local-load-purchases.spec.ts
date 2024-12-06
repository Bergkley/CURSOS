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

    
  });
  