export type User = {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    password_hash: string,
    created_at: string, // DateTime in postgres
    updated_at: string, // DateTime in postgres
}