const luthiers = [
    {
        id: 1,
        nombre: "Fender",
        ciudad: "California, Estados Unidos",
        especialidad: "Guitarras eléctricas y bajos",
        bio: "Marca reconocida por sus guitarras y bajos eléctricos, especialmente por modelos como Stratocaster, Telecaster, Precision Bass y Jazz Bass."
    },
    {
        id: 2,
        nombre: "Gibson",
        ciudad: "Nashville, Estados Unidos",
        especialidad: "Guitarras eléctricas de cuerpo sólido",
        bio: "Fabricante histórico de guitarras eléctricas reconocido por modelos como Les Paul, SG y Explorer, utilizados ampliamente en rock y metal."
    },
    {
        id: 3,
        nombre: "Ibanez",
        ciudad: "Nagoya, Japón",
        especialidad: "Guitarras de 7 cuerdas y metal",
        bio: "Marca japonesa especializada en guitarras eléctricas orientadas al rock y metal, con modelos de siete y ocho cuerdas y diseños de alta velocidad."
    },
    {
        id: 4,
        nombre: "Marshall",
        ciudad: "Milton Keynes, Reino Unido",
        especialidad: "Amplificadores para rock y metal",
        bio: "Fabricante británico de amplificadores reconocido por su sonido de alta ganancia y por su influencia histórica en el desarrollo del sonido del rock."
    }
];


const instrumentos = [
    {
        id: 1,
        nombre: "Fender Player Stratocaster",
        categoria: "Guitarra",
        luthierId: 1,
        precio: 4200000,
        descripcion: "Guitarra eléctrica de cuerpo sólido con tres pastillas single-coil, puente tremolo de dos puntos y perfil de mástil moderno. Ideal para rock, blues y estilos derivados.",
        foto: "img/fender-stratocaster.jpg",
        alt: "Guitarra eléctrica Fender Player Stratocaster"
    },
    {
        id: 2,
        nombre: "Gibson Les Paul Standard",
        categoria: "Guitarra",
        luthierId: 2,
        precio: 14500000,
        descripcion: "Guitarra eléctrica de cuerpo sólido con construcción de caoba y tapa de arce, equipada con dos humbuckers y un sonido potente pensado para rock y hard rock.",
        foto: "img/gibson-les-paul.jpg",
        alt: "Guitarra eléctrica Gibson Les Paul Standard"
    },
    {
        id: 3,
        nombre: "Ibanez RG7421",
        categoria: "Guitarra",
        luthierId: 3,
        precio: 5200000,
        descripcion: "Guitarra eléctrica de siete cuerdas diseñada para estilos modernos y metal, con configuración de humbuckers y una escala pensada para una ejecución rápida.",
        foto: "img/ibanez-rg7421.jpg",
        alt: "Guitarra eléctrica Ibanez de siete cuerdas"
    },
    {
        id: 4,
        nombre: "Fender Player Precision Bass",
        categoria: "Bajo",
        luthierId: 1,
        precio: 4500000,
        descripcion: "Bajo eléctrico de cuatro cuerdas con pastilla split-coil, conocido por sus graves definidos y su presencia característica en rock y otros géneros musicales.",
        foto: "img/fender-precision-bass.jpg",
        alt: "Bajo eléctrico Fender Precision Bass"
    },
    {
        id: 5,
        nombre: "Ibanez SR505E",
        categoria: "Bajo",
        luthierId: 3,
        precio: 5900000,
        descripcion: "Bajo eléctrico de cinco cuerdas con electrónica activa y configuración orientada a obtener una respuesta definida para rock, metal y otros estilos modernos.",
        foto: "img/ibanez-sr505e.jpg",
        alt: "Bajo eléctrico Ibanez de cinco cuerdas"
    },
    {
        id: 6,
        nombre: "Marshall DSL40CR",
        categoria: "Amplificador",
        luthierId: 4,
        precio: 5800000,
        descripcion: "Amplificador de guitarra a válvulas de 40 W con dos canales, ecualización de tres bandas y diferentes opciones de ganancia para sonidos limpios y de alta saturación.",
        foto: "img/marshall-dsl40cr.jpg",
        alt: "Amplificador Marshall DSL40CR"
    },
    {
        id: 7,
        nombre: "Marshall MG30GFX",
        categoria: "Amplificador",
        luthierId: 4,
        precio: 1800000,
        descripcion: "Amplificador de guitarra de 30 W con canales limpios y overdrive, efectos integrados y controles diseñados para práctica y presentaciones pequeñas.",
        foto: "img/marshall-mg30gfx.jpg",
        alt: "Amplificador Marshall MG30GFX"
    },
    {
        id: 8,
        nombre: "Ibanez Tube Screamer TS9",
        categoria: "Pedal",
        luthierId: 3,
        precio: 850000,
        descripcion: "Pedal de overdrive clásico utilizado para añadir saturación y realzar medios. Es habitual como efecto independiente o como impulso para amplificadores de alta ganancia.",
        foto: "img/ibanez-ts9.jpg",
        alt: "Pedal Ibanez Tube Screamer TS9"
    },
    {
        id: 9,
        nombre: "Kit de púas Forja Rocktalica",
        categoria: "Accesorios",
        luthierId: 1,
        precio: 35000,
        descripcion: "Set de púas de diferentes calibres para guitarra eléctrica y bajo, pensado para practicar diferentes técnicas de interpretación.",
        foto: "img/kit-puas.jpg",
        alt: "Kit de púas para guitarra y bajo"
    }
];


function formatearPrecio(valor) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(valor);
}


function buscarLuthier(id) {
    return luthiers.find((luthier) => luthier.id === id);
}