import { randomUUID } from 'node:crypto';

class UserRepository {
    constructor() {
        
    }
    
    async createUser(name: string, email: string) {
        const userId = randomUUID();
        
    }
}