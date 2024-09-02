/* Create database mygov_org*/
Create database mygov_org;

/*create tables */

create table personal_info (
    pin varchar(255) primary key,
    name varchar(255) not null,
    surname varchar(255) not null,
    country varchar(255) not null,
    address varchar(255) not null,
    dateOfBirth varchar(255) not null
);

create table workplace(
    pin varchar(255) primary key,
    company_name varchar(255) not null,
    company_address varchar(255) not null,
    occupation varchar(255) not null,
    salary integer not null,
    insurance boolean not null
);

create table personal_interest (
    pin varchar(255) primary key,
    hobbies varchar(255) not null,
    pets varchar(255) not null,
    favorite_color varchar(255) not null
);

create table financial_info (
    pin varchar(255) primary key,
    bank_number varchar(255) not null,
    tax_yearly integer not null,
    expenses_yearly integer not null,
    revenue_yearly integer not null
);

create table family_info(
    pin varchar(255) primary key,
    family_name varchar(255) not null,
    family_size integer not null,
    number_boys integer not null,
    number_girls integer not null
);

create table education_info(
    pin varchar(255) primary key,
    institution_name varchar(255) not null,
    institution_address varchar(255) not null,
    highest_degree varchar(255) not null
);


/*Insertion in tables */

-- Insert into personal_info table
INSERT INTO personal_info (pin, name, surname, country, address, dateOfBirth)
VALUES 
('johdoe1', 'John', 'Doe', 'Azerbaijan', '1234 Elm Street, Baku', '1980-01-15'),
('jansmi1', 'Jane', 'Smith', 'Azerbaijan', '5678 Pine Street, Ganja', '1985-06-20'),
('aliahm1', 'Ali', 'Ahmedov', 'Azerbaijan', '91011 Oak Street, Sumqayit', '1990-11-30');

-- Insert into workplace table
INSERT INTO workplace (pin, company_name, company_address, occupation, salary, insurance)
VALUES 
('johdoe1', 'TechCorp', '5678 Oak Avenue, Baku', 'Software Engineer', 85000, TRUE),
('jansmi1', 'FinBank', '1234 Elm Avenue, Ganja', 'Financial Analyst', 62000, FALSE),
('aliahm1', 'HealthCare Inc.', '91011 Oak Street, Sumqayit', 'Medical Doctor', 95000, TRUE);

-- Insert into personal_interest table
INSERT INTO personal_interest (pin, hobbies, pets, favorite_color)
VALUES 
('johdoe1', 'Reading, Hiking', 'Dog', 'Blue'),
('jansmi1', 'Painting, Yoga', 'Cat', 'Green'),
('aliahm1', 'Cooking, Traveling', 'Parrot', 'Red');

-- Insert into financial_info table
INSERT INTO financial_info (pin, bank_number, tax_yearly, expenses_yearly, revenue_yearly)
VALUES 
('johdoe1', 'azjohdoe1', 12000, 30000, 95000),
('jansmi1', 'azjansmi1', 15000, 25000, 80000),
('aliahm1', 'azaliahm1', 20000, 40000, 120000);

-- Insert into family_info table
INSERT INTO family_info (pin, family_name, family_size, number_boys, number_girls)
VALUES 
('johdoe1', 'Doe Family', 4, 2, 2),
('jansmi1', 'Smith Family', 3, 1, 1),
('aliahm1', 'Ahmedov Family', 5, 3, 2);

-- Insert into education_info table
INSERT INTO education_info (pin, institution_name, institution_address, highest_degree)
VALUES 
('johdoe1', 'State University', '9012 Pine Street, Baku', 'Master of Science in Computer Science'),
('jansmi1', 'Technical University', '3456 Maple Avenue, Ganja', 'Bachelor of Arts in Finance'),
('aliahm1', 'Medical Academy', '7890 Birch Street, Sumqayit', 'Doctor of Medicine');
