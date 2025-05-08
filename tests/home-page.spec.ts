import { test, expect } from '@playwright/test';
const { BookingPage } = require('../pages/bookingPage');

test('Verificar que el usuario pueda navegar por el manu', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();

  // Clic en "Stays"
   await page.click('//*[@id="accommodations"]');
   await expect(page.url()).toContain('booking.com/index');
 
   // Clic en "flights"
   await page.click('//*[@id="flights"]');
   await expect(page.url()).toContain('booking.com/index');

   // Clic en "Car rentals"
   await page.click('//*[@id="cars"]');
   await expect(page.url()).toContain('booking.com/cars/index');

   // Clic en "Airport taxis"
   await page.click('//*[@id="airport_taxis"]');
   await expect(page.url()).toContain('booking.com/taxi/index');
 
});


test('Verificar q se muestre el carrusel “Busca por tipo de alojamiento”', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();

  // Verificar que el carrusel contiene tarjetas.
  const carruselItems = page.locator('[data-testid="property-type-carousel"] [role="listitem"]');
  //await expect(carruselItems).toHaveCountGreaterThan(0);

 
});