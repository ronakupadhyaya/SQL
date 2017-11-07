alter table users add column status varchar;
update users
  set status = 'surfing'
  where state = 'CA';
update users
  set status = 'working'
  where not state = 'CA';
