USE cards;
DELIMITER ;;
CREATE TRIGGER before_insert_words
BEFORE INSERT ON words
FOR EACH ROW
BEGIN
  IF new.idwords IS NULL THEN
    SET new.idwords = uuid();
  END IF;
END
;;