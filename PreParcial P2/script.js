const tasasConversion = {
    usd: 0.0011, // Ejemplo de tasa de conversión (1 peso = 0.005 USD)
    eur: 0.0010  // Ejemplo de tasa de conversión (1 peso = 0.004 EUR)
};

function convertirDivisa() {
    const cantidadPesos = document.getElementById('cantidad-pesos').value;
    const monedaDestino = document.getElementById('moneda-destino').value;

    if (!cantidadPesos || !monedaDestino) {
        alert('Por favor, complete todos los campos.'); // Si cantidad pesos OR moneda destino es vacio muestra la alerta
        return;
    }

    const tasaConversion = tasasConversion[monedaDestino];
    const resultadoConversion = cantidadPesos * tasaConversion;

    document.getElementById('resultado').innerText = `Resultado: ${resultadoConversion} ${monedaDestino.toUpperCase()}`;
}

function agregarMoneda() {
    const nombreMoneda = document.getElementById('nombre-moneda').value.trim().toLowerCase();
    const costoConversion = document.getElementById('costo-conversion').value;

    if (!nombreMoneda || !costoConversion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (tasasConversion[nombreMoneda]) {
        alert('Esta moneda ya está agregada.');
        return;
    }

    tasasConversion[nombreMoneda] = 1 / parseFloat(costoConversion);

    const monedaDestino = document.getElementById('moneda-destino');
    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.value = nombreMoneda;
    nuevaOpcion.text = nombreMoneda.charAt(0).toUpperCase() + nombreMoneda.slice(1);
    monedaDestino.add(nuevaOpcion);

    alert('Moneda agregada exitosamente.');
    document.getElementById('nueva-moneda-form').reset();
}
