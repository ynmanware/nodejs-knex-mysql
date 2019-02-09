module.exports =
    {
        mysql:
            {
                client: 'mysql',
                connection: {
                    host: 'db1.cj7rusoqrzyr.us-east-2.rds.amazonaws.com',
                    user: 'y',
                    password: 'monday01',
                    database: 'southwind',
                },
                pool: { min: 0, max: 7 },
                debug: true
            }
    };
