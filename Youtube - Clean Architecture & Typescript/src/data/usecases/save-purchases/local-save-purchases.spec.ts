import { LocalSavePurchases } from "@/data/usecases";
import { mockPurchases, CacheStoreSpy } from "@/data/testes";



type SutTypes = {
    sut: LocalSavePurchases,
    cacheStore: CacheStoreSpy
}

const makeSut = (timeStamp = new Date()): SutTypes => {
    
    const cacheStore = new CacheStoreSpy();
    const sut = new LocalSavePurchases(cacheStore, timeStamp);

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
        const timestamp = new Date();
        const { cacheStore, sut } = makeSut(timestamp);
        const purchases = mockPurchases()
        const promise = sut.save(purchases);
        expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete, CacheStoreSpy.Message.insert]);
        expect(cacheStore.insertKey).toBe('purchases');
        expect(cacheStore.insertValues).toEqual({timestamp, value: purchases});
        expect(cacheStore.deleteKey).toBe('purchases');
        await expect(promise).resolves.toBeFalsy()


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
  