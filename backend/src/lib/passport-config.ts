import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import bcrypt from 'bcrypt';

// Initialization of passport configuration
export default function initialize(passport, getUserByEmail, getUserById): any {
    // Handle authentication
    async function authenticateUser(email, password, done) {
        email = email.toLocaleLowerCase().trim();
        const user = await getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        } catch (e) {
            return done(e);
        }
    }

    async function authenticateGoogleUser(
        req,
        accessToken,
        refreshToken,
        profile,
        done
    ) {
        const user = await getUserByEmail(profile.emails[0].value);
        if (user) {
            return done(null, user);
        }
        return done(null, false, { message: 'No user with that email' });
    }

    passport.use(
        'local',
        new LocalStrategy({ usernameField: 'email' }, authenticateUser)
    );
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: 'http://localhost:3000/api/auth/google/callback',
                passReqToCallback: true,
            },
            authenticateGoogleUser
        )
    );
    passport.serializeUser(async (user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        return done(null, await getUserById(id));
    });
}
