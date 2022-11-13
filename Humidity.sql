drop database IOT;

create database IOT;
use IOT;

create table devices (
	device_id int primary key auto_increment,
    device_name varchar(20)
);

create table log_humid (
	log_id int primary key auto_increment,
    log_date timestamp,
    device_id int,
    foreign key (device_id) references devices (device_id),
    humid float
);

create table log_ace (
	log_id int primary key auto_increment,
    log_date timestamp,
    device_id int,
    foreign key (device_id) references devices (device_id),
    ace float
);

create table log_gas (
	log_id int primary key auto_increment,
    log_date timestamp,
    device_id int,
    foreign key (device_id) references devices (device_id),
    gas float
);

create table log_touch (
	log_id int primary key auto_increment,
    log_date timestamp,
    device_id int,
    foreign key (device_id) references devices (device_id),
    touch float
);

create table log_fire (
	log_id int primary key auto_increment,
    log_date timestamp,
    device_id int,
    foreign key (device_id) references devices (device_id),
    fire bool
);

insert into devices (device_name) values ('Sensor-01');
insert into devices (device_name) values ('Sensor-02');
insert into devices (device_name) values ('Sensor-03');
insert into devices (device_name) values ('Sensor-04');
insert into devices (device_name) values ('Sensor-05');


insert into log_humid (log_date, device_id, humid) values (now(), 1, 0);
insert into log_ace (log_date, device_id, ace) values (now(), 2, 0);
insert into log_gas (log_date, device_id, gas) values (now(), 3, 0);
insert into log_touch (log_date, device_id, touch) values (now(), 4, 0);
insert into log_fire (log_date, device_id, fire) values (now(), 5, 0);


select * from devices;
select * from log_humid;
select * from log_ace;
select * from log_gas;
select * from log_touch;
select * from log_fire;






