SELECT * FROM cards.words;
SELECT UUID();
DROP TRIGGER before_insert_languages;
DROP TRIGGER before_insert_words;
DROP TRIGGER before_insert_translates;

INSERT INTO languages (idlanguages, language)
VALUES (UUID(), 'ua');