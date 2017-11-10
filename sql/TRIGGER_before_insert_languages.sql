USE cards;
DELIMITER ;;
CREATE TRIGGER before_insert_languages
BEFORE INSERT ON languages
FOR EACH ROW
BEGIN
  IF new.idlanguages IS NULL THEN
    SET new.idlanguages = uuid();
  END IF;
END
;;