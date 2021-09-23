DROP TABLE IF EXISTS moods;

CREATE TABLE moods (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mood VARCHAR(512) NOT NULL,
    mood_explanation VARCHAR(512) NOT NULL,
    temperature INTEGER NOT NULL,
    air_quality INTEGER NOT NULL,
    description VARCHAR(512) NOT NULL,
    observed_time VARCHAR(512) NOT NULL
);