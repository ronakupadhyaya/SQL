/* Replace with your SQL commands */

create table users (
    id serial primary key,
    address_street varchar,
    address_city varchar,
    address_state varchar,
    zip_code INT,
    name_first varchar,
    name_last varchar,
    username varchar,
    pword password,
    email varchar,
    phone_number varchar
);

create table pokemon (
    id serial primary key,
    picture varchar,
    name_poke varchar,
    type_poke varchar
);

create table auction (
    id serial primary key,
    user_id int,
    poke_id int,
    opening_bid int,
    reserve_price int,
    auction_created datetime,
    auction_start datetime,
    auction_end datetime,
    descrip text,
    status text
);

create table auction_bids (
    id serial primary key,
    auction_id int,
    owner_user_id int,
    bid_amount int,
    bid_made DATETIME,
    bidder_user_id int
);

create table watch_list (
    id serial primary key,
    user_id int,
    auction_id int
);