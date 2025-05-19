export class TokenResponse {
    public token: string;
    public expiresToken: Date;
    public refreshToken: string;
    public expiresRefreshToken: Date;

    constructor(token: string, expiresToken: Date, refreshToken: string, expiresRefreshToken: Date) {
        this.token = token;
        this.expiresToken = expiresToken;
        this.refreshToken = refreshToken;
        this.expiresRefreshToken = expiresRefreshToken;
    }
}
