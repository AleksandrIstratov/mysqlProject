USE cards;
INSERT INTO translates (idword_front, idword_back)
SELECT(
SELECT idwords
FROM words
INNER JOIN languages
ON words.idlanguages = languages.idlanguages
WHERE languages.language = 'eng'
AND words.word = 'rainbow') AS idword_front,
(SELECT idwords
FROM words
INNER JOIN languages
ON words.idlanguages = languages.idlanguages
WHERE languages.language = 'rus'
AND words.word = 'радуга') AS idword_back