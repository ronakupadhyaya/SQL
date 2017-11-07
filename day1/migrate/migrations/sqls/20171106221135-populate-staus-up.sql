UPDATE users
  SET status = 'surfing'
  WHERE state = 'CA';

UPDATE users
  SET status = 'working'
  WHERE state IN ('GA', 'NC', 'CO', 'IA', 'NY', 'OR', 'UT');
