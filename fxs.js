$(function(){
	ZonaUsuario = moment.tz.guess()
	/*FechaEvento = moment()

	FechaEvento.date(9)
	FechaEvento.month(6)
	FechaEvento.year(2021)
	FechaEvento.hour(12)
	FechaEvento.minute(15)*/

	// Hora Argentina
	//FechaEvento.format()
	HoraArg = moment.tz('2021-07-09 12:15:00', 'America/Buenos_Aires');

	// Hora Usuario
	HoraUsuario = moment.tz('2021-07-09 12:15:00', ZonaUsuario);

	htmlArg = HoraArg.format("DD/MM/YYYY HH:mm (ZZ)") + " | Zona horaria: America/Buenos_Aires"
	$("#HoraArg").html(htmlArg)

	htmlUsuario = HoraUsuario.format("DD/MM/YYYY HH:mm (ZZ)") + " | Zona horaria (detectada): " + ZonaUsuario
	$("#HoraUsuario").html(htmlUsuario)	

	console.log("v0.5")
})