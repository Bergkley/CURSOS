import { CacheStore } from "@/data/protocolos/cache"
import { SavePurchases } from "@/domain/usecases"
export class LocalLoadPurchases implements SavePurchases { 
    private readonly key = 'purchases'
    constructor(
        private readonly cacheStore: CacheStore,
         private readonly timeStamp: Date) {}

     async save (purchases: Array<SavePurchases.Params>): Promise<void> {
        this.cacheStore.replace(this.key, {
            timestamp: this.timeStamp,
            value: purchases})
    }

    async loadAll (): Promise<void> {
        this.cacheStore.fetch(this.key)
    }
}