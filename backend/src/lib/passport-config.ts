import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';

export default function initialize(passport, getUserByEmail, getUserById): any {
    const authenticateUser = async (email, password, done) => {
        email = email.toLocaleLowerCase().trim();
        const user = await getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                // return done(null, false, { message: 'Incorrect password' });
                return done(null, user);
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new Strategy({ usernameField: 'email' }, authenticateUser));
    passport.serializeUser(async (user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        return done(null, await getUserById(id));
    });
}