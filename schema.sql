create database chatBot;

use chatBot;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE intents (
    intent_id INT PRIMARY KEY AUTO_INCREMENT,
    intent_name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE entities (
    entity_id INT PRIMARY KEY AUTO_INCREMENT,
    entity_name VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL
);

CREATE TABLE responses (
    response_id INT PRIMARY KEY AUTO_INCREMENT,
    intent_id INT,
    response_text TEXT NOT NULL,
    FOREIGN KEY (intent_id) REFERENCES intents(intent_id)
);

CREATE TABLE conversations (
    conversation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    intent_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_query TEXT,
    bot_response TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (intent_id) REFERENCES intents(intent_id)
);

CREATE TABLE intent_entities (
    intent_id INT,
    entity_id INT,
    PRIMARY KEY (intent_id, entity_id),
    FOREIGN KEY (intent_id) REFERENCES intents(intent_id),
    FOREIGN KEY (entity_id) REFERENCES entities(entity_id)
);