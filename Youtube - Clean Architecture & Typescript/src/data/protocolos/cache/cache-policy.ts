export class CachePolicy {
  private static maxAgeInDays = 3;
  private constructor() {}
  static validade(timestamp: Date, date: Date): boolean {
    const maxAge = new Date(timestamp);

    maxAge.setDate(maxAge.getDate() + CachePolicy.maxAgeInDays);
    
    return maxAge > date;
  }
}
