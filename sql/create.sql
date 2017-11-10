CREATE TABLE `languages` (
  `idlanguages` char(36) NOT NULL,
  `language` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idlanguages`),
  UNIQUE KEY `idlanguages_UNIQUE` (`idlanguages`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `translates` (
  `idtranslates` char(36) NOT NULL,
  `idword_front` char(36) DEFAULT NULL,
  `idword_back` char(36) DEFAULT NULL,
  PRIMARY KEY (`idtranslates`),
  UNIQUE KEY `idtranslates_UNIQUE` (`idtranslates`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `words` (
  `idwords` char(36) NOT NULL,
  `word` varchar(45) DEFAULT NULL,
  `idlanguages` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idwords`),
  UNIQUE KEY `idwords_UNIQUE` (`idwords`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
