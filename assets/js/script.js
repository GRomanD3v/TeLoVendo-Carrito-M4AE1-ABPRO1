const products = [
    {
        code: 'Sala001',
        name: 'Sofá Modular Confort',
        description: 'Diseño modular adaptable con tapiz suave y estructura firme.',
        price: 350000,
        image: './assets/img/img-se-1.png'
    },
    {
        code: 'Sala002',
        name: 'Mesa de Centro Rústica',
        description: 'Madera rústica con acabado natural, ideal para decoraciones cálidas.',
        price: 95000,
        image: './assets/img/img-se-2.png'
    },
    {
        code: 'Sala003',
        name: 'Estante de Pared Minimalista',
        description: 'Estilo minimalista perfecto para almacenar libros o adornos.',
        price: 45000,
        image: './assets/img/img-se-3.png'
    },
    {
        code: 'Sala004',
        name: 'Alfombra Geométrica',
        description: 'Diseño geométrico moderno que aporta estilo a cualquier espacio.',
        price: 70000,
        image: './assets/img/img-se-4.png'
    },
    {
        code: 'Dorm001',
        name: 'Cama Queen Size Premium',
        description: 'Cama amplia y elegante con base resistente y respaldo tapizado.',
        price: 420000,
        image: './assets/img/img-d-1.png'
    },
    {
        code: 'Dorm002',
        name: 'Velador Moderno',
        description: 'Estructura minimalista en tonos neutros, perfecta para espacios modernos.',
        price: 60000,
        image: './assets/img/img-d-2.png'
    },
    {
        code: 'Dorm003',
        name: 'Cómoda de 4 Cajones',
        description: 'Diseño funcional con gran capacidad de almacenamiento y estilo limpio.',
        price: 180000,
        image: './assets/img/img-d-3.png'
    },
    {
        code: 'Dorm004',
        name: 'Lámpara de Noche LED',
        description: 'Iluminación LED suave con diseño compacto para noches tranquilas.',
        price: 35000,
        image: './assets/img/img-d-4.png'
    },
    {
        code: 'Cocina001',
        name: 'Set de Sartenes Antiadherentes',
        description: 'Tres tamaños de sartén con recubrimiento antiadherente y mangos ergonómicos.',
        price: 75000,
        image: './assets/img/img-c-1.png'
    },
    {
        code: 'Cocina002',
        name: 'Cafetera Espresso Eléctrica',
        description: 'Cafetera eléctrica con sistema de presión ideal para espresso intenso.',
        price: 120000,
        image: './assets/img/img-c-2.png'
    },
    {
        code: 'Cocina003',
        name: 'Juego de Cuchillos Profesionales',
        description: 'Cuchillos de acero inoxidable con soporte moderno y corte profesional.',
        price: 65000,
        image: './assets/img/img-c-3.png'
    },
    {
        code: 'Cocina004',
        name: 'Microondas Digital Compacto',
        description: 'Compacto y potente, ideal para espacios pequeños y cocción rápida.',
        price: 89000,
        image: './assets/img/img-c-4.png'
    },
    {
        code: 'Cocina001',
        name: 'Set de Sartenes Antiadherentes',
        description: 'Tres tamaños de sartén con recubrimiento antiadherente y mangos ergonómicos.',
        price: 75000,
        image: './assets/img/img-c-1.png'
    },
    {
        code: 'Cocina002',
        name: 'Cafetera Espresso Eléctrica',
        description: 'Cafetera eléctrica con sistema de presión ideal para espresso intenso.',
        price: 120000,
        image: './assets/img/img-c-2.png'
    },
    {
        code: 'Cocina003',
        name: 'Juego de Cuchillos Profesionales',
        description: 'Cuchillos de acero inoxidable con soporte moderno y corte profesional.',
        price: 65000,
        image: './assets/img/img-c-3.png'
    },
    {
        code: 'Cocina004',
        name: 'Microondas Digital Compacto',
        description: 'Compacto y potente, ideal para espacios pequeños y cocción rápida.',
        price: 89000,
        image: './assets/img/img-c-4.png'
    },
    {
        code: 'Baño001',
        name: 'Set de Toallas de Algodón',
        description: 'Toallas suaves y absorbentes en set de distintos tamaños.',
        price: 30000,
        image: './assets/img/img-b-1.png'
    },
    {
        code: 'Baño002',
        name: 'Organizador de Ducha Anti-óxido',
        description: 'Organizador metálico resistente al óxido con múltiples niveles.',
        price: 25000,
        image: './assets/img/img-b-2.png'
    },
    {
        code: 'Baño003',
        name: 'Dispensador de Jabón Automático',
        description: 'Sensor automático con recarga fácil y diseño limpio.',
        price: 15000,
        image: './assets/img/img-b-3.png'
    },
    {
        code: 'Baño004',
        name: 'Espejo de Aumento con Luz LED',
        description: 'Espejo con luz LED integrada ideal para maquillaje o afeitado.',
        price: 40000,
        image: './assets/img/img-b-4.png'
    }

];


const cart = [];
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items'); // CORREGIDO: id 'cart-items'
const cartSummaryDiv = document.getElementById('cart-summary'); // Nueva variable para el div del resumen

// Variables para actualizar los spans del resumen del carrito
const netValueSpan = document.getElementById('net-value');
const ivaValueSpan = document.getElementById('iva-value');
const grossValueSpan = document.getElementById('gross-value');


// Recorre los productos para mostrarlos en el HTML
products.forEach((product, index) => {
    const col = document.createElement('div');
    col.className = 'col'; // Clase para la columna de Bootstrap Grid
    col.innerHTML = `
                        <div class="card h-100 product-card">
                            <img src="${product.image}" alt="${product.name}"
                                class="card-img-top product-card__image">
                            <div class="card-body">
                                <h5 class="card-title product-card__title">${product.name}</h5>
                                <p class="card-text product-card__description">${product.description}</p>
                                <p class="card-text product-card__price fw-bold fs-5">$${product.price.toLocaleString('es-CL')}</p>
                                
                                <label for="qty-${index}">Cantidad:</label>
                                <input class="form-control form-control-sm w-50 mb-2" type="number" id="qty-${index}" min="1" value="1">
                            <div class="row p-3">
                                <button class="btn btn-primary btn-sm mb-3" onclick="addToCart(${index})">Añadir <i class="fa-solid fa-cart-plus" style="color: #FFFFFF"></i></button>
                                <button class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#productModal">Ver Detalle</button>
                            </div>   
                            </div>
                        </div>
                   
    `;
    productList.appendChild(col);
});

// Función para renderizar el contenido del carrito y actualizar el resumen
function renderCart() {
    let tableHtml = `<table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Total</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>`;

    let netTotal = 0; // Inicializamos el total neto

    // Recorremos los ítems del carrito para construir las filas de la tabla
    cart.forEach((item, i) => { // 'i' es el índice de cada item en el carrito
        const itemTotal = item.price * item.quantity;
        netTotal += itemTotal; // Sumamos al total neto
        tableHtml += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toLocaleString('es-CL')}</td>
                <td>$${itemTotal.toLocaleString('es-CL')}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${i})">Eliminar <i class="fa-solid fa-trash-can" style="color: #FFFFFF;"></i></button>
                </td>
            </tr>`;
    });

    // Si el carrito está vacío, mostramos un mensaje
    if (cart.length === 0) {
        tableHtml += `<tr><td colspan="5" class="text-center">El carrito está vacío.</td></tr>`;
    }

    tableHtml += `</tbody></table>`;
    cartItems.innerHTML = tableHtml; // Actualizamos el div del carrito con la tabla

    // --- CÁLCULO Y ACTUALIZACIÓN DEL RESUMEN DE COMPRA ---
    const ivaPercentage = 0.19;
    const ivaTotal = netTotal * ivaPercentage;
    let grossTotal = netTotal + ivaTotal; // Usamos 'let' porque puede modificarse con el despacho

    // Cálculo del costo de despacho
    const shippingCost = grossTotal < 100000 ? grossTotal * 0.05 : 0;
    grossTotal += shippingCost; // Sumamos el costo de despacho si aplica

    // Actualizamos los valores en los spans correspondientes
    netValueSpan.textContent = netTotal.toLocaleString('es-CL');
    ivaValueSpan.textContent = ivaTotal.toLocaleString('es-CL', { maximumFractionDigits: 0 }); // IVA sin decimales
    grossValueSpan.textContent = grossTotal.toLocaleString('es-CL');

    // Añadimos la línea de costo de despacho solo si aplica
    if (shippingCost > 0) {
        const shippingP = document.createElement('p');
        shippingP.innerHTML = `<strong>Costo de Despacho (5%):</strong> $${shippingCost.toLocaleString('es-CL')}`;
        // Para evitar duplicados y mantener la estructura, actualizamos todo el contenido de cartSummaryDiv
        // Esto es una forma de hacerlo, alternativamente podríamos insertar/remover el párrafo.
        cartSummaryDiv.innerHTML = `
            <p><strong>Valor Neto:</strong> $<span id="net-value">${netTotal.toLocaleString('es-CL')}</span></p>
            <p><strong>IVA 19%:</strong> $<span id="iva-value">${ivaTotal.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span></p>
            <p><strong>Costo de Despacho (5%):</strong> $${shippingCost.toLocaleString('es-CL')} (si total bruto < $100.000)</p>
            <p><strong>Valor Bruto:</strong> $<span id="gross-value">${grossTotal.toLocaleString('es-CL')}</span></p>
        `;
        // Volvemos a asignar los spans para que sigan siendo referenciados correctamente si se re-renderiza el HTML del summary
        // (Esto es importante si se sobrescribe innerHTML de un padre que contiene los spans)
        // Opcional, solo si el innerHTML se sobrescribe. Si solo se actualizan textContent no es necesario.
        // Para este caso particular, donde se está reescribiendo todo el div `cartSummaryDiv`, es vital.
        // Un enfoque más robusto sería crear y apendizar elementos, o usar solo textContent.
        // Por simplicidad, he replicado el HTML dentro del JS para el caso de despacho.
    } else {
        // Si no hay costo de despacho, aseguramos que la línea no aparezca
        cartSummaryDiv.innerHTML = `
            <p><strong>Valor Neto:</strong> $<span id="net-value">${netTotal.toLocaleString('es-CL')}</span></p>
            <p><strong>IVA 19%:</strong> $<span id="iva-value">${ivaTotal.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span></p>
            <p><strong>Valor Bruto:</strong> $<span id="gross-value">${grossTotal.toLocaleString('es-CL')}</span></p>
        `;
    }

    // Re-obtener las referencias a los spans después de actualizar cartSummaryDiv.innerHTML
    // Esto es CRÍTICO si re-renderizas el HTML completo del div 'cartSummaryDiv'
    // De lo contrario, las variables 'netValueSpan', 'ivaValueSpan', 'grossValueSpan' apuntarán a elementos que ya no existen en el DOM
    // Si usas un enfoque que solo actualiza textContent de los spans, no necesitarías esto.
    // Para simplificar, he puesto el HTML directamente en el innerHTML, lo que hace que necesitemos re-obtenerlos si renderCart se llama de nuevo.
    // Otra solución sería que renderCart() no re-escriba cartSummaryDiv.innerHTML, sino que SOLO actualice los textContent de los spans.
    // Para la complejidad actual, reescribir todo el innerHTML es más simple, pero consciente de esta implicación.
}

// Función para añadir productos al carrito
function addToCart(index) {
    const qtyInput = document.getElementById(`qty-${index}`);
    const quantity = parseInt(qtyInput.value);

    // Validación de la cantidad
    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, ingresa una cantidad válida (un número entero mayor que 0).');
        return;
    }

    const productToAdd = products[index];
    const existingItem = cart.find(item => item.code === productToAdd.code);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...productToAdd, quantity });
    }

    qtyInput.value = 1; // Reinicia la cantidad a 1 después de añadir
    renderCart(); // Actualiza el carrito visible
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina 1 elemento desde la posición 'index'
    renderCart(); // Actualiza el carrito visible
}

// Llama a renderCart() al cargar la página para mostrar el carrito inicialmente (vacío)
document.addEventListener('DOMContentLoaded', renderCart);
