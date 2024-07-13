CREATE TABLE Car (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model_name VARCHAR(255) NOT NULL,
    model_year YEAR NOT NULL,
    brand_id INT,
    type ENUM('petrol', 'hybrid', 'electric') NOT NULL,
    no_of_seater TINYINT NOT NULL,
    engine_litre DECIMAL(2,1) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (brand_id) REFERENCES Brand(id)
);


CREATE TABLE Brand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE Booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    user_id INT,
    start_datetime DATETIME NOT NULL,
    end_datetime DATETIME NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES Car(id),
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    dob DATE NOT NULL,
    have_driving_license BOOLEAN NOT NULL
);


CREATE TABLE Address (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE INDEX idx_brand_id ON Car(brand_id);
CREATE INDEX idx_car_id ON Booking(car_id);
CREATE INDEX idx_user_id ON Booking(user_id);


ALTER TABLE Car ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Car ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE Brand ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Brand ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE User ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE User ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE Booking ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Booking ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;


