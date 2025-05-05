require('dotenv').config();
const request = require('supertest');
const fs = require('fs');
const path = require('path');

// URL base untuk API
const baseUrl = 'https://restful-booker.herokuapp.com';

// Membaca data booking dari file JSON
const bookingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'bookingData.json'), 'utf8'));

let token;
let bookingId;

describe('API E2E Testing', () => {
  // Test untuk mendapatkan token (API Auth)
  it('should authenticate and get a token', async () => {
    const response = await request(baseUrl)
      .post('/auth')
      .send({
        username: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();

    token = response.body.token;
  });

  // Test untuk membuat booking (API createBooking)
  it('should create a new booking', async () => {
    const response = await request(baseUrl)
      .post('/booking')
      .send(bookingData)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.bookingid).toBeDefined();

    bookingId = response.body.bookingid;
  });

  // Test untuk mendapatkan booking (API getBooking)
  it('should get the booking details', async () => {
    const response = await request(baseUrl)
      .get(`/booking/${bookingId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.firstname).toBe(bookingData.firstname);
    expect(response.body.lastname).toBe(bookingData.lastname);
    expect(response.body.totalprice).toBe(bookingData.totalprice);
    expect(response.body.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect(response.body.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
  });

  // Test untuk menghapus booking (API deleteBooking)
  it('should delete the booking', async () => {
    const response = await request(baseUrl)
      .delete(`/booking/${bookingId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(201); // Status code untuk berhasil menghapus
  });
});
