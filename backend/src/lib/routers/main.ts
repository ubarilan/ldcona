import Ldcona from "../../ldcona";
import e, { Router, Request, Response, NextFunction } from "express";
import { Time, CensoredUser } from "../types";

export function initMainRouter(this: Ldcona): void {
  this.mainRouter = Router();
  const router: Router = this.mainRouter;

  // Login endpoint
  router.post(
    "/login",
    this.passport.authenticate("local", {
      successRedirect: "/login-success",
      failureRedirect: "/login-fail",
    })
  );

  // Logout endpoint
  router.post("/logout", (req: Request, res: Response) => {
    req.logout();
    res.redirect("/");
  });

  router.get("/userinfo", (req: Request, res: Response) => {
    if (req.user) {
      let censoredUserObject: CensoredUser = Object.assign({}, req.user);
      delete censoredUserObject.password;
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

  // Add a time to the database
  router.post(
    "/times/add",
    this.checkAuthenticated,
    async (req: Request, res: Response) => {
      let timestamp: number = Number(req.body.timestamp);
      let hours: number = Number(req.body.hours);
      let minutes: number = Number(req.body.minutes);
      let acquired: String = req.body.acquired;
      console.log(timestamp, hours, minutes);
      if (
        isNaN(timestamp) ||
        isNaN(hours) ||
        isNaN(minutes) ||
        !acquired ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 60
      ) {
        res.status(400).send({ status: "bad value" });
      } else {
        timestamp += hours * 60 * 60 * 1000 + minutes * 60 * 1000;
        let sql: string =
          "INSERT INTO times(timestamp, owner, teacherNotes, acquired) VALUES(?, ?, ?, ?)";
        this.mysqlConnection.query(sql, [
          timestamp,
          req.user.id,
          req.body.teacherNotes || null,
          acquired,
        ]);
        res.redirect("/login-success");
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
        if (sqlResults[0].affectedRows > 0) res.redirect("/login-success");
        else res.status(404).send({ status: "time not found" });
      }
    }
  );

  // Peace of fucking garbage, will not be used in final form after frontend is added. frontend is shit
  router.get("/teacher", (req: Request, res: Response) => {
    res.send(`
        <form action="/login" method="post">
        <input name="email" id="email" placeholder="">
        <input name="password" type="password" id="password" placeholder="">
        <input type="submit">
        </form>

        <form action="/logout" method="post">
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
