// Short-lived token mint / exchange service
class TokenService {
    constructor(tokenRepository, tokenExpirySeconds) {
        this.tokenRepository = tokenRepository;
        this.tokenExpirySeconds = tokenExpirySeconds;
    }
    async mintToken(userId) {
        const token = this.generateToken();
        const expiry = Date.now() + this.tokenExpirySeconds * 1000;
        await this.tokenRepository.saveToken(userId, token, expiry);
        return token;
    }
    async exchangeToken(userId, token) {
        const storedToken = await this.tokenRepository.getToken(userId);
        if (storedToken !== token) {
            throw new Error('Invalid token');
        }
        const newToken = this.generateToken();
        const expiry = Date.now() + this.tokenExpirySeconds * 1000;
        await this.tokenRepository.saveToken(userId, newToken, expiry);
        return newToken;
    }
    generateToken() {
        return Math.random().toString(36).substr(2);
    }
}
module.exports = TokenService;