import mysql, { Connection } from 'mysql2';
export function connectToDatabase(
    host: string,
    port: number = 3306,
    user: string,
    password: string,
    database_name: string
): any {
    const connection: Connection = mysql.createConnection({
        host: host,
        port: port,
        user: user,
        password: password,
        database: database_name,
    });
    connection.connect(function (err: Error) {
        if (err) throw err;
    });

    return connection.promise() as any;
}
