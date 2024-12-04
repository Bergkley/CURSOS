import { LocalSavePurchases } from "@/data/usecases";
import { mockPurchases, CacheStoreSpy } from "@/data/testes";



type SutTypes = {
    sut: LocalSavePurchases,
    cacheStore: CacheStoreSpy
}

const makeSut = (): SutTypes => {
    
    const cacheStore = new CacheStoreSpy();
    const sut = new LocalSavePurchases(cacheStore);

    return {
        sut,
        cacheStore
    }
}

describe('LocalSavePurchases', () => {
    test('Should not delete or insert cache on sut.init', () => {
        const { cacheStore } = makeSut()
        expect(cacheStore.messages).toEqual([]);
    });

    

    test('Should not insert new Cache if delete fails',async  () => {
        const { cacheStore, sut } = makeSut();
        cacheStore.simulateDeleteError()
        const promise = sut.save(mockPurchases());
        expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete]);
        await expect(promise).rejects.toThrow()
    });

    test('Should  insert new Cache if delete succeeds', async () => {
        const { cacheStore, sut } = makeSut();
        const purchases = mockPurchases()
        await sut.save(purchases);
        expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete, CacheStoreSpy.Message.insert]);
        expect(cacheStore.insertKey).toBe('purchases');
        expect(cacheStore.insertValues).toEqual(purchases);
        expect(cacheStore.deleteKey).toBe('purchases');


    });

    test('Should thory if insert thorws', async () => {
        const { cacheStore, sut } = makeSut();
        cacheStore.simulateInsertError()
        const promise = sut.save(mockPurchases());
        expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete, CacheStoreSpy.Message.insert]);
        await expect(promise).rejects.toThrow()
    });

    // novo


    


  });
  