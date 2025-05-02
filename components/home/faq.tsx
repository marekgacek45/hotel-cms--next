import React from 'react'

import FaqItem from '../faq-item'
import { List, ListItem } from '../list'

const Faq = () => {
	return (
		<section className='section'>
			<div className='wrapper'>
				<div className='border border-primary-600 text-center '>
					<h2 className='heading pt-12 after:mx-auto px-5'>Elements Hotel & Spa</h2>
					<span className='mt-5 block'>Ważne informacje</span>

					<div className='pt-12 '>
						<FaqItem title='Doba hotelowa'>
							<p>
								Doba Hotelowa zaczyna się od godziny 16:00 i kończy o godzinie 11:00 dnia następnego. Istnieje możliwość
								wcześniejszego zameldowania lub późniejszego wymeldowania po wcześniejszym kontakcie z recepcją.
							</p>
						</FaqItem>
						<FaqItem title='Dzieci'>
							<p>
								Dzieci w wieku do lat 3 nocują bezpłatnie, jeżeli śpią na łóżku z rodzicami. W ramach pobytu otrzymują
								ręczniki i wyżywienie. Hotel oferuje możliwość wypożyczenia łóżeczka z pościelą za dodatkową opłatą. Ze
								względu na ich ograniczoną ilość, prosimy o wcześniejszy kontakt w tej sprawie z recepcją, działem
								rezerwacji lub na etapie dokonywania rezerwacji. Cena za pobyt dzieci w wieku 4-12 lat oraz 13-18 lat
								podana jest w każdej z ofert.
							</p>
						</FaqItem>
						<FaqItem title='Parking'>
							<p>Na terenie obiektu znajdują się płatne miejsca na parkingu niestrzeżonym w cenie:</p>

							<List className='mt-0'>
								<ListItem variant='third' description='Parking naziemny 40PLN/doba/auto;' />
								<ListItem variant='third' description='Parking podziemny 60PLN/doba/auto;' />
							</List>

							<p>
								Liczba miejsc parkingowych jest ograniczona. Elements Hotel & Spa nie prowadzi rezerwacji miejsc
								parkingowych.
							</p>

							<p>
								Posiadamy dwa stanowiska do ładowania aut elektrycznych - bezpłatne dla Gości Elements Hotel & Spa i
								Elements Apartments.
							</p>
						</FaqItem>

						<FaqItem title='Wyżywienie'>
							<p>Hotel oferuje posiłki w ramach wykupionego pakietu w restauracji w godzinach:</p>

							<List className='mt-0'>
								<ListItem variant='third' description='Śniadania 7:30-11:00;' />
								<ListItem variant='third' description='Obiadokolacje 16:00-19:00;' />
							</List>

							<p>Godziny serwowania posiłków mogą ulec zmianie.</p>
						</FaqItem>

						<FaqItem title='Room Service'>
							<p>
								Hotel oferuje usługę Room Service. Menu i informacje dostępne są po zeskanowaniu kodu QR znajdującego
								się w każdym pokoju.
							</p>
						</FaqItem>

                        <FaqItem title="Pobyt z pupilem">
                            <p>Hotel akceptuje obecność zwierząt.</p>

                            <p>Zwierzęta mogą przebywać na terenie obiektu za dodatkową opłatą w kwocie 80 PLN/doba w miejscach wyznaczonych. Właściciel zwierzęcia jest zobowiązany do trzymania go w taki sposób, aby nie stanowił zagrożenia dla innych Gości, personelu oraz innych osób. Nie akceptujemy przyjęcia zwierząt powszechnie uznawanych za groźne lub agresywne, w tym: gadów, pajęczaków oraz psów powszechnie uznawanych za agresywne.</p>
                        </FaqItem>

                        <FaqItem title='Inne wskazówki'>
                            <p>Elements Hotel & SPA składa się z dwóch części: skategoryzowanej oraz nieskategoryzowanej. Prosimy o zwrócenie na to uwagi przy dokonywaniu rezerwacji.</p>
                            <p>Elements Apartments zlokalizowane są w budynkach oddalonych od części hotelowej 100 metrów.</p>
                            <p>W okresie zimowym, w przypadku opadów śniegu zalecamy łańcuchy na koła.</p>
                            <p>Opłata uzdrowiskowa w Świeradowie-Zdroju wynosi 6,00 PLN za dobę od osoby.</p>
                        </FaqItem>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Faq
