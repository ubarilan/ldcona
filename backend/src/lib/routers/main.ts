import Ldcona from "../../ldcona";
import { Router, Request, Response } from "express";
import { Time, CensoredUser, User } from "../types";
import { censorUser } from "../utils";
import { InternalOAuthError } from "passport-oauth2";

export function initMainRouter(this: Ldcona): void {
  this.mainRouter = Router();
  const router: Router = this.mainRouter;

  // Login endpoint
  router.post("/login", (req, res, next) => {
    this.passport.authenticate(
      "local",
      (error: Error, user: User, authError: { message: string }) => {
        if (error) {
          res.status(500).json({
            error: error.message,
          });
        } else if (authError) {
          res.redirect(`/login?err=${authError.message}`);
        } else if (user) {
          req.login(user, (err) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
            } else {
              res.redirect("/login-success");
            }
          });
        } else {
          res.redirect("/login-fail");
        }
      }
    )(req, res, next);
  });

  router.get(
    "/auth/google",
    this.passport.authenticate("google", { scope: ["email", "profile"] })
  );

  router.get("/auth/google/callback", (req, res) => {
    this.passport.authenticate(
      "google",
      (
        internalError: InternalOAuthError | null,
        user: User | false,
        err: { message: string }
      ) => {
        if (internalError) {
          res.status(500).send(internalError);
        } else if (user) {
          req.login(user, (err) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.redirect("/login-success");
            }
          });
        } else {
          res.redirect(`/login-fail?err=${err.message}`);
        }
      }
    )(req, res);
  });

  // Logout endpoint
  router.post("/logout", (req: Request, res: Response) => {
    req.logout();
    res.redirect("/");
  });

  router.get("/userinfo", (req: Request, res: Response) => {
    if (req.user) {
      let censoredUserObject: CensoredUser = censorUser(req.user);
      res.send({ user: censoredUserObject });
    } else res.send({ user: null });
  });

  // Show avilabile times of the teachers
  router.get(
    "/times",
    this.checkAuthenticated,
    async (req: Request, res: Response) => {
      let sql: string = "SELECT * FROM times WHERE owner = ?";
      let userTimes: Time[] = (
        await this.mysqlConnection.query(sql, req.user.id)
      )[0];
      res.send(userTimes);
    }
  );

  // Show all teachers from database
  router.get("/teachers", async (req: Request, res: Response) => {
    let sql: string = "SELECT * FROM users";
    let teachers: CensoredUser[] = (
      await this.mysqlConnection.query(sql)
    )[0].map((teacher: User) => censorUser(teacher));

    res.send(teachers);
  });

  // Add a time to the database
  router.post(
    "/times/add",
    this.checkAuthenticated,
    async (req: Request, res: Response) => {
      let timestamp: number = Number(req.body.timestamp);
      let student: String = req.body.student || null;
      if (isNaN(timestamp)) {
        res.status(400).send({ status: "bad value" });
      } else {
        let sql: string =
          "INSERT INTO times(timestamp, owner, teacherNotes, acquired) VALUES(?, ?, ?, ?)";
        this.mysqlConnection.query(sql, [
          timestamp,
          req.user.id,
          req.body.teacherNotes || null,
          student,
        ]);
        res.send({ status: "ok" });
      }
    }
  );

  // Remove a time from the database
  router.post(
    "/times/remove/",
    this.checkAuthenticated,
    async (req: Request, res: Response) => {
      let id: number = Number(req.body.id);
      if (isNaN(id)) res.status(400).send({ status: "bad value" });
      else {
        let sql: string = "DELETE FROM times WHERE id = ?";
        let sqlResults = await this.mysqlConnection.query(sql, id);
        if (sqlResults[0].affectedRows > 0) res.send({ status: "ok" });
        else res.status(404).send({ status: "time not found" });
      }
    }
  );

  // Peace of fucking garbage, will not be used in final form after frontend is added. frontend is shit
  router.get("/teacherr", (req: Request, res: Response) => {
    res.send(`
        <form action="/api/login" method="post">
        <input name="email" id="email" placeholder="">
        <input name="password" type="password" id="password" placeholder="">
        <input type="submit">
        </form>

        <form action="/api/logout" method="post">
        <button type="submit">logout</button>
        </form>

        <form action="/times/add" method="post">
        <input name="timestamp" id="timestamp">
        <input name="teacherNotes" id="teacherNotes">
        <input type="submit">
        </form>
        
        <form action="/times/remove" method="post">
        <input name="timeID" id="timeID">
        <input type="submit">
        </form>
        `);
  });
}
