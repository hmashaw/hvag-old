/**
 * auth-info.ts
 * Current state of authentication for a given member/user
 */

export class AuthInfo {

    constructor(public $uid: string) {}

    isLoggedIn():boolean {
        return !!this.$uid;
    }

}
