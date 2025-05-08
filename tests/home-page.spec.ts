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


test('Verificar que el usuario pueda navegar por las opciones del carrusel”', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();

  await page.click('//*[@id=":r1f:"]/li[2]/a');
  await expect(page.url()).toContain('https://www.booking.com/apartments/index');

  await page.click('//*[@id="breadcrumb"]/ol/li[1]/div/a');



  // Lista de elementos a los que quieres hacer click y su URL esperada
  const secciones = [
    { xpath: '//*[@id=":r1f:"]/li[1]/a', urlEsperada: '/hotel' },
    { xpath: '//*[@id=":r1f:"]/li[2]/a', urlEsperada: '/apartments' },
    { xpath: '//*[@id=":r1f:"]/li[3]/a', urlEsperada: '/resorts' },
    { xpath: '//*[@id=":r1f:"]/li[4]/a', urlEsperada: '/villas' },
    { xpath: '//*[@id=":r1f:"]/li[5]/a', urlEsperada: '/chalet' }
  ];

  for (const seccion of secciones) {
    // Ir a la sección
    await page.click(seccion.xpath);
    await expect(page.url()).toContain(seccion.urlEsperada);

    // Volver al inicio usando breadcrumb
    await page.click('//*[@id="breadcrumb"]/ol/li[1]/div/a');
    await expect(page.url()).toContain('https://www.booking.com'); // Ajusta si el home es diferente
  }
  


});