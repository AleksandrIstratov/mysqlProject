SELECT * FROM cards.translates;


insert into translates (idword_front, idword_back)
select(
select idwords
from words
inner join languages
on words.idlanguages = languages.idlanguages
where languages.language = 'eng'
and words.word = 'rainbow') as idword_front,
(select idwords
from words
inner join languages
on words.idlanguages = languages.idlanguages
where languages.language = 'rus'
and words.word = 'радуга') as idword_back