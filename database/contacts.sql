DROP TABLE IF EXISTS contacts;
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY, 
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
);
INSERT INTO contacts (id, name, email, message) VALUES
    (1, 'Leonardo', 'leo@turtlepower.com', 'Katanas are sick!'),
    (2, 'Donatello', 'don@turtlepower.com', 'The Bo is OP!'),
    (3, 'Michaelangelo', 'mikey@turtlepower.com', 'Cowabunga!'),
    (4, 'Raphael', 'raph@turtlepower.com', 'Sai anything and you are toast.');
