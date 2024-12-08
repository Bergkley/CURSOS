import { CachePolicy, CacheStore } from "@/data/protocolos/cache"
import { SavePurchases , LoadPurchases} from "@/domain/usecases"
export class LocalLoadPurchases implements SavePurchases, LoadPurchases { 
    private readonly key = 'purchases'
    constructor(
        private readonly cacheStore: CacheStore,
         private readonly currentDate: Date) {}

     async save (purchases: Array<SavePurchases.Params>): Promise<void> {
        this.cacheStore.replace(this.key, {
            timestamp: this.currentDate,
            value: purchases})
    }

    async loadAll (): Promise<Array<LoadPurchases.Result>> {
        try {
            const cache = this.cacheStore.fetch(this.key)
            if(CachePolicy.validade(cache.timestamp, this.currentDate)) {
                return cache.value
            } else {
               return []
            }
            
        } catch (err) {
            return [];
        }
    }

     validate (): void {
        try {
            this.cacheStore.fetch(this.key)            
        } catch (err) {
            this.cacheStore.delete(this.key)
        }
    }
}