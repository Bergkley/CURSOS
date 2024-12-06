import { CacheStore } from "@/data/protocolos/cache"
import { SavePurchases } from "@/domain/usecases"
export class LocalLoadPurchases implements SavePurchases { 
    constructor(
        private readonly cacheStore: CacheStore,
         private readonly timeStamp: Date) {}

     async save (purchases: Array<SavePurchases.Params>): Promise<void> {
        this.cacheStore.replace('purchases', {
            timestamp: this.timeStamp,
            value: purchases})
    }
}