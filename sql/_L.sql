SELECT * FROM cards.languages;
insert into words (word, idlanguages)
select 'радуга', idlanguages
from languages
where language = 'rus';

insert into words (word, idlanguages)
select 'rainbow', idlanguages
from languages
where language = 'eng'