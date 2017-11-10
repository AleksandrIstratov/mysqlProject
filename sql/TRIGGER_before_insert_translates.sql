USE cards;
DELIMITER ;;
CREATE TRIGGER before_insert_translates
BEFORE INSERT ON translates
FOR EACH ROW
BEGIN
  IF new.idtranslates IS NULL THEN
    SET new.idtranslates = uuid();
  END IF;
END
;;