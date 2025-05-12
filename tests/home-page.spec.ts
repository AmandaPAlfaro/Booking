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
  // Lista de elementos a los que quieres hacer click y su URL esperada
  const secciones = [
    { xpath: '//*[@id=":r1f:"]/li[1]/a', urlEsperada: '/hotel' },
    { xpath: '//*[@id=":r1f:"]/li[2]/a', urlEsperada: '/apartments' },
    { xpath: '//*[@id=":r1f:"]/li[3]/a', urlEsperada: '/resorts' },
    { xpath: '//*[@id=":r1f:"]/li[4]/a', urlEsperada: '/villas' },
    { xpath: '//*[@id=":r1f:"]/li[5]/a', urlEsperada: '/chalet' },
    { xpath: '//*[@id=":r1f:"]/li[6]/a', urlEsperada: '/cottages' },
    { xpath: '//*[@id=":r1f:"]/li[7]/a', urlEsperada: '/glamping' },
    { xpath: '//*[@id=":r1f:"]/li[8]/a', urlEsperada: '/aparthotels' },
    { xpath: '//*[@id=":r1f:"]/li[9]/a', urlEsperada: '/holiday-homes' },
    { xpath: '//*[@id=":r1f:"]/li[10]/a', urlEsperada: '/guest-house' },
    { xpath: '//*[@id=":r1f:"]/li[11]/a', urlEsperada: '/hostels' },
    { xpath: '//*[@id=":r1f:"]/li[12]/a', urlEsperada: '/motels' },
    { xpath: '//*[@id=":r1f:"]/li[13]/a', urlEsperada: '/bed-and-breakfast' },
    { xpath: '//*[@id=":r1f:"]/li[14]/a', urlEsperada: '/ryokans' },
    { xpath: '//*[@id=":r1f:"]/li[15]/a', urlEsperada: '/riad' },
    { xpath: '//*[@id=":r1f:"]/li[16]/a', urlEsperada: '/holiday-parks' },
    { xpath: '//*[@id=":r1f:"]/li[17]/a', urlEsperada: '/homestay' },
    { xpath: '//*[@id=":r1f:"]/li[18]/a', urlEsperada: '/campings' },
    { xpath: '//*[@id=":r1f:"]/li[19]/a', urlEsperada: '/country-houses' },
    { xpath: '//*[@id=":r1f:"]/li[20]/a', urlEsperada: '/farm-holidays' },
    { xpath: '//*[@id=":r1f:"]/li[21]/a', urlEsperada: '/boats' },
    { xpath: '//*[@id=":r1f:"]/li[22]/a', urlEsperada: '/camp' }, 
    { xpath: '//*[@id=":r1f:"]/li[23]/a', urlEsperada: '/self-catering' },
    { xpath: '//*[@id=":r1f:"]/li[24]/a', urlEsperada: '/tiny-house' }
  ];

  for (const seccion of secciones) {
    // Ir a la sección
    await page.click(seccion.xpath);
    await expect(page.url()).toContain(seccion.urlEsperada);

    

    // Volver al inicio usando breadcrumb
    await page.click('//*[@id="breadcrumb"]/ol/li[1]/div/a');
    test.setTimeout(60000);
    await expect(page.url()).toContain('https://www.booking.com');

        // --- Verificar y cerrar popup si aparece ---
    const popupCerrarBtn = page.locator('//*[@id="b2searchresultsPage"]/div[26]/div/div/div/div[1]/div[1]/div/div/button'); // Cambia este selector por el real del botón de cerrar

    if (await popupCerrarBtn.count() > 0) {
      if (await popupCerrarBtn.isVisible()) {
        await popupCerrarBtn.click();
      }
    }
  }
});